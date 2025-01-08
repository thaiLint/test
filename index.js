function function1() {
  console.log(5 + 10);
}
function1();

function calculate(parameter1) {
    console.log(parameter1 * 0.1);
}
calculate(1000);
function showName(name){
    console.log('She is '+name);

}showName('Freen')
function restParameter(...a) {
    console.log(a);
    
}restParameter("Sun","Moon","Star","Sky","Sound");
// Declare object
const obj ={
    obj1:"Rose",
    obj2:"Tulip",
    obj3:"Daily"
};
//Create function
function getData({obj1,obj2,obj3}){
    return `${obj1} ${obj2} ${obj3}`;
}
console.log(getData(obj));
const arr=["Daily","Rose","Tulip"];
function showData([obj1,obj2,obj3]){
    return `${obj1} ${obj2} ${obj3}`;
}
console.log(showData(arr));
const array=["Daily","Rose","Tulip"];
function showData([obj1,obj2,obj3]){
    return `${obj1} ${obj2} ${obj3}`;
}
console.log(showData(arr));
function5();

function calculate(parameter5) {
    console.log(parameter5 * 0.5);
}
