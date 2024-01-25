// here is promise method in which we do a setTimeOut mehod and then we do a resolve method & reject method
let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    
    console.log("Resolved after 2 seconds");
    reject(new Error("Error"));
    // resolve(56);
    
  }, 2000);// set time 2second, after 2 second it will print the rejected method
  
});

//here we are trying to catch the value of p1
p1.then((value) => {
  console.log(value);
  let p2 = new Promise((resolve, reject) => {
    //here we make a new promise p2 and give it a  rejected method or resolve method
    reject(new Error("error called in promises chain"));
    // resolve("Promise 2");
    
  });
  //here  we return p2 to p1 
  return p2;
}).catch(error =>{
  // here we catching the error that we make in p1 because we are using p1 currently now & catching the error in p1
    
    console.log("Some error occurred in p2:", error.message); // here we are printing the error message of p1
  }).then((value) => {
  //here we are trying to catching the value of resolve in p1 so we are using p1 now but we did'nt intialize the resolve in p1 so it will throw an error (undefined)
  console.log(value);// here we are printing the value of p1 but error through because we didi'nt intialize the resolve in p1
  console.log("We are done");// but this runs because we are not showing any value or error. here we are  showing a string message in our console so we are not getting any error or value.
});
