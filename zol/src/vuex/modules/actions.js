import getPosition from './getPosition'
const actions = {
	getPosition({commit}){
		console.log(getPosition)
		getPosition((city)=>{
			commit('getPosition',city)
		})
	},
}

export default actions