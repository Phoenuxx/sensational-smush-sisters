var heroClicked = false;
var enemyChosen = false;
var link = {
    hp: 150,
    atk: 7,
    def:27,
    
};

var mario = {
    hp: 180,
    atk: 6,
    def: 25,
};

var pikachu = {
    hp: 100,
    atk: 8,
    def: 30,
};

var samus = {
    hp: 200,
    atk: 5,
    def: 22,
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
$(".villain").on("click", function() {
   
    console.log("test");
    enemyChosen = true;
    
});


function case1() {
    $("body").attr("class", "body-zelda");
    $(".title").css("background-color","#7ca16dad");
    $(".title").html("<h1>The Legends of Link</h1>");
    $("#hero2").attr('id', 'villain11');
    $("#hero3").attr('id', 'villain12');
    $("#hero4").attr('id', 'villain13');
    console.log("Hero 1 clicked");
}

function case2() {
    $("body").attr("class", "body-mario");
    $(".title").css("background-color","#d63e3ca1");
    $(".title").html("<h1>Super Peach Bros</h1>");
    $("#hero1").attr('id', 'villain21');
    $("#hero3").attr('id', 'villain22');
    $("#hero4").attr('id', 'villain23');
    console.log("Hero 2 clicked");
}

function case3() {
    $("body").attr("class", "body-pikachu");
    $(".title").css("background-color","#faec8191");
    $(".title").html("<h1>Pika-pika</h1>");
    $("#hero1").attr('id', 'villain31');
    $("#hero2").attr('id', 'villain32');
    $("#hero4").attr('id', 'villain33');
    console.log("Hero 3 clicked");
}

function case4() {
    $("body").attr("class", "body-samus");
    $(".title").css("background-color","#0f7fca9c");
    $(".title").html("<h1>Meteroid</h1>");
    $("#hero1").attr('id', 'villain41');
    $("#hero2").attr('id', 'villain42');
    $("#hero3").attr('id', 'villain43');
    console.log("Hero 4 clicked");
}


//changes id for villains
$(".hero").on("click", function() {
    var idName = $(this).attr('id');
    switch(idName){
        case 'hero1':
            case1();
            $(".villain").on("click", function() {
            console.log("enemy Chosen");
            enemyChosen = true;
        });
        break;
        
        case 'hero2':
            case2();
        break;

        case 'hero3':
            case3();
        break;
        
        case 'hero4':
           case4();
        break;
        
 }
 });