// // camelcase
// // snake_case
// // pascalcase

// // let userName: string = "noman" // e.g  camelcase
// // let user_name: string = "owais" // e.g  camelcase
// // let UserName: boolean = true// e.g pascalcase

// // let isUserExist: boolean = true;
// // let is_user_exist: boolean = false;
// // let IsUserExist: number = 1;

// //  let anyType;

// //  = is assigment operator
// // console.log(userName,user_name,UserName)
// // console.log(isUserExist,is_user_exist,IsUserExist)
// //  console.log(anyType)

// // Array => [] => 0, ...

// // let students : any[] =["muzamil","ali","amjad",1,10,true]

// // let students : string[] =["muzamil","ali","amjad"]

// // let friststudentname = students[0]

// // let secondStudentName = students[1]
// // let threeStudentName = students[2]
// // console.log(friststudentname)
// // console.log(secondStudentName)
// // console.log(threeStudentName )

// // console.log(students[5])

// // console.log(students[6])

// // console.log(students[1],students[2])

// //  let userName: string = "ali"
// //  userName = "muzamil"


// // let fruits: string[] = ["apple","mango","banana"]
// // fruits[1] = "grapes"
// // console.log(fruits)



// // tasks
// // create boolean array

// // let boolean =["muzamil",true,false]




// // create  array

// let fruits: string[] = ["apple"]
// let fristname = "exemple"
// let lastname = "exemple"
// let age = 40

// // objects =>{} =>{ key: value }pair

// // let user = {
// //     fristName:'muzamil',
// //     lastName:'khan',
// //     age : 20,
// // }

// let student = {
//   fullNmae : "ali",
//   classId :"abc",
//   rollNo : 10,
//   email: "example@gamil.com",
//   isPassed : true,
// }
// console.log(student.isPassed)
// console.log(student.fullNmae)
// let student2 = {
//     fullName : "awais",
//     classId :"xyz",
//     rollNo : 12,
//     email: "examplexyz@gamil.com",
//     isPassed : true,
//     subjects :["english","urdu","programming"]
//   };

// let students = [student,student2,

// {
//   fullName : "akar",
//   classId :"abc",
//   rollNo : 20,
//   email: "examplexyz@gamil.com",
//   isPassed : true,
//   subjects :["english","urdu","programming"]

// }]


// // [] {} empty

// // let arr = [{},{},{},[]]
// // let obj = {
// //   key : {
// //     key: {

// //     },
// //     key2: []
// //   }
// // // }

// // let Students = [student,student2,

// //   {
// //     fullNmae : "akar",
// //     classId :"abc",
// //     rollNo : 20,
// //     email: "examplexyz@gamil.com",
// //     isPassed : true,
// //     subjects :["english","urdu","programming"]
  
// //   }]

// let user = {
//      fullNmae : "akbar",
//        classId :"abc",
//        rollNo : 20,
//        email: "examplexyz@gamil.com",
//        isPassed : true,
//        subjects :["english","urdu","programming"],
//        feeSchedule :{
//         month:"march 2024",
//         amount : 10000,
//        }
    
//      }
//      console.log(user.fullNmae)
//      console.log(user.classId)
//      console.log(user.rollNo)
//      console.log(user.email)
//      console.log(user.subjects)
//      console.log(user.subjects[1])
//      console.log(user.feeSchedule.month + ", amount = " + user.feeSchedule.amount)


let hospital ={
  doctor1:{doctorName : "Dr jamsheed",    
  speciality:"surgen",
  fees:3000,
  days:"mon,tues,sat"
}
}
let clinic ={
doctor2:{doctorName: " Dr asif ali abasi",
speciality:"neuro",
fees:1000,
days:"sat,friday"
}
}
console.log(hospital);
console.log(hospital.doctor1);
console.log(hospital.doctor1.fees);
console.log(hospital.doctor1.days);
console.log(clinic.doctor2);
console.log(clinic.doctor2.speciality);
console.log(clinic.doctor2.doctorName);
// object
let personDetails:{
firstName : string ,
lastName : string ,
age : number ,
nationality : string ,
isMarried : boolean }={firstName : "muqadas " ,
lastName : "taswer khan" ,
age : 20 ,
nationality : "Pakistani" ,
isMarried : true }
console.log(personDetails);
console.log(personDetails.firstName);
console.log(personDetails.lastName);
console.log(personDetails.age);
console.log(personDetails.nationality);
console.log(personDetails.isMarried);

//array  and object in an object

let personInformation:{
    fullName : string ,
    age : number ,
   religion : string ,
    degrees :string[] ,
    contact :{phoneNumber: number ,
    emailAddress : string}
} = {fullName : "muqadas" ,
age : 20 , 
religion : "Islam" ,
degrees : ["matric" , "intermediate" , "graduate"] ,
contact : {phoneNumber:756384097483 ,
emailAddress : "adanfatima23@gmail.com"}
}
console.log(personInformation);
console.log(personInformation.fullName);
console.log(personInformation.degrees);
console.log(personInformation.degrees[1]);
console.log(personInformation.contact);
console.log(personInformation.contact.emailAddress);
  
