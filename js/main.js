
// Invänta DOM
document.addEventListener("DOMContentLoaded", () => {

    // Lägg till händelsehanterare för knapp
    document.querySelector("#newtodobutton").addEventListener("click", addChore);

});


function addChore() {

// Läs in värde från formulär
const choreName = document.querySelector("#newtodo").value;

//Variabel för felmeddelande
const errorMessage = document.querySelector("#message");

    // Undvik sysslor kortare än 5 tecken och skickar fel-meddelande
    if(choreName.length < 5) {
        errorMessage.textContent = "Din uppgift behöver innehålla minst 5 tecken."
        return;
    } else {
        errorMessage.textContent = "";
    }

// Hitta DOM elementet #todolist
const toDoListEl = document.querySelector("#todolist");

// Skapa ny syssla
const ChoreEl = document.createElement("article");

// Namnge syssla
const ChoreName = document.createTextNode(choreName);

// Slå ihop syssla och sysslans namn
ChoreEl.appendChild(ChoreName);

// Slå ihop Elementet #todolist och syssla
toDoListEl.appendChild(ChoreEl);

// Rensar värde från formulär
document.querySelector("#newtodo").value = "";

// Ta bort uppgift
ChoreEl.addEventListener("click", (event) => {
    event.target.remove();
})
}




function deleteItem() {

}
