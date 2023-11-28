let button = document.querySelectorAll(".nasheed");

let entryCount = [0, 0, 0, 0, 0, 0, 0]
let audioName = [
    "maula-ya-salli",
    "kun-anta",
    "the-way-of-the-tears",
    "rahmatun-lill-alamin",
    "Muhammad_nabina",
    "hasbi-rabbi",
    "ya-nabi-salama-laika",
    "allahu-allahu",
    "as-subhu-bada"
]
let current = null;
for (let i = 0; i < button.length; i++) {
    let audio = new Audio(`./Audio/${audioName[i]}.weba`);

    button[i].addEventListener('click', function() {
        if (current != null) {
            current.pause();
            current.currentTime = 0;
        }
        if (current != audio)
            current = audio;

        console.log(entryCount[i])
        if (entryCount[i] == 0) {
            audio.play();
            entryCount[i] = 1;
            // button[i].style.backgroundColor = 'red';
        } else {
            audio.pause();
            // audio.currentTime = 0;
            entryCount[i] = 0;
        }
    })
}