const randRange = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
let url = "";
const season = ["haru","aki","toku"];
function change(term="random"){
    changeURL();
    console.log(term);
    let target_year, target_problem, target_season;
    while(true){
        target_year = String(randRange(21,31));
        if (term === "random"){
            target_problem = randRange(1,9);
        }else if(term === "seq"){
            target_problem = 1;
        }else if (term === "alu"){
            target_problem = 8;
        }else if(term === "c"){
            target_problem = 9;
        }else{
            target_problem = randRange(2,7);
        }
        target_season = season[Math.floor(Math.random() * (season.length - 1))];
        if (target_problem < 10){
            target_problem = "0" + String(target_problem);
        }else{
            target_problem = String(target_problem);
        }
        if (target_year === "23" && target_season === "haru"){
            target_season = season[2];
        }
        if (target_year === "31" && target_season ==="aki"){
            continue;
        }else{
            break;
        }
        
    }

    url = url.replace(/[0-9]{2}_.+\//,target_year + "_" + target_season + "/");
    url = url.replace(/(pm[0-9]+)/,"pm" + target_problem);
    console.log(url);
    document.getElementById('target_frame').src = url;
    document.getElementById('link').href = url;
}
function button(){
    let num = document._form._select.selectedIndex;
    change(document._form._select.options[num].value);
}

function changeURL(){
    if (window.innerWidth < 800){
        url = "https://www.fe-siken.com/s/kakomon/22_haru/pm04.html";
    }else {
        url = "https://www.fe-siken.com/kakomon/22_haru/pm04.html";
    }
}
window.onload = function() {
    change();
};