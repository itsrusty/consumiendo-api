const takeContainer = document.querySelector(".container");
const takeContainerUser = document.querySelector(".container-users");

// API Chuck Nurris
const api = "https://api.chucknorris.io/jokes/random";

// API JSONPlaceholder
const apiJSON = "https://jsonplaceholder.typicode.com/posts";


// chuck norris
fetch(api)
.then(res => res.json())
.then(data => {
        const textChuck = document.createElement("p");
        textChuck.innerHTML = `<b>API:</b> <br> ${data.value}`;
        takeContainer.appendChild(textChuck);
});


// JSONPlaceholder

fetch(apiJSON)
.then(res => res.json())
.then(data =>{
    data.forEach(usersName => {
        const users = document.createElement("p");
        
        users.innerHTML = usersName.title;
        takeContainerUser.appendChild(users)
        console.log(usersName);
    });
})