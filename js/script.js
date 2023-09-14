function calcluas(){
    var sLuas = document.getElementById('inputfieldluas').value;
    var luas = sLuas*sLuas;
    document.getElementById('hasilluas').innerHTML = luas;
}

function resetluas(){
    document.getElementById('inputfieldluas').value = '';
    document.getElementById('hasilluas').innerHTML = '';
}



function calckeliling(){
    var sKeliling = document.getElementById('inputfieldkeliling').value;
    var keliling = 4*sKeliling;
    document.getElementById('hasilkeliling').innerHTML = keliling;
}

function resetkeliling(){
    document.getElementById('inputfieldkeliling').value = '';
    document.getElementById('hasilkeliling').innerHTML = '';
}









