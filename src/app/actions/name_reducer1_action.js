export function setName(name) {
  return{
    type:"RENAME",
    payload:name

  }
  // async actions
  // return {
  //   type:"RENAME",
  //   payload:  new promise((resolve,reject) =>{
  //                 resolve(name)
  //     })
  // }
}
