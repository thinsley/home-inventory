// localStorage.setItem("name", "Tristan");
// let name = localStorage.getItem("name");
// console.log(name);
// console.log("test")

function printInventory() {
    const hardwareGrid = document.querySelector(".hardwareGrid");
    const hardwareList = document.querySelector(".hardwareList");
    storageLength = localStorage.length;

    for (let i = 0; i < storageLength; i++) {
        currentHardware = JSON.parse(localStorage.getItem(localStorage.key(i)));

        //Key
        const hardwareKey = document.createElement("p");
        hardwareKey.classList.add("hardwareItem");
        hardwareKey.textContent = i + 1;
        hardwareGrid.appendChild(hardwareKey);

        //Name
        const hardwareName = document.createElement("p");
        hardwareName.classList.add("hardwareItem");
        hardwareName.textContent = currentHardware.name;
        hardwareGrid.appendChild(hardwareName);

        //Model
        const hardwareModel = document.createElement("p");
        hardwareModel.classList.add("hardwareItem");
        hardwareModel.textContent = currentHardware.model;
        hardwareGrid.appendChild(hardwareModel);

        //Type
        const hardwareType = document.createElement("p");
        hardwareType.classList.add("hardwareItem");
        hardwareType.textContent = currentHardware.type;
        hardwareGrid.appendChild(hardwareType);

        //Serial Number
        const hardwareSerialNumber = document.createElement("p");
        hardwareSerialNumber.classList.add("hardwareItem");
        hardwareSerialNumber.textContent = currentHardware.serialNumber;
        hardwareGrid.appendChild(hardwareSerialNumber);

        //Location
        const hardwareLocation = document.createElement("p");
        hardwareLocation.classList.add("hardwareItem");
        hardwareLocation.textContent = currentHardware.location;
        hardwareGrid.appendChild(hardwareLocation);

        //In Use
        const hardwareInUse = document.createElement("p");
        hardwareInUse.classList.add("hardwareItem");
        hardwareInUse.textContent = currentHardware.inUse;
        hardwareGrid.appendChild(hardwareInUse);

        //Date Acquired
        const hardwareDateAcquired = document.createElement("p");
        hardwareDateAcquired.classList.add("hardwareItem");
        hardwareDateAcquired.textContent = currentHardware.dateAcquired;
        hardwareGrid.appendChild(hardwareDateAcquired);

        //Cost
        const hardwareCost = document.createElement("p");
        hardwareCost.classList.add("hardwareItem");
        hardwareCost.textContent = "$" + currentHardware.cost;
        hardwareGrid.appendChild(hardwareCost);

        //Notes
        const hardwareNotes = document.createElement("p");
        hardwareNotes.classList.add("hardwareItem");
        hardwareNotes.textContent = currentHardware.notes;
        hardwareGrid.appendChild(hardwareNotes);

    }
}

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

function addNewHardwareComponent() {
    const newItemForm = document.querySelector(".newItemForm");
    newItemForm.removeAttribute("class", "hidden");

    const submitButton = document.querySelector(".submitButton");
    submitButton.addEventListener("click", function submitFunction() {
        let nameValue = document.getElementById("name").value;
        console.log(nameValue);
    });

    // const newNameLabel = document.createElement("label");
    // newNameLabel.setAttribute("for", "name");
    // newNameLabel.setAttribute("class", "formLabel");
    // newNameLabel.textContent = "Name";
    // const newName = document.createElement("input");
    // newName.setAttribute("class", "input");
    // newName.setAttribute("type", "text");

}
localStorage.clear;


//Dummy test data
localStorage.setItem("toppingL50", JSON.stringify(new hardwareComponent("Topping L50 Amp", "Topping L50 Amp", "Audio", "2105628063", "Desk", true, null, 230, null)));
localStorage.setItem("toppingL30", JSON.stringify(new hardwareComponent("Topping E30 DAC", "Topping E30 DAC", "Audio", "2009731739", "Desk", true, null, 100, null)));
localStorage.setItem("smslAD18", JSON.stringify(new hardwareComponent("SMSL AD18 Amp", "SMSL AD18", "Audio", "AMP747107", "Closet", false, null, 100, "broken")));

printInventory();

const newComponentButton = document.querySelector(".addNewItem");
newComponentButton.addEventListener("click", addNewHardwareComponent);
// console.log(toppingL50);
// console.log(localStorage.getItem("toppingL50"));

