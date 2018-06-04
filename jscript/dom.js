
//creating header div dynamically
let container = document.getElementById("container")

let divHeader = document.createElement("div")
divHeader.className = "headerDiv"
container.appendChild(divHeader)

//creating heading h2 for div header
let title = document.createElement("h2")
title.className = "clsTitle"
console.log(title.className)
title.innerHTML = "HighOnCoding"
console.log(title.value)
divHeader.appendChild(title)

// creating span elements
let spanHome = document.createElement("span")
spanHome.className = "clsHomeSpan"
spanHome.innerHTML = "Home"
divHeader.appendChild(spanHome)

let spanCategories = document.createElement("span")
spanCategories.className = "clsCategoriesSpan"
spanCategories.innerHTML = "Categories"
divHeader.appendChild(spanCategories)

// creating article div and appending it to container div
let divArticle1 = document.createElement("div")
divArticle1.className = "clsArticleDiv1"
container.appendChild(divArticle1)

//creating child h2 and p and append it to article div
let divArticle1Head = document.createElement("h2")
divArticle1Head.className = "clsArticle1Head"
divArticle1Head.innerHTML = "Curse of the Current Reviews"
divArticle1.appendChild(divArticle1Head)

let divArticle1Paragraph = document.createElement("p")
divArticle1Paragraph.className = "clsArticle1Paragraph"

let text = "When you want to buy any application from the" 
text += "Apple iTunes store you have more choices than you can handle.\n" 
text += "Most of the users scroll past the application description completely" 
text += "avoiding it like ads displayed on the right column of your webpage." 
text += "Their choice is dependent on three important factors price, screenshot and reviews."
divArticle1Paragraph.innerHTML = text
divArticle1.appendChild(divArticle1Paragraph)
//creating div
let divArticle2 = document.createElement("div")
divArticle2.className = "clsArticleDiv2"
container.appendChild(divArticle2)


//creating child h2 and p and append it to article div
let divArticle2Head = document.createElement("h2")
divArticle2Head.className = "clsArticle2Head"
divArticle2Head.innerHTML = "Hello WatchKit"
divArticle2.appendChild(divArticle2Head)

let divArticle2Paragraph = document.createElement("p")
divArticle2Paragraph.className = "clsArticle2Paragraph"

let text1 = "Last month Apple released the anticipated WatchKit Framework" 
text1 +="for developers in the form of iOS 8.2 beta SDK release. The WatchKit" 
text1 +="framework enable the developers to create Apple Watch applications." 
text1 +="In this article we are going to focus on the basics of getting started" 
text1 +="with the WatchKit framework and developing apps for the Apple Watch."
divArticle2Paragraph.innerHTML = text1
divArticle2.appendChild(divArticle2Paragraph)

let divFooter1 = document.createElement("div")
divFooter1.className = "clsFooterDiv1"
divFooter1.innerHTML="12 Comments " + "      " + "124 Likes"
divArticle2.appendChild(divFooter1)

//creating div
let divArticle3 = document.createElement("div")
divArticle3.className = "clsArticleDiv2"
container.appendChild(divArticle3)



//creating child h2 and p and append it to article div
let divArticle3Head = document.createElement("h2")
divArticle3Head.className = "clsArticle2Head"
divArticle3Head.innerHTML = "Introduction to Swift"
divArticle3.appendChild(divArticle3Head)

let divArticle3Paragraph = document.createElement("p")
divArticle3Paragraph.className = "clsArticle2Paragraph"

let text2 = "Swift is a modern programming language developed by Apple to create" 
text2 +="the next generation of iOS and OSX applications. Swift is a fairly new language" 
text2 +="and still in development but it clearly reflects the intentions and the future" 
text2 +="direction. This article will revolve around the basic concepts in the Swift" 
text2 +="language and how you can get started."

divArticle3Paragraph.innerHTML = text2
divArticle3.appendChild(divArticle3Paragraph)

let divFooter2 = document.createElement("div")
divFooter2.className = "clsFooterDiv1"
divFooter2.innerHTML="15 Comments " +  "45 Likes"
divArticle3.appendChild(divFooter2)


