var heroClicked = false;
var enemyChosen = false;
var enemyInArena = false;

var yourFighter;
var yourAP;
var enemyDef;
var opposingFighter;


var link = {
    hp: 150,
    atk: 7,
    def:15,
    

    updateHpDispay: function() {
        hp = hp - enemyDef
    },

    attack: function() {

    },

    defend: function() {

    }
};

var mario = {
    hp: 180,
    atk: 6,
    def: 12,

    defend: function() {
        enemyDef = this.def;
    }
};

$(".fight-btn").on("click", function () {
    if( heroClicked == true && enemyChosen == true) {
    link.updateHpDispay();
}
});



var pikachu = {
    hp: 100,
    atk: 10,
    def: 20,
};

var samus = {
    hp: 200,
    atk: 5,
    def: 9,
}; 

//Selects your character and denotes the reset as villains
$(".hero").on("click", function() {
    if (heroClicked == false) {
        $(this).attr("class", "chosen-hero");
        $(".hero").attr("class", "villain");
        //$(".hero").removeClass("hero").addClass("villain");
        $(".villain").appendTo("#enemy-select");
        $("#your-char").text("Your Hero-");
        
        heroClicked = true;
    }
});



//Select enemy from villains
function enemySelect() {
    $(".villain").on("click", function() {
        if (enemyChosen == false)     {
            console.log("enemy Chosen");
            opposingFighter = $(this).attr("id")
            enemyChosen = true;
        };
    });
}

function hCase1() {
    $("body").attr("class", "body-zelda");
    $(".title").css("background-color","#7ca16dad");
    $(".title").html("<h1>The Legends of Link</h1>");
    $("#hero2").attr('id', 'villain11');
    $("#hero3").attr('id', 'villain12');
    $("#hero4").attr('id', 'villain13');
    yourFighter = link;
    console.log("Hero 1 clicked");
    
}

function hCase2() {
    $("body").attr("class", "body-mario");
    $(".title").css("background-color","#d63e3ca1");
    $(".title").html("<h1>Super Peach Bros</h1>");
    $("#hero1").attr('id', 'villain21');
    $("#hero3").attr('id', 'villain22');
    $("#hero4").attr('id', 'villain23');
    yourFighter = mario;
    console.log("Hero 2 clicked");
}

function hCase3() {
    $("body").attr("class", "body-pikachu");
    $(".title").css("background-color","#faec8191");
    $(".title").html("<h1>Pika-pika</h1>");
    $("#hero1").attr('id', 'villain31');
    $("#hero2").attr('id', 'villain32');
    $("#hero4").attr('id', 'villain33');
    yourFighter = pikachu;
    console.log("Hero 3 clicked");
}

function hCase4() {
    $("body").attr("class", "body-samus");
    $(".title").css("background-color","#0f7fca9c");
    $(".title").html("<h1>Meteroid</h1>");
    $("#hero1").attr('id', 'villain41');
    $("#hero2").attr('id', 'villain42');
    $("#hero3").attr('id', 'villain43');
    yourFighter = samus;
    console.log("Hero 4 clicked");
}


//changes id for villains based on hero selected
$(".hero").on("click", function() {
    var idName = $(this).attr('id');
    switch(idName){
        case 'hero1':
            enemySelect();
            hCase1();    
            moveEnemyToArena();
        break;
        
        case 'hero2':
            enemySelect();
            hCase2();
            moveEnemyToArena();
        break;

        case 'hero3':
            enemySelect();
            hCase3();
            moveEnemyToArena();
        break;
        
        case 'hero4':
            enemySelect();
            hCase4();
            moveEnemyToArena();
        break;
        
    }
 });

//determines which character is moved to the Defender's section based on ID and renames class
 function moveEnemyToArena() {
    $(".villain").on("click", function() {
         switch (opposingFighter) {
            case 'villain11':
            if (enemyInArena == false) {
                $(this).appendTo('#arena');
                $(this).attr("class", "current-enemy-l");
                enemyInArena = true;
                console.log("Link vs Mario");
            }		    
            break;

			case 'villain12':
				if (enemyInArena == false) {
                    console.log("Link vs Pikachu");
                    $(this).attr("class", "current-enemy-l");
					$(this).appendTo('#arena');
				}
			break;
			
			case 'villain13':
				if (enemyInArena == false) {
                    console.log("Link vs Samus");
                    $(this).attr("class", "current-enemy-l");
					$(this).appendTo('#arena');
				}
			break;
			
			case 'villain21':
				if (enemyInArena == false) {
                    console.log("Mario vs Link");
                    $(this).attr("class", "current-enemy-m");
					$(this).appendTo('#arena');
				}
			break;
			
			case 'villain22':
				if (enemyInArena == false) {
                    console.log("Mario vs Pikachu");
                    $(this).attr("class", "current-enemy-m");
					$(this).appendTo('#arena');
				}
			break;
			
			case 'villain23':
				if (enemyInArena == false) {
                    console.log("Mario vs Samus");
                    $(this).attr("class", "current-enemy-m");
					$(this).appendTo('#arena');
				}
            break;

			case 'villain31':
				if (enemyInArena == false) {
                    console.log("Pikachu vs Link");
                    $(this).attr("class", "current-enemy-p");
					$(this).appendTo('#arena');
				}
            break;	
            
			case 'villain32':
				if (enemyInArena == false) {
                    console.log("Pikachu vs Mario");
                    $(this).attr("class", "current-enemy-p");
					$(this).appendTo('#arena');
				}
            break;	
            
			case 'villain33':
				if (enemyInArena == false) {
                    console.log("Pikachu vs Samus");
                    $(this).attr("class", "current-enemy-p");
					$(this).appendTo('#arena');
				}
            break;
            
            case 'villain41':
				if (enemyInArena == false) {
                    console.log("Samus vs Link");
                    $(this).attr("class", "current-enemy-s");
					$(this).appendTo('#arena');
				}
            break;
            
            case 'villain42':
				if (enemyInArena == false) {
                    console.log("Samus vs Mario");
                    $(this).attr("class", "current-enemy-s");
					$(this).appendTo('#arena');
				}
            break;
            
            case 'villain43':
				if (enemyInArena == false) {
                    console.log("Samus vs Pikachu");
                    $(this).attr("class", "current-enemy-s");
					$(this).appendTo('#arena');
				}
			break;
        }
    })
}