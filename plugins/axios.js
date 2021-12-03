export default  function ({ $axios, app, store}){
    //console.log('axios plugin');
    $axios.setHeader('Content-Type', 'application/json')


    $axios.onRequest(config=>{
        const authCookie = app.$cookies.get('auth')
        const token = store.state.init.token;
        if(token){
            if(token){
                $axios.setHeader('Authorization', `Bearer ${token}`)
            }
            //console.log(`${authCookie.token}`);   
        }
        else if(authCookie){
            if(authCookie.token){
                $axios.setHeader('Authorization', `Bearer ${authCookie.token}`)
            }
           //console.log(`${authCookie.token}`);   
        }
        //console.log(config);
        return config
    })

    /*$axios.onResponse(response=> {
        //console.log(response);
        return response;
    }, error=>{
        console.log('interceptopr');
        if(error.response.status == 401){
            
        }
    })*/
}