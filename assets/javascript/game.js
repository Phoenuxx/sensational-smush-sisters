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
        heroClicked = true;
    }
});

//Select enemy from villains
$(".villain").on("click", function() {
   
    console.log("test");
    
});

//changes id for villains
$(".hero").on("click", function() {
    var idName = $(this).attr('id');
    switch(idName){
        case 'hero1':
            $("body").attr("class", "body-zelda");
            $(".title").html("<h1>The Legends of Link</h1>");
            $("#hero2").attr('id', 'villain2');
            $("#hero3").attr('id', 'villain3');
            $("#hero4").attr('id', 'villain4');
            console.log("Hero 1 clicked");
        break;
        
        case 'hero2':
          $("body").attr("class", "body-mario");
            $(".title").html("<h1>Super Peach Bros</h1>");
            $("#hero1").attr('id', 'villain1');
            $("#hero3").attr('id', 'villain3');
            $("#hero4").attr('id', 'villain4');
            console.log("Hero 2 clicked");
        break;

        case 'hero3':
           $("body").attr("class", "body-pikachu");
            $(".title").html("<h1>Pika-pika</h1>");
            $("#hero1").attr('id', 'villain1');
            $("#hero2").attr('id', 'villain2');
            $("#hero4").attr('id', 'villain4');
            console.log("Hero 3 clicked");
        break;
        
        case 'hero4':
            $("body").attr("class", "body-samus");
            $(".title").html("<h1>Meteroid</h1>");
            $("#hero1").attr('id', 'villain1');
            $("#hero2").attr('id', 'villain2');
            $("#hero3").attr('id', 'villain3');
            console.log("Hero 4 clicked");
        break;
        
 }
 });