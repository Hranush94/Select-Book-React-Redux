// state is not applivation state,just state
export default  function ActiveBook (state=null,action) {
switch (action.type){
  case 'BOOK-SELECTED':
  return action.payload;
  }
  return state;
}