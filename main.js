
let containerEl = document.getElementById('container');
//Funzione che si avvia quando si clicca "Start"
let difficult; //variabile difficoltà
let Field = []  //variabile per salvare il campo minato
let perso = false   //variabile che serve per quando si perde
let terminato = false //variabile che serve per quando si perde
function Start(){
    Field = [] //reset
    perso = false //reset
    terminato = false //reset
    difficult = document.getElementById('difficult').value;
    //Facciamo in modo che quando inizia si resetta 
    containerEl.innerHTML = ""
    CreateField()
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
    RandomBomb()
}

//Funzione che cambia il colore della cella con un click
function clickEvent(id) {
    let box = document.getElementById(`event${id}`);
    
    if(terminato == false){
        if (Field[id-1] == "Bomba"){
            box.style.background = "red";
            box.style.color = "red";
            if(perso == false){
                alert("Ahahahah HAI PERSO !!!!") 
                perso = true;
                Loser()
                terminato = true
            }
        }

        else{
            box.style.background = "#6495ED";
            box.style.color = "white";
        
            Field[id-1] = "Premuto"
        }
    }    
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

//funzione per la bomba
function RandomBomb(){

    for(let n =1; n <= 16; n++) {
        let randomnr;
        
        switch(difficult){

            case "Easy":
                randomnr = RandomNr(1, 100);    
            break;
            
            case "Hard":
                randomnr = RandomNr(1, 81);     
            break;
            
            case "Crazy":
                randomnr = RandomNr(1, 49);     
            break;    
        }
        
        if (Field[randomnr-1] == "Bomba"){
            n--
        }
        
        else{
            Field[randomnr-1] = "Bomba"
        }
    }
    
} 

//Funzione che crea un array
function CreateField(){
    
    switch(difficult){

        case "Easy":
            for(let i =1; i <= 100; i++) {
               Field.push('Non premuto');
            } 
        break;
            
        case "Hard":
            for(let i =1; i <= 81; i++) {
                Field.push('Non premuto');
             } 
        break;
        
        case "Crazy":
            for(let i =1; i <= 49; i++) {
                Field.push('Non premuto');
             }     
        break;    
    }
}

//Funzione per un numero random
function RandomNr(start, end){
    end -= start;
    return Math.floor(Math.random() * end) + start;
}

//Funzione per quando si perde
function Loser(){
    for(let i =0; i < Field.length; i++) {
        if (Field[i] == "Bomba"){
            clickEvent(i+1)
        }
    }
}
