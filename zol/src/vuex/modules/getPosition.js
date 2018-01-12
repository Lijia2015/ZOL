

const getPosition = (cb)=>{
	
	console.log("开始定位了")
	
	var map, geolocation;
    //加载地图，调用浏览器定位服务
    map = new AMap.Map('container', {
        resizeEnable: true
    });
    map.plugin('AMap.Geolocation', function() {
        geolocation = new AMap.Geolocation({
            enableHighAccuracy: true,//是否使用高精度定位，默认:true
            timeout: 20000,          //超过10秒后停止定位，默认：无穷大
            buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
            zoomToAccuracy: true,      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
            buttonPosition:'RB'
        });
        geolocation.getCurrentPosition();
        AMap.event.addListener(geolocation, 'complete', function onComplete(data) {
//	       console.log(data.position.getLat(),data.position.getLng())
	        regeocoder([data.position.getLng(),data.position.getLat()])
	    });//返回定位信息
    });

    function regeocoder(pos) {  //逆地理编码
        var geocoder = new AMap.Geocoder({
            radius: 1000,
            extensions: "all"
        });        
        geocoder.getAddress(pos, function(status, result) {
            if (status === 'complete' && result.info === 'OK') {
                console.log(result)
				let city = result.regeocode.addressComponent.province
//              let city = {
//              	address:result.regeocode.aois["0"].name,
//              	latitude:pos[1],
//              	longitude:pos[0]
//              }

				console.log(city)
                cb(city)
            }
        });
    }
}

export default getPosition