function speed_char(){

    let speed = document.getElementById("SpeedF").value;
    let distance = document.getElementById("DistanceM").value;
    let hours = Math.trunc((distance*5280)/speed/60/10);
    let minutes = Math.trunc((( distance*5280)/speed/10)%60);
    document.getElementById("Travel_time").innerHTML = hours + " hours and " + minutes + " minutes";
}

function speedf2m(){//charspd (ft/6s) -> mph ()
    let speed = document.getElementById("SpeedF").value;
    document.getElementById("SpeedM").value = ((speed/6)/1.467).toFixed(2);
}

function speedm2f(){//mph -> charspd (ft/6s) (1mph = 1.467fps)
    let speed = document.getElementById("SpeedM").value;
    document.getElementById("SpeedF").value = ((speed*6)*1.467).toFixed(2);
}

function area_calc(){
    let area = document.getElementById("Area3").value;
    let width = document.getElementById("Area_Width").value;

    if (area<2) {
        area=2;
        document.getElementById("Area3").value = area;
    }

    if (width>=(area)){
        width=area-1;
        document.getElementById("Area_Width").value = width;
    }

    else if (width<1){
        width=1;
        document.getElementById("Area_Width").value = width;
    }

    else {
        let coverage = (Math.pow((area) - width+1, 3));
        document.getElementById("Area_Converted").innerHTML = coverage + " x " + width + " (ft²) ";
    }
}

function rounds_r2t(){
    let rounds = document.getElementById("Round_Rounds").value;
    let seconds = (rounds*6)%60;
    document.getElementById("Round_Minutes").value = Math.trunc(rounds/10);
    document.getElementById("Round_Seconds").value = (seconds);
}

function rounds_t2r(){
    let minutes = document.getElementById("Round_Minutes").value;
    let seconds = document.getElementById("Round_Seconds").value;
    let time = (seconds/6) + (minutes*10);
    document.getElementById("Round_Rounds").value = Math.trunc(time);
}

let selection = "n";
let display_number = 0;

function push_display(){
    display_number++;
    let frame = document.createElement("iframe");
    frame.setAttribute("src", "");
    frame.setAttribute("id","show"+display_number);
    document.getElementById("display").appendChild(frame);
}

function pop_display(){
    document.getElementById("display").innerHTML="";
    push_display();
}

push_display();

//hover
$(function (){
    $('button').on({
        mouseenter: function (){


            $(this).css("color","#d99f0d");
            $(this).css("background","#000000");
        },
        mouseleave: function (){
            if(selection===this) {}

            else {
                $(this).css("color", "#000000");
                $(this).css("background", "#FFFFFF");
            }
        },

        click: function (){
            //Highlights
            if(selection!=="n"){
                $(selection).css("color", "#000000");
                $(selection).css("background", "#FFFFFF");
            }
            $(this).css("color","#d99f0d");
            $(this).css("background","#000000");
            selection=this;


        }
    }

)})
$(function (){
    $('.button_class').on({
        click: function (){
            let end = "_phb";
            if (selection.innerText==="Artificer"){end="tce";}
            document.getElementById("show"+display_number).src='https://5e.tools/classes.html#'+selection.innerText.toLowerCase()+end;

        }})})

$(function (){
    $('.button_char').on({
        click: function (){
            if (selection.innerText === "Classes (Overview)") {
                document.getElementById("show" + display_number).src = 'https://arcaneeye.com/dm-tools-5e/dnd-5e-classes/#Quick_Look_at_DnD_Classes';
            }
            if (selection.innerText === "Feats") {
                document.getElementById("show" + display_number).src = 'https://5e.tools/feats.html';
            }
            if (selection.innerText === "Races") {
                document.getElementById("show" + display_number).src = 'https://arcaneeye.com/players/dnd-5e-races/#A-Quick-Overview-of-DnD-Races';
            }
        }})})

$(function (){
    $('.button_spells').on({
        click: function (){

                let end = selection.innerText;
                if (selection.innerText === "Spells") {
                    document.getElementById("show" + display_number).src = 'https://5e.tools/spells.html';}
                else {
                    if (end === "Spells 2") {
                        end = "";
                    }
                    let win = window.open('http://dnd5e.wikidot.com/spells:' + end.toLowerCase());
                    if (win) {win.focus();}
                }


        }})})

$(function (){
    $('.button_handbook').on({
        click: function (){
            if(selection!=="n"){
                document.getElementById("show"+display_number).src='https://rpgbot.net/dnd5/characters/classes/' + selection.innerText;
            }
        }})})

$(function (){
    $('.button_misc').on({
        click: function (){

            let end = selection.innerText.toLowerCase();
            if (selection.innerText==="Rules"){end = "quickreference";}
            if (selection.innerText==="Misc. Rules"){end = "variantrules";}
            if (selection.innerText==="Conditions"){end = "conditionsdiseases";}
            console.log('https://5e.tools/' + end+".html");
            document.getElementById("show"+display_number).src='https://5e.tools/' + end+".html";

        }})})

const lyrics_text =[
    "I got a gal who's always late\nAnytime we have a date",
    "I'm gonna walk right up to her gate\nAnd see if I can get it straight",
    "Is you is or is you ain't my baby?\n" +
    "The way you're acting lately makes me doubt\n",
    "Yous is still my baby, baby\n" +
    "Seems my flame in your heart's done gone out\n",
    "A woman is a creature\n" +
    "That has always been strange\n" +
    "Just when you're sure of one\n" +
    "You find she's gone and made a change\n",
    "Is you is or is you ain't my baby?\n" +
    "Maybe baby's found somebody new\n",
    "Or is my baby still my baby true?\n",
    "But I love her\n" +
    "Yes I love her",
    "'Cause I want her\n" +
    "I'm gonna ask her"

]

function lyrics(){
    document.getElementById("lyrics").innerText=
        lyrics_text[Math.floor(Math.random() * lyrics_text.length)];
}

lyrics();


//let hours = Math.trunc((distance*5280)/speed/60/10);
//let minutes = Math.trunc((( distance*5280)/speed/10)%60);

//6s/r, 10r/m

//speed is 30/60ft per SIX (6) seconds
//speed of 60 = 60ft/6s = 10ft/s

//
//function distancef2m(){
//     let distance = document.getElementById("DistanceF").value;
//     document.getElementById("DistanceM").value = distance/5280;
// }
// function distancem2f(){
//     let distance = document.getElementById("DistanceM").value;
//     document.getElementById("DistanceF").value = distance*5280;
// }
//