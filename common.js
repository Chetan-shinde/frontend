const common = function(context){
    this.context = context;
}
common.prototype.setAuthCookie =   async (cookieObj, token) => {
    //console.log('setting token' + token);
    //console.log(cookieObj)
    cookieObj.remove('auth')
    await cookieObj.set('auth', {token:token}, {
        path: '/',
        maxAge: 60 * 60 * 24 * 1
    })
    console.log("common " + token)
}
common.prototype.getMqs = async (obj) => {
    try {
        //console.log("mqs axios");
        const mqs = await obj.$axios.$post('/mqs/getmqs', {
            'language': obj.$store.state.language,
                'device_id':'6788',
                'device_type':"2"
        });
        obj.$store.commit('mq/setList', mqs.response) 
    } catch (error) {
        //console.log(error)
        //console.log("error in mqs");
    }
}

common.prototype.setJs = function() {
    const {store} = this.context;
    const js = store.state.js.map( (item)=>{ return {src:item, body:true} } );
    return js;
}
export default common

