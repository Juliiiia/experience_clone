let words = ["Wonderful", "Joyful", "Happiness", "Time", "Task", "Apple"];

let regex = /^[^Aa]{6,}$/;

for (let word of words) {
    if (regex.test(word)) {
        console.log(word);
    }
}
