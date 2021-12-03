export const state = () => ({
    list:[]
})

export const mutations = {
    updateList(state, payload){
        
        const index = state.list.findIndex( (element) => payload.item.id == element.id  );
        payload.item.saved_ans = payload.ans;
        state.list.splice(index, 1, payload.item);
    },
    setList(state, list){
        state.list = list;
    }
}