$(() => {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        65: 'a',
        66: 'b'
    };
    var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];
    var konamiCodePosition = 0;
    document.addEventListener('keydown', function(e) {
        var key = allowedKeys[e.keyCode];
        var requiredKey = konamiCode[konamiCodePosition];
        if (key == requiredKey) {
            konamiCodePosition++;
            if (konamiCodePosition == konamiCode.length) {
                activateCheats();
                konamiCodePosition = 0;
            }
        } else {
            konamiCodePosition = 0;
        }
    });
});

let activated = false;

function activateCheats() {
    if (!activated) {
        let container = document.querySelector("#about-content");
        let space = document.querySelector("#begone");
        let html =
        `<hr class="my-4">
        <input type="button" id="add" class="wfbutton circle" value="+" onclick="addUser()">
        <br id="begone">`;
        space.parentNode.removeChild(space);
        container.innerHTML += html;
    }
    activated = true;
}
