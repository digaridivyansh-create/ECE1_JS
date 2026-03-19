/*let promise=new Promise((resolve,reject)=>{
    let success=true;
    if(success){
        resolve("data loaded");
    }
    else{
        reject("error occured");
    }
});
promise.then(result=> console.log(result))
.catch(error=> console.log(error));*/



localStorage.setItem("name","jeet");

var name1=localStorage.storage.getItem("name");
console.log(name1);