function checkProbabilityTheory(count) {
    let evenCount = 0;
    let oddCount = 0;

    for (let i = 0; i < count; i++) {
        let num = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
        
        if (num % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    let evenPercent = (evenCount / count) * 100;
    let oddPercent = (oddCount / count) * 100;

    console.log("Кількість згенерованих чисел:", count);
    console.log("Парних чисел:", evenCount);
    console.log("Непарних чисел:", oddCount);
    console.log("Відсоток парних:", evenPercent + "%");
    console.log("Відсоток непарних:", oddPercent + "%");
}

checkProbabilityTheory(10);
