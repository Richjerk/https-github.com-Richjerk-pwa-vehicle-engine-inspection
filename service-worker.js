self.addEventListener("install",event=>{
console.log("Service Worker installing.");
});

self.addEventListener("activate",event=>{
console.log("Service Worker activating.");
});

const promise=new Promise((resolve,reject)=>{
//async function execution
//resolve is called on success
//reject is called on failure

function generateRandomNumber(){
return new Promise(function(resolve,reject){
setTimeout(function(){
const nb=Math.floor(Math.random()*10);//random
if (nb%2==0){
resolve(nb);
}else{
reject({message:"odd number",number:nb});
}
},1000);
});
}
