export const state = () => ({
    initData:null,
    token:''
})

export const mutations = {
    setInitData(state, payload){
        //state.initData = {...state.initData, token:payload.token, results:payload.results, newToken:payload.newtoken ?? ''}
        state.initData = payload
    },
    setToken(state, token){
        state.token = token;
    }
}

export const actions = {
    async getInitData(context, payload){
        //we used this to get rid from recursion
        /*if(payload.count && payload.count > 3){
            const obj = {name:'chetan'};
            return obj;
        }*/
        try {
             const postData =  {
                'language': context.rootState.language,
                'client_id':'123456789',
                'client_secret':'nuxt-^$%',
                'device_id':'6788',
                'device_type':"2"
            };
            
            const initData = await this.$axios.$post('/init', postData) 
            
            context.commit('setInitData', initData) 
            context.commit('setToken', initData.token)
            
            console.log("success token "+ context.state.token);
        } catch (error) {
            if(error.response.status == 401){
                //await payload.app.$common.setAuthCookie(payload.app.$cookies, error.response.data.response.newtoken);
                context.commit('setToken', error.response.data.response.newtoken)
                console.log("Expired token "+error.response.data.response.newtoken)
                let count = payload.count + 1;
                await context.dispatch('getInitData', {app:payload.app, count:count})
            }
            //console.log(error)
        }
    }
}