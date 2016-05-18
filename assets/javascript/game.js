$(document).ready(function() {

     /* Prepares Each Character Container */
     for (var i = 0; i < characterArray.length; i++) {
          myHTML += "<div class='col-md-15 text-center nullPane' id=" + i + "><h3>" + characterArray[i].name + "</h3><div class='inner-img-container'><img class='hero-images' src=" + characterArray[i].img + "></div><p class='health'</p>" + "health: " + characterArray[i].healthPoints + "</div>";
          //console.log(i);
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
     var clickCount = [];

     /* Hero Choice */
     $(".nullPane").click(function(event) {
          if (myHero == "") {
               var heroChoice = $(this);
               $(this).removeClass("nullPane").addClass("heroPane");
               myHero = "full";
               clickCount++;;
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
                         instructionHTML = "<h3>Fight!</h3>";
                         $(".instructionPane").html(instructionHTML);
                         $(".nonFightPaneInstructions").removeClass("fightInstructionsVisibility");
                         clickCount++;
                    };
                    console.log(clickCount);
                    if (clickCount == 2) {
                         gameHTML = "<div class='col-md-15 text-center heroPane' id=' + i + '><h3>' + characterArray[i].name + '</h3><div class='inner-img-container'><img class='hero-images' src=' + characterArray[i].img + '></div><p class='health'</p>' + 'health: ' + characterArray[i].healthPoints + '</div>";
                         $(".activePane").html(gameHTML);
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
     }];