import axios from 'axios'
import VueNotifications from 'vue-notifications'
//Состаяние
const state = {
	user:null
}
//ТУТ изменяем состояние
const mutations = {

}
//Делаем какое либо действие
const actions = {
	auth({commit},{email,password,repassword}){
		console.log('email',email,'password',password,'repassword',repassword)
		
		if(password===repassword || !repassword){
			axios.post('/api/auth',{
				email,password
			}).then((res)=>{
				console.log('ответ = ',res.data)
			}).catch((err)=>{
				console.log('ошибка = ',err)
			})
		}else{
			VueNotifications.error({message:'Неверные данные!'})
		}
		
	}
}
//Тут получаем состояние
const getters = {

}

export default{
	state,
	mutations,
	actions,
	getters
}