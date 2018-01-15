import getPosition from './getPosition'
const actions = {
	getPosition({commit}){
		getPosition((city)=>{
			commit('getPosition',city)
		})
	},
}

export default actions