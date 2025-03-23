// Q] iii] create object and show deatails of Employs with their birthdate in Notification

const prompt =require("prompt-sync")()
const notifier =require("node-notifier")

const Employs ={
    Abhi:"26-2-2003",
    Omkar:"5-7-2003",
    Somnath:"3-1-2002"
}

for(let i=0;i<Object.keys(Employs).length;i++){
        console.log(i+1 +"]"+Object.keys(Employs)[i])
}

const a=Number.parseInt(prompt("Enter Employs no:"))
switch(a){
case 1:
    notifier.notify({
     
        title:"Employs-Birthdate",
        message:"Employ name is " +Object.keys(Employs)[0] +" and Birth-date is " + Employs[Object.keys(Employs)[0]],})
  
        break;
        
case 2:
     notifier.notify({
      
        title:"Employs-Birthdate",
        message:"Employ name is "+Object.keys(Employs)[1] + " and Birth-date is "+Employs[Object.keys(Employs)[1]] });
      
        break;

 case 3:
    notifier.notify({
        
        title:"Employs-Birthdate",
        message:"Employ name is "+Object.keys(Employs)[2] + "and Birth-date is "+Employs[Object.keys(Employs)[2]] });
 
        break;
default:
    notifier.notify({
       
        title:"Warning",
        message:"Enter correct no !"})    
}