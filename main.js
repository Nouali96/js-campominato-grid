
let containerEl = document.getElementById('container');
//Funzione che si avvia quando si clicca "Start"
function Start(){
    let difficult = document.getElementById('difficult').value;
    //Facciamo in modo che quando inizia si resetta 
    containerEl.innerHTML = ""
    //in base alla selezione della difficolta andiamo a inserire gli elementi
    switch(difficult){
        
        case "Easy":
            //inseriamo un ciclo che crea 100 celle
            for(let i =1; i <= 100; i++) {
                
                containerEl.innerHTML += `<div id='event${i}' class='box border-1 border border-dark' onclick="clickEvent(${i})">` + i + '</div>';  
            }
            //Funzione che va a modificare il contenitore 
            easy();
        break;
        case "Hard":
            //inseriamo un ciclo che crea 81 celle
            for(let i =1; i <= 81; i++) {
                
                containerEl.innerHTML += `<div id='event${i}' class='box border-1 border border-dark' onclick="clickEvent(${i})">` + i + '</div>';      
            }
            //Funzione che va a modificare il contenitore 
            hard();
        break;
        case "Crazy":
            //inseriamo un ciclo che crea 49 celle
            for(let i =1; i <= 49; i++) {
                
                containerEl.innerHTML += `<div id='event${i}' class='box border-1 border border-dark' onclick="clickEvent(${i})">` + i + '</div>'; 
            }
            //Funzione che va a modificare il contenitore 
            crazy();
        break;
    }
}

//Funzione che cambia il colore della cella con un click
function clickEvent(id) {
    let box = document.getElementById(`event${id}`);
    box.style.background = "#6495ED";
    box.style.color = "white";
    console.log("funge")
}

//Funzioni per modificare il contenitore
function easy() {
    containerEl.style.width = "100%";
    containerEl.style.maxWidth = "500px";
}

function hard() {
    containerEl.style.width = "100%";
    containerEl.style.maxWidth = "450px";
}

function crazy() {
    containerEl.style.width = "100%";
    containerEl.style.maxWidth = "350px";
}
  