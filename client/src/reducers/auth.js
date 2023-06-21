const authReducer = (state = {data:null}, action) =>{
   switch (action.type){
     case 'AUTH':
      sessionStorage.setItem('Profile', JSON.stringify({ ...action?.data}))
      return { ...state, data: action?.data}
     case "LOGOUT":
      sessionStorage.clear();
      return { ...state, data: null };
     default :
        return state;
   }
}

export default authReducer