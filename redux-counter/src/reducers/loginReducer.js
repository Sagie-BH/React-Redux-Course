const loginReducer = (state = false, action) => {
    switch (action.type){
        case 'SIGN_IN' : return true;
        case 'SING_OUT': return false;
        default: return false;
    }
}
export default loginReducer;