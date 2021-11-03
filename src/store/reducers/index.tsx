const Reducers = (state = {count: 0}, action) => {
    switch(action.type){
        case 'counter_increment':
            return Object.assign({}, state, {
                count: state.count +1
            });
        case 'counter_decrement':
            return Object.assign({}, state,{
                count: state.count -1
            });
        default:
            return state
    }
}

export default Reducers;