d = document; 
const slider = document.querySelector("input"); 
const value = document.querySelector(".value"); 
const btncorrer = document.querySelector(".correr");
const btndormir = document.querySelector(".dormir");
const btntrabajar = document.querySelector(".trabajar");
const btngym = document.querySelector(".gym");
const btncomer = document.querySelector(".comer");
const btnleer = document.querySelector(".leer");
const imprimir = document.querySelector(".resultados__imp");
const imgCorazon = document.querySelector(".corazon img"); 
const imgCateter = document.querySelector(".cateter"); 
const latidosImp = document.querySelector(".latidos"); 
const cora = document.querySelector(".corazon"); 

value.textContent = slider.value; 

slider.oninput = function () {
    value.textContent = this.value
}

latidosC = () => {
    let num = Math.random() * (120 - 10); 
    return num + 20;
}


updateLatidos = (actividad) => {
    setInterval(() => {
        let latidos = latidosC();
        latidos = parseInt(latidos);
        d.querySelector(".latidos__p").innerText = latidos; 
        if(latidos < 60){
            impLatidos(latidos, actividad); 
            imgCorazon.setAttribute('src', './img/corazon2.png')
            imgCateter.style.transform = "scale(.9)";
            latidos = 80; 
            d.querySelector(".latidos__p").innerText = latidos;
            latidosImp.style.background = "green";
            
        }else{
            imgCorazon.setAttribute('src', './img/corazon.png')
            imgCateter.style.transform = "scale(1)"; 
            latidosImp.style.background = "#C62E65";
        }
    }, 2000);
}

impLatidos = (latidos, actividad) => {
    imprimir.innerHTML += 
    `
            <tr>
                <td>${slider.value}</td>
                <td>${latidos}</td>
                <td>${actividad}</td>
            </tr>
    `
}

latidosAnimation = (num) => {
    cora.style.animationDuration = `${num}s`;  
}

btncorrer.addEventListener('click', () => {
    updateLatidos("correr"); 
    latidosAnimation(.5);
})
btncomer.addEventListener('click', () => {
    updateLatidos("comer"); 
    latidosAnimation(.8);
})
btndormir.addEventListener('click', () => {
    updateLatidos("dormir"); 
    latidosAnimation(1);
})
btngym.addEventListener('click', () => {
    updateLatidos("gym"); 
    latidosAnimation(.4);
})
btnleer.addEventListener('click', () => {
    updateLatidos("leer"); 
    latidosAnimation(.9);
})
btntrabajar.addEventListener('click', () => {
    updateLatidos("trabajar"); 
    latidosAnimation(1);
})

