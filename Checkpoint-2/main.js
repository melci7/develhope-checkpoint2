let add_btn = document.querySelector("#add");
let display_btn = document.querySelector("#display");
let nameInput = document.querySelector("#name");
let ageInput = document.querySelector("#age");
let locationInput = document.querySelector("#location");
let locationInput2 = document.querySelector("#location2");
add_btn.addEventListener("click", () => {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let user = {
        userName: nameInput.value,
        age: ageInput.value,
        location: locationInput.value
    };
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
})

display_btn.addEventListener("click", () => {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let find = users.find((u) => u.location.includes(locationInput2.value));
    if (find) {
        console.log(find)
        alert("Location found!")
    } else {
        alert("Location not found!")
    }
})
