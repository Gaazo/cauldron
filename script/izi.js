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

function pop_display(){
    display_number++;
    let frame = document.createElement("iframe");
    frame.setAttribute("src", "");
    frame.setAttribute("id","show"+display_number);
    document.getElementById("display").appendChild(frame);
}

pop_display();

$(function (){
    $('button').on({
        mouseenter: function (){
            $(this).css("color","#d99f0d");
            $(this).css("background","#000000");
        },
        mouseleave: function (){
            if(selection===this) {

            }

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

            if(this.innerText==="Bunshin"){
                console.log("Here");

            }

            else{
                selection=this;
                console.log("Ting is "+selection.innerText);

            }
        }
    }

)})

$(function (){
    $('.button_class').on({
        click: function (){

            //document.getElementById("show").src='http://dnd5e.wikidot.com/spells:'+selection.innerText.toLowerCase();
            let end = "_phb";
            if (selection.innerText==="Artificer"){end="tce";}
            document.getElementById("show"+display_number).src='https://5e.tools/classes.html#'+selection.innerText.toLowerCase()+end;
        }
    })
})

$(function (){
    $('.button_spells').on({
        click: function (){

            let end = selection.innerText;
            if(selection.innerText==="Spells"){document.getElementById("show"+display_number).src='https://5e.tools/spells.html';}

            else {
                if(end==="Spells 2"){end="";}
                let win = window.open('http://dnd5e.wikidot.com/spells:'+end.toLowerCase());
                if(win){win.focus();}
            }


        }
    })
})
$(function (){
    $('.button_handbook').on({
        click: function (){

            //$('#Desc_Desc').text("Zozobozolozo "+selection.innerText);
            //let win = window.open('https://rpgbot.net/dnd5/characters/classes/'+selection.innerText);
            //if(win){win.focus();}
            document.getElementById("show"+display_number).src='https://rpgbot.net/dnd5/characters/classes/' + selection.innerText;

        }
    })
})

$(function (){
    $('.button_misc').on({
        click: function (){
            let end = selection.innerText.toLowerCase();
            if (selection.innerText==="Rules"){end = "quickreference";console.log("here");}
            if (selection.innerText==="Misc. Rules"){end = "variantrules";}
            if (selection.innerText==="Conditions"){end = "conditionsdiseases";}
            console.log('https://5e.tools/' + end+".html");
            document.getElementById("show"+display_number).src='https://5e.tools/' + end+".html";


        }
    })
})
$(function (){
    $('.button_char').on({
        click: function (){
            if (selection.innerText==="Classes (Overview)"){document.getElementById("show"+display_number).src='https://arcaneeye.com/dm-tools-5e/dnd-5e-classes/#Quick_Look_at_DnD_Classes';}
            if (selection.innerText==="Feats"){document.getElementById("show"+display_number).src='https://5e.tools/feats.html';}
            if (selection.innerText==="Races"){document.getElementById("show"+display_number).src='https://arcaneeye.com/players/dnd-5e-races/#A-Quick-Overview-of-DnD-Races';}


        }
    })
})
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