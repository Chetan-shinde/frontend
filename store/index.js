export const state = () => ({
    language:'',
    currentComponent:'',
    js:[],
    css:[]
})

export const mutations = {
    setDomainData(state, payload) {
        let keys = Object.keys(payload);
        for (const key of keys){
            state[key] = payload[key];
        }
    },
    setCurrentComponent(state, payload){
        state.currentComponent = payload.currentComponent
    },
    setExtraAsset(state, assets){
        state.js = assets.js;
        state.css = assets.css;
    }
}
