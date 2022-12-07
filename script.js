// localStorage.setItem("name", "Tristan");
// let name = localStorage.getItem("name");
// console.log(name);
// console.log("test")

function hardwareComponent(name, model, type, serialNumber, location, inUse, dateAcquired, cost, notes) {
    this.name = name;
    this.model = model;
    this.type = type;
    this.serialNumber = serialNumber;
    this.location = location;
    this.inUse = inUse;
    this.dateAcquired = dateAcquired;
    this.cost = cost;
    this.notes = notes; 
}

//Dummy test data
localStorage.setItem("toppingL50", JSON.stringify(new hardwareComponent("Topping L50 Amp", "Topping L50 Amp", "Audio", "2105628063", "Desk", true, null, "$230", null)));
localStorage.setItem("toppingL30", JSON.stringify(new hardwareComponent("Topping E30 DAC", "Topping E30 DAC", "Audio", "2009731739", "Desk", true, null, "$100", null)));
localStorage.setItem("smslAD18", JSON.stringify(new hardwareComponent("SMSL AD18 Amp", "SMSL AD18", "Audio", "AMP747107", "Closet", false, null, "$100", "broken")));

// console.log(toppingL50);
// console.log(localStorage.getItem("toppingL50"));

const hardwareGrid = document.querySelector(".hardwareGrid");
 