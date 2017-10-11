
const initialState1 ={
  name:'test'
}
const reducer1 = (state = initialState1,action) =>{

//  const reducer1 = (state = {
//   name:'test'
// },action) =>{
  switch (action.type) {
    case "RENAME":
     return state ={
       ...state,
       name :  action.payload
     }

    default:
      return state
  }

}
export default reducer1
