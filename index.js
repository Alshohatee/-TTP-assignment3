/*
Assignment:
Complete and submit the following based on this link (https://gist.github.com/ajLapid718/3f1caaf7365a9d9049c1b5e8b9c45d97):

*/


// Write the code necessary to do the following:
// 1) Select the section with an id of container without using querySelector.
let sectionElUsingId = document.getElementById('container')

// 2) Select the section with an id of container using querySelector.
// way 1:
let sectionElUsingQuery1 = document.querySelector('section')
    // way 2:
let sectionElUsingQuery2 = document.querySelector('#container')

// 3) Select all of the list items with a class of "second".
// This will return list of all the elements with class name of second
let listItemsSecond = document.getElementsByClassName('second')

// 4) Select a list item with a class of third, but only the list item inside of the ol tag.
// way1: 
let listItemsThird1 = document.querySelector('.third')

// way2: 
let listItemsThird2 = document.querySelector('ol li.third')

// 5) Give the section with an id of container the text "Hello!".
sectionElUsingId.innerHTML += "Hello"

// 6) Add the class main to the div with a class of footer.
// way 1
let footerEl1 = document.querySelector('div.footer')
footerEl1.className += " main"


// way 2 getElementsByClassName return list of the footers [div]
let footerEl2 = document.getElementsByClassName('footer')[0]

// footerEl2.className += " main"  


// 7) Remove the class main on the div with a class of footer.
footerEl1.classList.remove("main")

// 8) Create a new li element.
// 9) Give the li the text "four".
// 10) Append the li to the ul element.
// 12) Loop over all of the lis inside the ol tag and give them a background color of "green".
// 13) Remove the div with a class of footer.