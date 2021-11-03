import { connect } from "react-redux";
import CreateWallet from "../../screens/CreateWallet";

const mapStateTopProps = state =>({
    count: state.Reducers.count
});

const mapDispatchToProps = dispatch => ({
    increment : () => dispatch(counterIncrement),
    decrement : () => dispatch(counterDecrement),
})

export const COUNTER_INCREMENT = 'counter_increment';
export const COUNTER_DECREMENT = 'counter_decrement';
export const counterIncrement = () => ({
    type: COUNTER_INCREMENT
})

export const counterDecrement = () => ({
    type: 'counter_decrement'
})

export default connect(mapStateTopProps, mapDispatchToProps) 