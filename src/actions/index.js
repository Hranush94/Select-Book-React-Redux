export function selectBook(book){
  //selectBook is an action cretaor and needs to return  action,so object with type prop
  
  return{
    type:'BOOK-SELECTED',
    payload:book
  }
}