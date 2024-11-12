 
 function loadSavedName() {
    const savedName = localStorage.getItem("username");
    if (savedName) {
        document.getElementById("savedName").innerText = `Nome salvato: ${savedName}`;
    } else {
        document.getElementById("savedName").innerText = "Nessun nome salvato.";
    }
}


function saveName() {
    const name = document.getElementById("nameInput").value;
    if (name) {
        localStorage.setItem("username", name);
        loadSavedName();
        document.getElementById("nameInput").value = ""; 
    }
}


function removeName() {
    localStorage.removeItem("username");
    loadSavedName();
}


loadSavedName()




 
 let counter = sessionStorage.getItem("counter") ? parseInt(sessionStorage.getItem("counter")) : 0;

 
 function updateCounter() {
     counter++;
     document.getElementById("counter").innerText = counter;
     sessionStorage.setItem("counter", counter);
 }

 setInterval(updateCounter, 1000);