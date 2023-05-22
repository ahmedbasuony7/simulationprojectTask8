let tex = document.querySelectorAll(".bar li");
let content = document.querySelectorAll(".content > div");

tex.forEach((ele) => {
    ele.addEventListener("click",function(e){
        //console.log(e);
        tex.forEach((ele)=>{
            ele.classList.remove("activee");
        });
        e.currentTarget.classList.add("activee");
        content.forEach((div) => {
            div.style.display='none';
        });
        
        //console.log(e.currentTarget.dataset.cont);
        document.querySelector(e.currentTarget.dataset.cont).style.display='block';
        //document.querySelector(e.currentTarget.dataset.cont).style.display='block';
    });
});

let calcvolume = document.querySelector(".calcvarea");
calcvolume.onclick = function getcubevalue(){
    let cubelength = document.querySelector(".cubelength");
    let  cubelengthvalue = cubelength.value;
    console.log(cubelengthvalue);
    let volumeRes = document.querySelector(".volumeRes");
    let result = cubelengthvalue * cubelengthvalue * 6 ;
    console.log(result);
    volumeRes.innerHTML= `= ${result}`;  
}

let calcvolumeinput = document.querySelector(".calcvolumeinput");
calcvolumeinput.onclick = function(){
    let volumeinput = document.querySelector(".volumeinput");
    let volumeinputvalue = volumeinput.value;
    console.log(volumeinputvalue);
    let calckvolumeresult = document.querySelector(".calckvolumeresult");
    let volres = volumeinputvalue*volumeinputvalue*volumeinputvalue;
    calckvolumeresult.innerHTML=`${volres}`;
}

let squaresubmit= document.querySelector(".squaresubmit");
squaresubmit.onclick = function(){
    let squareinput = document.querySelector(".squareinput");
    let squareinputvalue = squareinput.value;
    console.log(squareinputvalue);
    let resutone = squareinputvalue*squareinputvalue;
    let squareresult = document.querySelector(".squareresult");
    squareresult.innerHTML =`=${resutone} ` ;
}

let circlesbmit = document.querySelector(".circlesbmit");
circlesbmit.onclick= function(){
    let circleinput = document.querySelector(".circleinput");
    let circleinputvalue = circleinput.value;
    let resulttwo = circleinputvalue * circleinputvalue * 3.14;
    let circleoutput = document.querySelector(".circleoutput");
    circleoutput.innerHTML=` = ${resulttwo}`;
}

let Cylindersubmit = document.querySelector(".Cylindersubmit");
Cylindersubmit.onclick = function(){
    let Cylindervolumeraduis = document.querySelector(".Cylindervolumeraduis");
    let Cylindervolumeraduisvalue =  Cylindervolumeraduis.value;

    let Cylindervolumehight = document.querySelector(".Cylindervolumehight");
    let Cylindervolumehightvalue = Cylindervolumehight.value;

    let volumelaw = Cylindervolumeraduisvalue * Cylindervolumeraduisvalue * Cylindervolumehightvalue * 3.14;

    let Cylindervolumeresult = document.querySelector(".Cylindervolumeresult");
    Cylindervolumeresult.innerHTML = volumelaw;
}


let cylinderaresubmit = document.querySelector(".cylinderaresubmit");
cylinderaresubmit.onclick= function(){
    let cylinderinputridusforarea =  document.querySelector(".cylinderinputridusforarea");
    let cylinderinputridusforareavalue = cylinderinputridusforarea.value;

    let cylinderinputhightforarea = document.querySelector(".cylinderinputhightforarea");
    let cylinderinputhightforareavalue = cylinderinputhightforarea.value;

    let areaoutputofcylinderphase = document.querySelector(".areaoutputofcylinderphase");

    cylinderresultarea = 2 * 3.14 * cylinderinputridusforareavalue * (cylinderinputridusforareavalue + cylinderinputhightforareavalue);
    console.log(cylinderresultarea);
    areaoutputofcylinderphase.innerHTML = cylinderresultarea;

}


