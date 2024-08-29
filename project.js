// const doc = document.getElementById("the-form");

// var player1;
// var player2;
// var player3;
// var player4;
// function validate(){
    // const data = new FormData(doc);
    // player1 = data.get("p1_name");
    // player2= data.get("p2_name");
    // player3= data.get("p3_name");
    // player4= data.get("p4_name");

//     if(!player1 || !player2 || !player3 || !player4){
//         alert("All field must be filled");

//     }
//     else if(player1.length < 4 || player2.length < 4 || player3.length < 4 || player4.length < 4 || player1.length > 8 || player2.length > 8 || player3.length > 8 || player4.length > 8){
//         alert("Name must be 4 - 8 characters");

//     }else{
//         window.location.href="GamePage.html";   
//     }

// }

var player1;
var player2;
var player3;
var player4;

$(document).ready(
    function(){

        $("#submit-btn").click(
            function(){
                player1 = $("#p1_name").val();
                player2 = $("#p2_name").val();
                player3 = $("#p3_name").val();
                player4 = $("#p4_name").val();

                if(!player1 || !player2 || !player3 || !player4){
                    alert("All field must be filled");   
                }
                else if(player1.length < 4 || player2.length < 4 || player3.length < 4 || player4.length < 4 || player1.length > 8 || player2.length > 8 || player3.length > 8 || player4.length > 8){
                    alert("Name must be 4 - 8 characters");
                    
                }else{
                    window.location.href="GamePage.html";   
                    
                }

            }
        )
        $("#name1").html("player1");
        $("#name2").html(player2);
        $("#name3").html(player3);
        $("#name4").html(player4);

        $(".help-scroll").hide()
        if($("body").attr("background-color"))

        $("#button1").click(
            function(){
                var img = $("#img1")
                if(img.hasClass('on')){
                    img.fadeOut(500)
                    img.removeClass("on")
                    $("#button1").html("Show image")
                }else{
                    img.show()
                    img.addClass("on")
                    $("#button1").html("Hide image")
                }
            }
        )

        $("#button2").click(
            function(){
                var img = $("#img2")
                if(img.hasClass('on')){
                    img.fadeOut(500)
                    img.removeClass("on")
                    $("#button2").html("Show image")
                }else{
                    img.show()
                    img.addClass("on")
                    $("#button2").html("Hide image")
                }
            }
        )

        $("#button3").click(
            function(){
                var img = $("#img3")
                if(img.hasClass('on')){
                    img.fadeOut(500)
                    img.removeClass("on")
                    $("#button3").html("Show image")
                }else{
                    img.show()
                    img.addClass("on")
                    $("#button3").html("Hide image")
                }
            }
        )
        $("#button4").click(
            function(){
                var img = $("#img4")
                if(img.hasClass('on')){
                    img.fadeOut(500)
                    img.removeClass("on")
                    $("#button4").html("Show image")
                }else{
                    img.show()
                    img.addClass("on")
                    $("#button4").html("Hide image")
                }
            }
        )
        $("#button5").click(
            function(){
                var img = $("#img5")
                if(img.hasClass('on')){
                    img.fadeOut(500)
                    img.removeClass("on")
                    $("#button5").html("Show image")
                }else{
                    img.show()
                    img.addClass("on")
                    $("#button5").html("Hide image")
                }
            }
        )
        $("#button6").click(
            function(){
                var img = $("#img6")
                if(img.hasClass('on')){
                    img.fadeOut(500)
                    img.removeClass("on")
                    $("#button6").html("Show image")
                }else{
                    img.show()
                    img.addClass("on")
                    $("#button6").html("Hide image")
                }
            }
        )

        $("#button7").click(
            function(){
                var img = $("#img7")
                if(img.hasClass('on')){
                    img.fadeOut(500)
                    img.removeClass("on")
                    $("#button7").html("Show image")
                }else{
                    img.show()
                    img.addClass("on")
                    $("#button7").html("Hide image")
                }
            }
        )

        $("#mode").click(
            function(){
                
                if($(this).hasClass("night")){
                    $(this).attr("src", "/Assets/day.952b7ce8.png");
                    $(this).removeClass("night")
                    $("body").css("background-color", "#521B1B");
                    $("footer").css("background-color", "#521B1B");
                    $("nav").css("background-color", "#521B1B");
                }else{
                    $(this).attr("src", "/Assets/night.24273061.png");
                    $(this).addClass("night")
                    $("body").css("background-color", "black");
                    $("footer").css("background-color", "black");
                    $("nav").css("background-color", "black");
                }
                
                
            }
        )
        
        $(".help").click(
            function(){
                $(".help-scroll").toggle()
            }
        )

        $(".ff").click(
            function(){
                if($(".ff").hasClass("1")){
                    $(".ff").removeClass("1");
                    $(".ff").addClass("2");
                    $(".ff").html(">>");
                }else if($(".ff").hasClass("2")){
                    $(".ff").removeClass("2");
                    $(".ff").addClass("3");
                    $(".ff").html(">>>");
                }else if($(".ff").hasClass("3")){
                    $(".ff").removeClass("3");
                    $(".ff").addClass("1");
                    $(".ff").html(">");
                }
            }
        )
    }
)

