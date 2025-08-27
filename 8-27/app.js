// var cleanestCities = ["Karachi", "Lahore", "Faisalabad", "Rawalpindi", "Islamabad", "Multan",];

// var cityToCheck = prompt("Enter your city")
// var matchFound = false
// for (var i = 0; i <= cleanestCities.length; i++) {
//     if (cityToCheck === cleanestCities[i]) {
//         alert("It's one of the cleanest cities");
//         matchFound = true
//     }
// }
// if(!matchFound){
//     alert("It's not on the list")
// }

var school = [
    {
        className: "Class 1",
        student: ["Ayesha", "shohaib", "Agha"]
    },
    {
        className: "Class 2",
        student: ["Hassan", "Sana", "Muzammil"]
    },
    {
        className: "Class 3",
        student: ["Bilal", "Faizan", "Zahra"]
    },
]
// console.log(school)

for (var i = 0; i < school.length; i++) {
    console.log(school[i].className)
    for (var j = 0; j < school[i].student.length; j++) {
        console.log("   Student : " + school[i].student[j])
    }
}