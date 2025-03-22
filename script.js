// Video URL
// ---------------------------

// The following code will display an alert from the browser (not the website) to show something to the user.
// الكود التالي سيعرض تنبيهًا من المتصفح (وليس الموقع) لعرض شيء للمستخدم.

// alert("Hello, world!");

// ---------------------------

// Console - JavaScript has its own console that you can view from the browser and execute commands through.
// وحدة التحكم - تمتلك JavaScript وحدة تحكم خاصة بها يمكنك عرضها من المتصفح وتنفيذ الأوامر من خلالها.

// Try action and clear()
// دعونا نجرب بعض الأوامر

// The following commands will print messages to the console as a log history.
// الأوامر التالية ستطبع رسائل إلى وحدة التحكم كتاريخ سجلات.

// console.log("Ethical hacking way");
// console.log("Hello, world!");

// We can do the same thing, but it will display as an error log.
// يمكننا فعل الشيء نفسه، لكنه سيظهر كسجل خطأ.

// console.error("Error 404");
// console.error("Mostafa");

// If you want to clear the entire console screen, you can use this command.
// إذا كنت تريد مسح شاشة وحدة التحكم بالكامل، يمكنك استخدام هذا الأمر.

// clear();

// ---------------------------

// How to define a variable
// كيفية تعريف متغير

// In JavaScript, we use var, let, and const to declare variables.
// في JavaScript، نستخدم var و let و const لتعريف المتغيرات.

/*
var:
  - It is used for declaring variables with a function or global scope and can be reassigned.
  - يتم استخدامها لإعلان متغيرات ذات نطاق دالة أو نطاق عام ويمكن إعادة تعيينها.

let:
  - It is used for declaring variables with a block scope and can be reassigned.
  - يتم استخدامها لإعلان متغيرات ذات نطاق كتلة ويمكن إعادة تعيينها.

const:
  - It is used to declare constant variables that cannot be changed.
  - يتم استخدامها لإعلان متغيرات ثابتة لا يمكن تغييرها.
*/

// var a = 10;
// let b = 20;
// const c = 30;

// ---------------------------

// We cannot do the following because 'c' is a constant value.
// لا يمكننا فعل ما يلي لأن 'c' هو متغير ثابت.

// c = 90; // This will cause an error

// ---------------------------

// How to insert a value into a log print
// كيفية إدراج قيمة داخل الطباعة في السجل

// console.log(`Value of a is ${a}`);
// console.log(`Value of b is ${b}`);
// console.log(`Value of c is ${c}`);

// This function helps us determine the data type of a variable.
// هذه الدالة تساعدنا في معرفة نوع البيانات الخاصة بالمتغير.

// console.log(`Data type of b is ` + typeof(b));

// Print variable
// طباعة المتغير

// console.log(b);

// ---------------------------

// Boolean with a comparison
// القيم المنطقية مع المقارنة

// var g = b > a;

// It must print true or false.
// يجب أن تطبع إما true أو false.

// console.log(g);

// ---------------------------

// Loops in JavaScript
// الحلقات في JavaScript

// How to create a for loop
// كيفية إنشاء حلقة for

// A for loop is a counter loop that runs a specific number of times.
// حلقة for هي حلقة عداد تعمل لعدد معين من المرات.

// for (let i = 0; i <= 20; i++) {
//     console.log(i);
// }

// How to create a while loop
// كيفية إنشاء حلقة while

// The key difference is that while loops require variable initialization before the loop starts.
// الفرق الأساسي هو أن حلقات while تتطلب تهيئة المتغير قبل بدء الحلقة.

// var x = 0;
// while (x <= 20) {
//     console.log(x);
//     x++;
// }

// ---------------------------

// Conditional statements
// العبارات الشرطية

// Example values for testing
// قيم تجريبية للاختبار

// const x = 19;
// const x = 29;
// const x = 20;
// const z = 20;

// The if statement checks a condition and executes the code if the condition is true.
// جملة if تتحقق من شرط معين وتنفيذ الكود إذا كان الشرط صحيحًا.

// if (x == 20) {
//     console.log(`z value is ${z}`);
//     console.log(`x value is ${x}`);
// }

// else if statement allows checking multiple conditions.
// جملة else if تسمح بفحص شروط متعددة.

// else if (x > 20) {
//     console.log("x value is greater than 20");
// }

// The else statement runs if none of the previous conditions are met.
// جملة else تعمل إذا لم يتم استيفاء أي من الشروط السابقة.

// else {
//     console.log("x value is less than 20");
// }



// ---------------------------

// Arrays in JavaScript
// المصفوفات في JavaScript

// Creating an array with different data types
// إنشاء مصفوفة تحتوي على أنواع بيانات مختلفة

// var arr = new Array(1,2,3,4,5,"mostafa","hassounaaa");
// console.log(arr);
// console.log(arr[1]); // Accessing an element by index
// console.log(arr.length); // Getting array length

// Looping through an array
// التكرار عبر المصفوفة

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// Creating two separate arrays
// إنشاء مصفوفتين منفصلتين

// var arr1 = new Array(1,2,3,4,5,"mostafa");
// var arr2 = new Array(6,7,8,9,0,"hasounaaa");

// console.log(arr1);
// console.log(arr1[4]);
// console.log(arr2);
// console.log(arr2[3]);

// Merging two arrays using concat()
// دمج مصفوفتين باستخدام concat()

// arr3 = arr1.concat(arr2);
// console.log(arr3[11]);
// console.log(arr1);

// Adding a value at the end of an array using push()
// إضافة قيمة في نهاية المصفوفة باستخدام push()

// arr1.push("test");
// for (let i = 0; i < arr1.length; i++) {
//     console.log(arr1[i]);
// }



// ---------------------------

// Objects in JavaScript
// الكائنات في JavaScript

// Creating an object
// إنشاء كائن

// var man = {
//   user: "mostafa",
//   age: 30
// };
// console.log(man); // Display the entire object
// console.log(man.user); // Accessing an object property

// ---------------------------

// DOM Manipulation
// التعامل مع DOM

// document.getElementById('id1').innerHTML = "h1 has been edited";

// Function to handle click event and change styles
// دالة للتعامل مع حدث النقر وتغيير الأنماط

function clicked() {
  // document.getElementById('id1').innerHTML = "h1 has been edited";
  // document.getElementById('id1').style.color = "red";
  // document.getElementById('id1').style.fontFamily = "Helvetica";
  // document.write("<a href='jhjhjhjhj.com'>click</a>");
  // console.log(document.cookie);
}
