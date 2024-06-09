const form = document.getElementById('data');
form.addEventListener('submit',(e)=>{
    e.preventDefault;
    const name = document.getElementById('name');
    var naam= name.value;
    const area= document.getElementById('area');
    const areaa=area.value;
    const gender=document.getElementById('gender');
    const gen=gender.value;
    var res;
    if (gen=="M"){
        res="Mr.";
    }
    else if(gen=="F"){
        res="Ms.";
    }
    else{
        res="";
    }

    const outdiv = document.getElementById('output');
    // outdiv.textContent=`Hello  ${naam},  `+'\n'+` Thankyou for showing interest in your own gym, Fatless Fitness.Our branch in ${areaa} locality is one of the best. Our team will reach out to you soon.`;
    outdiv.innerHTML=`<h2>Hello ${res }  ${naam},</h2>`+`<h3>Thankyou for showing interest in your own gym, Fatless Fitness.Our branch in ${areaa} locality is one of the best. Our team will reach out to you soon.</h3>`

});