// السؤال الأول
// 1
const name = "عبدالعزيز";
// 2
var age = 15;
// 3 and 4
console.log("أنا " + name + " و عمري " + age);
// 5 and 6
console.log(age * 5);
// -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-

// السؤال الثاني
// 1
var myhobbies = ["basketball", "gaming", "swimming", "running"];
// 2
myhobbies.push(age);
myhobbies.push(age);
// 3
myhobbies.pop(age);
// 4
var WebLang = {
  Web: "Front-End-Dev",
  Mylang: "JavaScript",
  // 5
  teachers: ["menawer", "moudhi", "nancy", "rahaf"],
};
// 6
console.log(WebLang.Web);
// 7
console.log(WebLang.teachers[1]);
// -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-

// البونص
// 1
function Print() {
  return WebLang.teachers[1] + " is my best teacher";
}
// 2
console.log(Print());
// console results => console.png
