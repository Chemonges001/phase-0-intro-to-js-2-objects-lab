// Write your solution in this file!
const employee={
    name: "Oscar Kiprop",
    streetAddress: "11 Nairobi",

}
function updateEmployeeWithKeyAndValue(obj, key, value){
  return {
      ...obj, [key]: value;
  }
}
