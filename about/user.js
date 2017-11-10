"use strict";

function addUser() {
    let request = new XMLHttpRequest();
    request.open('GET', 'https://randomuser.me/api/', true);

    request.onload = () => {
        if (request.status >= 200 && request.status < 400) {
            let data = JSON.parse(request.response);
            renderUser(data.results[0]);
        } else {
            console.error("Server error");
        }
    };

    request.onerror = () => {
        console.error("Connection error");
    };

    request.send();
}

function renderUser(user) {
    if (user !== null) {
        let container = document.querySelector("#about-content");
        let button = document.querySelector("#add");
        let space = document.querySelector("#begone");
        let userHtml =
        `<div class="person">
            <img class="circle user-img" src="${user.picture.large}" alt="${user.name.first}">
            <h2>${user.name.first} ${user.name.last}</h2>
            <span class="links">
                <a href="#">
                    <i class="fa fa-twitch" aria-hidden="true"></i>
                </a>
                <a href="#">
                    <i class="fa fa-youtube-play" aria-hidden="true"></i>
                </a>
                <a href="#">
                    <i class="fa fa-twitter" aria-hidden="true"></i>
                </a>
            </span>
            <p>
                Hello, I'm ${user.name.title} ${user.name.first} ${user.name.last}!
                I'm a ${(user.gender == "male") ? "guy" : "girl"} from ${user.location.state}
                and I'm randomly generated!
            </p>
        </div><!-- end person -->
        <hr class="my-4">
        <input type="button" id="add" class="wfbutton circle" value="+" onclick="addUser()">
        <br id="begone">`;
        button.parentNode.removeChild(button);
        space.parentNode.removeChild(space);
        container.innerHTML += userHtml;
    }
}
