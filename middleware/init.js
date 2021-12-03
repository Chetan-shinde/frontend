export default async function({route, store, error, app}){
    const validUrls = [{url:'/en/impotence', component:'CategoryDetail'}, {url:'/en/viagra', component:'ProductDetail'}, {url:'/en', component:''}, {url:'/de', component:'Index'}, {url:'/de/impotence', component:'CategoryDetail'}, {url:'/de/viagra', component:'ProductDetail'}, {url:'/en/', component:''}, {url:'/en/contact-us', component:'ContactUsForm'},
    {url:'/en/login', component:'LoginModel'}, {url:'/en/mqs', component:'MedicalQues'}, {url:'/en/table', component:'Datatable'}
];
    
    const indexOfValidUrl = validUrls.findIndex((item)=> item.url == route.path );
    
    if(indexOfValidUrl == -1){
        error({
            statusCode:404,
            message:`Invalid route ${route.path}`
        })
    }
    else if(route.path.includes('/en')){
        store.commit('setDomainData', {language:'en'})

            //Set component
        store.commit('setCurrentComponent', {currentComponent: validUrls[indexOfValidUrl].component})
        store.commit('setExtraAsset', {js:['https://code.jquery.com/jquery-1.12.4.js', 'https://code.jquery.com/ui/1.12.1/jquery-ui.min.js'], css:['https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css']})
        //set init data by dispatching init action
        await store.dispatch('init/getInitData', {app, count:1});
        
        app.$cookies.set('auth', {token:store.state.init.token}, {
            path: '/',
            maxAge: 60 * 60 * 24 * 1
        })
        
    }

    
}