$(document).ready(function () {
    console.log($("h1").text())
    $("h1").text("New text!!!")
    console.log($("ul").text())
    console.log($("li").text())
    $("li").text("Extra Extra!")
    $("ul").html("<li>Hello world!</li><li>meow!</li>")
    console.log($("img").css("width"))
    console.log($("img").attr("src"))
    $("img").css("width", "200px")
    $("img").attr("src", "https://www.mammal.org.uk/sites/default/files/styles/medium/public/american%20mink2921.jpg?itok=NYAXajM_")
    console.log($("input").attr("type"))
    $("input").attr("type", "color")
    $("input").attr("type", "checkbox")
    $("input").attr("type", "input")
    $("img:first-of-type").attr("src", "https://www.worldatlas.com/r/w728-h425-c728x425/upload/30/5c/89/shutterstock-590747948.jpg")
    $("img").last().attr("src", "https://www.worldatlas.com/r/w728-h425-c728x425/upload/30/5c/89/shutterstock-590747948.jpg")
    console.log($("input").val())
    console.log($("input").val("Hi There"))
    console.log($("input").val(""))
    console.log($("#options").val())
    $("h1").addClass("correct")
    $("h1").toggleClass("correct")
})


