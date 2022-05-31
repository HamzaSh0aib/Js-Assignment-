// Chapter NO 31 To  34 /// Start

// Question No 1
// var date = new Date();
// document.write(date);


// Question no 2
// const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];

// const current_Month = new Date();
// document.write("The current month is " + monthNames[current_Month.getMonth()]);

// Question no 3
// var day =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// var dayName = new Date();
// document.write("Today is "+day[dayName.getDay()]); 

// Question no 4
// var day =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// var dayName = new Date();
// var Tname = (day[dayName.getDay()]); 
// document.write(Tname)
// if(Tname == day.length){
//     document.write(" Its Fun day!");
// }

// // Question no 5
// var date = new Date();
// var neew = date.getDate();
// if (neew <= date){
//     document.write("First Fifteen Day of the Month");
// }
// else{
//     document.write("Last Day of the Month")
// }

// // Question no 6

// var todayDate = new Date ();
// var Todaymilli = todayDate.getTime ();
// var todayMin = todayDate.getMinutes ();
// var diff = Todaymilli - todayMin;
// var diffMin = diff/(1000*60*60);
// // var accurateMin = Math (diffMin);

// document.write("Current Date: " + todayDate);
// document.write("<br> Elapsed milliseconds since midnight,Jan 1, 1970; "+ Todaymilli);
// document.write("<br> Elapsed milliseconds since midnight,Jan 1, 1970; " + diffMin);

// Question no 7
// var am = new Date().getHours();
// if(am >=0 && am < 12){
//     alert("Its Am")
// }
// else{
//     alert("Its PM")
// }

// Question no 8
// var laterdate = new Date("December ,31 2020")
// document.write("Later Date"+laterdate);

//Question 09
// var ramzanDate = new Date("June 18,2015");
// var current_Date = new Date();
// var ramzanTime = ramzanDate.getTime();
// var current_Time = current_Date.getTime();
// var diff =  current_Time -ramzanTime ;
// var totaldays = diff / (1000*60*60*24);
// totaldays = Math.floor(totaldays);
// document.write(`${totaldays} Days have Passed Since 1st Ramzan, 2015`);

// Question no 10
// var old_date = new Date ("December 5, 2015");
// var old_time = old_date.getTime();
// var date = new Date("December 25, 2015").getTime();
// var diff_between = date - old_date;
// var total_time = diff_between/(1000);
// total_time = Math.floor(total_time);
// document.write(`On Refercence Date ${old_date} <br> ${total_time} Seconds Has Passsed since Begining of 2015`);

// Question No 11
// var Current = new Date ();
// var time = Current.getHours();
// document.write("Current Date : "+Current+'<br>');
// document.write(time +Current);


// // Question no 12
// var current_Date = new Date ();
// var current_Year = new Date ();
// current_Year.setFullYear(1915);
// alert(`Current Date : ${current_Date} \n 100 Years Back : ${current_Year} `)

// // Question no 13
// var Age = +prompt("Enter Your Age ");
// var current_Date = new Date ().getFullYear();
// var diff_between = current_Date-Age;
// document.write(`Your Age is ${Age} <br>
// Your Birth Year is ${diff_between}`);

// Queation no 14
// var current_Date = new Date () ;
// var current_Month = current_Date.getMonth();
// var Name = prompt("Enter Your Customer Name  ");
// var Unit = +prompt("Enter Unit Number ");
// var chargesPerunit = 16;
// var total_amount = Unit*chargesPerunit;
// var laterdate = 350;
// var Final = total_amount + laterdate;
// document.write(
// `<br>K - Electric Bill <br><br>
//  Customer Name: ${Name} <br>
// Month : ${current_Month} <br>
// Number Of Units : ${Unit} <br>
// Charges Per Unit : ${chargesPerunit}<br><br><br>
// Net Amount Payable (with due date) : ${total_amount}<br>
// Late payment surcharge : ${laterdate}<br>
// Gross Amount Payable (after due Date) : ${Final}`
// );


////    Chapter End ////////