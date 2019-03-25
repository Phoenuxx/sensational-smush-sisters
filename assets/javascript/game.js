var heroClicked = false;
var enemyClicked = false;
var enemyInArena = false;
var enemyIsLiving = true;

var enemiesLeft = 3;

var yourFighter;
var opposingFighter;
var yourHp;
var enemyHp;
var enemyID;


var link = {
    hp: 150,
    atk: 7,
    def:15,

    

    takeDamage: function() {
        this.hp = this.hp - opposingFighter.def;
        parseInt(this.hp);
        console.log(this.hp);
    },

    combat: function() {
        opposingFighter.hp = opposingFighter.hp - this.atk
        this.atk = this.atk + 7;
    },
};

var mario = {
    hp: 180,
    atk: 6,
    def: 12,

    takeDamage: function() {
        this.hp = this.hp - opposingFighter.def;
        parseInt(this.hp);
        console.log(this.hp);
    },

    combat: function() {
        opposingFighter.hp = opposingFighter.hp - this.atk
        parseInt(this.hp); 
        this.atk = this.atk + 6;
    },
};

var pikachu = {
    hp: 100,
    atk: 10,
    def: 20,

    takeDamage: function() {
        this.hp = this.hp - opposingFighter.def;
        parseInt(this.hp);
        console.log(this.hp);
    },

    combat: function() {
        opposingFighter.hp = opposingFighter.hp - this.atk
        this.atk = this.atk + 10;
    },
};

var samus = {
    hp: 200,
    atk: 5,
    def: 9,

    takeDamage: function() {
        this.hp = this.hp - opposingFighter.def;
        parseInt(this.hp);
        console.log(this.hp);
    },

    combat: function() {
        opposingFighter.hp = opposingFighter.hp - this.atk
        this.atk = this.atk + 5;
    },
}; 

//What happens when you click the fight button
$(".fight-btn").on("click", function () {
    if( heroClicked == true && enemyClicked == true) {
    yourFighter.takeDamage();
    yourFighter.combat();
    updateHpDisplay();
}   
});

//update the HpDisplays
function updateHpDisplay() {
    $("#hero-health").text(yourFighter.hp);
    $("#enemy-health").text(opposingFighter.hp);
    enemyDefeat();
}

//Determine when an enemy is defeated
function enemyDefeat() {
    if (enemyClicked == true && opposingFighter.hp < 0) {
        console.log("enemy defeated");
        $(".current-enemy-l").remove();
        $(".current-enemy-m").remove();
        $(".current-enemy-p").remove();
        $(".current-enemy-s").remove();
        enemiesLeft--;
        opposingFighter = "";
        enemyClicked = false;
    }
    enemySelect();
    moveEnemyToArena();
}

//pick a new enemy

//Selects your character and denotes the reset as villains
$(".hero").on("click", function() {
    if (heroClicked == false) {
        $(this).attr("class", "chosen-hero");
        $(".hero").attr("class", "villain");
        $(".villain").appendTo("#enemy-select");
        $("#your-char").text("Your Hero-");
        
        heroClicked = true;
    }
});



//Select enemy from villains
function enemySelect() {
    $(".villain").on("click", function() {
        if (enemyClicked === false) {
            enemyID = $(this).attr("id")
            enemyClicked = true;
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
    $("#health1").attr('id', 'hero-health');
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
    $("#health2").attr('id', 'hero-health');
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
    $("#health3").attr('id', 'hero-health');
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
    $("#health4").attr('id', 'hero-health');
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
        switch (enemyID) {
            case 'villain11':
                if (enemyInArena == false) {
                    $(this).attr("class", "current-enemy-l");
                    $(this).appendTo('#arena');
                    $("#health2").attr('id', 'enemy-health');
                    opposingFighter = mario;
                    enemyInArena = true;
                    console.log("Link vs Mario");
                }		    
            break;

            case 'villain12':
                if (enemyInArena == false) {
                    $(this).attr("class", "current-enemy-l");
                    $(this).appendTo('#arena');
                    $("#health3").attr('id', 'enemy-health');
                    opposingFighter = pikachu;
                    enemyInArena = true;
                    console.log("Link vs Pikachu");
                }
            break;
            
            case 'villain13':
                if (enemyInArena == false) {
                    $(this).attr("class", "current-enemy-l");
                    $(this).appendTo('#arena');
                    $("#health4").attr('id', 'enemy-health');
                    opposingFighter = samus;
                    enemyInArena = true;
                    console.log("Link vs Samus");
                }
            break;
            
            case 'villain21':
                if (enemyInArena == false) {
                    $(this).attr("class", "current-enemy-m");
                    $(this).appendTo('#arena');
                    $("#health1").attr('id', 'enemy-health');
                    opposingFighter = link;
                    enemyInArena = true;
                    console.log("Mario vs Link");
                }
            break;
            
            case 'villain22':
                if (enemyInArena == false) {
                    $(this).attr("class", "current-enemy-m");
                    $(this).appendTo('#arena');
                    $("#health3").attr('id', 'enemy-health');
                    opposingFighter = pikachu;
                    enemyInArena = true;
                    console.log("Mario vs Pikachu");
                }
            break;
            
            case 'villain23':
                if (enemyInArena == false) {
                    $(this).attr("class", "current-enemy-m");
                    $(this).appendTo('#arena');
                    $("#health4").attr('id', 'enemy-health');
                    opposingFighter = samus;
                    enemyInArena = true;
                    console.log("Mario vs Samus");
                }
            break;

            case 'villain31':
                if (enemyInArena == false) {
                    $(this).attr("class", "current-enemy-p");
                    $(this).appendTo('#arena');
                    $("#health1").attr('id', 'enemy-health');
                    opposingFighter = link;
                    enemyInArena = true;
                    console.log("Pikachu vs Link");
                }
            break;	
            
            case 'villain32':
                if (enemyInArena == false) {
                    $(this).attr("class", "current-enemy-p");
                    $(this).appendTo('#arena');
                    $("#health2").attr('id', 'enemy-health');
                    opposingFighter = mario;
                    enemyInArena = true;
                    console.log("Pikachu vs Mario");
                }
            break;	
            
            case 'villain33':
                if (enemyInArena == false) {
                    $(this).attr("class", "current-enemy-p");
                    $(this).appendTo('#arena');
                    $("#health4").attr('id', 'enemy-health');
                    opposingFighter = samus;
                    enemyInArena = true;
                    console.log("Pikachu vs Samus");
                }
            break;
            
            case 'villain41':
                if (enemyInArena == false) {
                    $(this).attr("class", "current-enemy-s");
                    $(this).appendTo('#arena');
                    $("#health1").attr('id', 'enemy-health');
                    opposingFighter = link;
                    enemyInArena = true;
                    console.log("Samus vs Link");
                }
            break;
            
            case 'villain42':
                if (enemyInArena == false) {
                    $(this).attr("class", "current-enemy-s");
                    $(this).appendTo('#arena');
                    $("#health2").attr('id', 'enemy-health');
                    opposingFighter = mario;
                    enemyInArena = true;
                    console.log("Samus vs Mario");
                }
            break;
            
            case 'villain43':
                if (enemyInArena == false) {
                    $(this).attr("class", "current-enemy-s");
                    $(this).appendTo('#arena');
                    $("#health3").attr('id', 'enemy-health');
                    opposingFighter = pikachu;
                    enemyInArena = true;
                    console.log("Samus vs Pikachu");
                }
            break;
        }
    })
}