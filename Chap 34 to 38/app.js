////  Chap 35 to 38 /// Start 

// Question no 1
// function display (curr){
//     document.write("Current Date : "+curr);
// }
// display(new Date());

// Question no 2
// function greet(firstName , Lastname ){
//     alert(`Hello : ${firstName} ${Lastname} \nHow Are You`);
// }
// greet (prompt("Enter First Name "),prompt("Enter Last Name"));


// Question No 3
// var first_value =+prompt("Enter First value ");
// var second_value =+prompt("Enter Second value");

// function input (){
//     return first_value+second_value;
// }
// alert(input());

// // Question no 4
// function Calculator(num1, Oprator, num2){
//     if(Oprator === "-"){
//         return num1+num2
//     }
//     else if(Oprator === "*"){
//         return num1*num2
//     }
//     else if(Oprator === "/"){
//         return    num1/num2
//     }else if(Oprator === "+"){
//         return num1+num2
//     }else if(Oprator === "%"){
//         return num2/num1*100
//     }
//     else{
//         alert("Enter Correct Value And Oprator")
//     }
    
// }    
 
// var num1 =+prompt("Enter 1st Value ");
// var Oprator = prompt("Enter Oprator")
// var num2 =+ prompt("Enter Second Value")
// var add = Calculator(num1,Oprator,num2)
// alert(`Your First Value Is : ${num1}\n
// Your Oprator Is : ${Oprator}\n
// Your Second Number Is : ${num2}\n
// The Final value Is : ${add}`)



// Question no 5
// function squres (num){
//     var squres = num*num
//    return squres
// }
// var value = +prompt("Enter Value For Squres ");
// var main_value = squres(value);
// alert(`Your Number Is : ${value} \n
// Your Squaring Value Is : ${main_value}`);

// Question  no 6
// function Fac (sum){
//     var num = +prompt("Enter Value For Factorail ");
//     for (var i = sum ; i>=1 ; i--){
//         num = num*i
//     }
//     return num
// }
// var Factorail_value = Fac(9);
// alert(`Factorial Value Is : ${Factorail_value}`);

// Question no 7
// var firstValue = +prompt("Enter First Value ");
// var secondValue =+prompt("Enter End  Value ")
//  function Accounting (firstValue , secondValue){
//      for (var i = firstValue; i<=secondValue;i++){
//          document.write(i+"<br>")
//      }
//  }
// Accounting(firstValue,secondValue)

// Question no 8 
 
        // ///

// // Question no 9 
// var wid = +prompt("Enter Width");
// var hei =+prompt("Enter Height");
// function rectangle(wi , he){
//     var B = wid*hei
//     return B
// }
// alert( rectangle(wid, hei))

// Question no 10
// //

// Question no 11
// var Chap = prompt("Enter a line ");

// function uppercase(para){
//   var one = para.split(" ");
//   var arrey = []
//   for (var i = 0; i< one.length ;i++){
//     arrey.push(one[i].charAt(0).toUpperCase() + one[i].slice(1));

//   }
//   return arrey.join(" ");
// }
// alert(uppercase(Chap));


// // Question no 12
// function reality(later){
//   var one =   later.split(" ");
//   var arrey = one[0];
//   for (var i = 0 ; i < one.length;i++){
//     if(arrey.length< one[i].length){
//       arrey = one[i]
//     }
//   }
//   return arrey
// }
// alert(reality(prompt("Enter A line")));


// Question no 13    
  // function letterCount(str , letter){
  //     var count = 0;
  //     for(var i = 0 ; i < str.length ; i++){
  //         if(str.charAt(i) == letter){
  //             count++
  //         }
  //     }
  
  
  //     return count
  // }
  // var Userstring = prompt("Enter any String Word")
  // var userChar = prompt("Enter any Word Character")
  // var result = letterCount(Userstring ,userChar)
  // document.write(`User Argument : ${Userstring}
  //                 <br> User Letter : ${userChar} <br>
  //                 word count: ${result}`)
  

  // Question no 14
  //// ///// /// 