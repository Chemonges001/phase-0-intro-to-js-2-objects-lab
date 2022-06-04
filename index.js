// Write your solution in this file!
const employee={
    name: "Oscar Kiprop",
    streetAddress: "11 Nairobi",

}
function updateEmployeeWithKeyAndValue(obj, key, value){
  return {
      ...obj, [key]: value
  }
}
function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
obj[key]= value
return obj
}
function deleteFromEmployeeByKey(obj, key, value){
    const newEmployee= {...obj}
    delete newEmployee[key]
    return newEmployee
}
function destructivelyDeleteFromEmployeeByKey(obj, key, value){
    delete obj[key]
    return obj
}
