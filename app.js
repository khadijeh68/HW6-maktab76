//Ex.1
// function accumulatingSum(array){
//     let sum = 0;
//     let res;
//     if (array == []){
//         return [];
//     }else{
//         res = array.map(item => {
//             return sum += item;    
//     }) 
//     }
//     console.log(res);
// }
// accumulatingSum([1,5,7]);


//Ex.2
function starRatings(array){
    let sum = 0;
    let res;
    let round;
    let getSum = array.map((item,index) => item * (index + 1), 0)
        .reduce((acc,val) => acc + val ,0);
    for (let i of array){
        sum += i;
    }
    res = (getSum/sum).toFixed(2);
    round = Math.round(res);
    
    for (let i=1 ; i<=round ; i++){
        console.log(`"[${res}]  *"`);
    } 
}
let array = [0,2,0,1,23];
starRatings(array);

//EX.3
// let user = {
//     id: 6,
//     name: "Hossein",
//     lastName: "Zenderoh",
//     roles: ["student", "admin"],
//     age: 19,
//     scores: { english: 10, math: 19.5, physics: 14 }
// };
// //Ex.3-1
// function newCourseScore(key , newObj){
//     user[key] = {...user[key],...newObj};
//     console.log(user);
// }
// let newObj = {chemistry: 15};
// newCourseScore('scores' , newObj);

// //Ex.3-2
// function newRole(key , role , age){
//     user[key] = {...user[key],role};
//     console.log(user);
//     if (age<18){
//         user = {...user,veryyoung: [role]};
//         console.log(user);
//     }else{
//         console.log("age is more than of 18");
//     }
// }
// newRole('roles' , 'student2', 15);

// //Ex.3-2
// let array = Object.entries(user);
// console.log(array);
// user = {...user,fatherName: "ali"}
// console.log(user);

//Ex.4
// function time(date){
//     let hour = date.getHours();
//     let min = date.getMinutes();
//     let sec = date.getSeconds();
//     let amPm = "AM";
//     if (hour == 0){
//         hour = 12;
//     }
//     if (hour >= 12){
//         hour = hour - 12;
//         amPm = "PM";
//     } 
//     if (hour < 10){
//         hour = "0" + hour;
//     }
//     if (min < 10){
//         min = "0" + min;
//     }
//     if (sec < 10){
//         sec = "0" + sec;
//     }
//     let newTime = hour + ":" + min + ":" + sec + " " + amPm;
//     console.log(newTime);
// }
// time(new Date);
