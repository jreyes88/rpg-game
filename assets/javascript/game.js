$(document).ready(function() {

     /* Prepares Each Character Container */
     for (var i = 0; i < characterArray.length; i++) {
          myHTML += "<div class='col-md-15 text-center' id=" + i + "><h3>" + characterArray[i].name + "</h3><div class='inner-img-container'><img class='hero-images' src=" + characterArray[i].img + "></div><p class='health'</p>" + "health: " + characterArray[i].healthPoints + "</div>";
          console.log(i);
     };

     instructionHTML = "<h3>Choose a character!</h3>";


     /* This loads the data above onto the html */
     $(".activePane").html(myHTML);

     /* Manipulates the Instruction Pane */
     $(".instructionPane").html(instructionHTML);

     /* User First Click */
     $( ".activePane" ).click(function(event) {
          console.log( "clicked: " + event.target.id );
     });

})


myHTML = [];
instructionHTML = [];

var characterArray = [
     {
     name: "Bob",
     img: "assets/images/bob.png",
     healthPoints: 100,
     attackPower: 5,
     counterAttackPower: 5
     },

     {
     name: "Linda",
     img: "assets/images/linda.png",
     healthPoints: 100,
     attackPower: 5,
     counterAttackPower: 5
     },
     
     {
     name: "Tina",
     img: "assets/images/tina.png",
     healthPoints: 100,
     attackPower: 5,
     counterAttackPower: 5
     },

     {
     name: "Gene",
     img: "assets/images/gene.png",
     healthPoints: 100,
     attackPower: 5,
     counterAttackPower: 5
     },

     {
     name: "Louise",
     img: "assets/images/louise.png",
     healthPoints: 100,
     attackPower: 5,
     counterAttackPower: 5
     },];