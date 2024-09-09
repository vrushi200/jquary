$(document).ready(function () {

    $("#sub").click(function () {

        alert("You entered p1!");

    });
     $("#h").hover(function () {
         $("#h").toggle(7000);
         $("#h").toggle(7000);
     });
     $("#h").hover(function () {
         $("#p").show(10000);
         $("#p").hide(10000);
     });
     $("#o").hover(function () {
         $("#o").fadeOut(5000);
     });
     $("#o").hover(function () {
         $("#o").fadeIn(5000);
     })
    $("#i").click(function () {

        $("#i").slideUp(5000);


    });
    $("#i").click(function () {

        $("#i").slideDown(5000);


    });
    $("#ptxt").click(function () {

        $("#l").animate({ marginLeft: '200px' });

    });
    $("#imgbtn").click(function () {

        $("#imgbtn").animate({ marginTop: '100px' });

    });

    $("#btn1").click(function(){
        $("#box").animate({height: "300px"});
      });
      $("#btn2").click(function(){
        $("#box").animate({height: "100px"});
      });
    $("button").click(function(){
        let n=document.getElementById("n").value;
        let a=document.getElementById("a").value;
        let d=document.getElementById("d").value;
        document.getElementById("vr").innerHTML = n;
        document.getElementById("j").innerHTML = a;
        document.getElementById("x").innerHTML = d;
0    })  
});
