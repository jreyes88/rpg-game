$(document).ready(function() {

     /* Prepares Each Character Container */
     for (var i = 0; i < characterArray.length; i++) {
          myHTML += "<div class='col-md-15 text-center nullPane' id=" + i + "><h3>" + characterArray[i].name + "</h3><div class='inner-img-container'><img class='hero-images' src=" + characterArray[i].img + "></div><p class='health'</p>" + "health: " + characterArray[i].healthPoints + "</div>";
     };

     instructionHTML = "<h3>Choose a character!</h3>";
     nonFightPaneInstructions = "<h3>Characters Remaining:</h3>";


     /* This loads the data above onto the html */
     $(".activePane").html(myHTML);

     /* Manipulates the Instruction Pane */
     $(".instructionPane").html(instructionHTML);
     $(".nonFightPaneInstructions").html(nonFightPaneInstructions);

     /* User First Click */

     var myHero = "";
     var myVillain = "";

     /* Hero Choice */
     $(".nullPane").click(function(event) {
          if (myHero == "") {
               var heroChoice = $(this);
               $(this).removeClass("nullPane").addClass("heroPane");
               myHero = "full";
               console.log($(this));
          };

          /* Villain Choice */
          instructionHTML = "<h3>Now choose an enemy!!</h3>"
          $(".instructionPane").html(instructionHTML);

          if (myVillain == "" && myHero == "full") {
               $(".nullPane").click(function(event) {
                    $(this).removeClass("nullPane").addClass("villainPane");
                    myVillain = "full";

                    /* Moving Non-Chosen Characters */

                    if (myHero =="full" && myVillain == "full") {
                         $(".nullPane").parent().removeClass("activePane");
                         var nonChosenCharacters = $(".nullPane");
                         $(".nonFightPane").append(nonChosenCharacters);
                         instructionHTML = "<h3>Click the Fight button to fight!</h3>";
                         $(".instructionPane").html(instructionHTML);
                         $(".nonFightPaneInstructions").removeClass("fightInstructionsVisibility");

                         /* Create Fight Button */
                         $(".fightPane").append("<button id='fightButton'>Fight!</button>");
                         $("#fightButton").click(function(event) {
                              console.log("fight button clicked");
                              var characterHealth = $( "li.item-1" )[ 0 ];
                         });
                         // create element, add button, add paragraphs (could be living in there with display: none?)

                         /* Fighting */

                    };
               });
          };
     });
     
});



myHTML = [];
instructionHTML = [];

var characterArray = [
     {
     name: "Bob",
     img: "assets/images/bob.png",
     // img1: "#", (.find for second image to change src for image tag)
     healthPoints: 100,
     attackPower: 5,
     counterAttackPower: 5
     },

     {
     name: "Linda",
     img: "assets/images/linda.png",
     healthPoints: 110,
     attackPower: 10,
     counterAttackPower: 5
     },
     
     {
     name: "Tina",
     img: "assets/images/tina.png",
     healthPoints: 120,
     attackPower: 15,
     counterAttackPower: 5
     },

     {
     name: "Gene",
     img: "assets/images/gene.png",
     healthPoints: 125,
     attackPower: 20,
     counterAttackPower: 5
     },

     {
     name: "Louise",
     img: "assets/images/louise.png",
     healthPoints: 130,
     attackPower: 25,
     counterAttackPower: 5
     }];