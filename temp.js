const invalue= document.getElementById(`input`);
const tof= document.getElementById(`tof`);
const toc= document.getElementById(`toc`);
const outvalue= document.getElementById(`output`)
let temp;

function convert(){
    if(tof.checked){
        temp= Number(invalue.value);
        temp= temp* 9/ 5+ 32;
        outvalue.textContent= temp.toFixed(1)+ "°F";
    }
    else if(toc.checked){
        temp= Number(invalue.value);
        temp= (temp- 32)* (5/9);
        outvalue.textContent= temp.toFixed(1)+ "°C";
    }
    else{
        outvalue.textContent= "Select a unit";
    }
}