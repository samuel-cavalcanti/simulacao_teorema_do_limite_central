
const CANVAS_SIZE = {
    width: 1200,
    height: 750
}

function setup() {

    createCanvas(CANVAS_SIZE.width, CANVAS_SIZE.height);
    background(220);
    frameRate(120);

}



function generateFrequencyRandomNumbers(totalNumbers, range, randomFunction, maxNumber) {
    frequencyRandomNumbers = []
    for (let i = 0; i < maxNumber; i++)
        frequencyRandomNumbers[i] = 0;


    for (let i = 0; i < totalNumbers; i++) {

        const randomValue = randomFunction(range);

        if (frequencyRandomNumbers[randomValue] == undefined)
            frequencyRandomNumbers[randomValue] = 1;
        else
            frequencyRandomNumbers[randomValue]++;
    }

    return frequencyRandomNumbers;
}


async function draw() {
    // clear();
    background(220);
    // Draw a rectangle at location (30, 20) with a width and height of 55.


    const linePosY = 200
    const dy = 150;
    const totalNumbers = 1000
    const range = [0, 10]


    const randomOneVariable = (range) => Math.trunc(random(range[0], range[1]));

    const randomTwoVariables = (range) => randomOneVariable(range) + randomOneVariable(range);

    const randomThreeVariables = (range) => randomTwoVariables(range) + randomOneVariable(range);

    const randomFourVariables = (range) => randomTwoVariables(range) + randomTwoVariables(range);


    const oneVariable = generateFrequencyRandomNumbers(totalNumbers, range, randomOneVariable, range[1])
    const twoVariables = generateFrequencyRandomNumbers(totalNumbers, range, randomTwoVariables, range[1] * 2);
    const threeVariables = generateFrequencyRandomNumbers(totalNumbers, range, randomThreeVariables, range[1] * 3);
    const fourVariables = generateFrequencyRandomNumbers(totalNumbers, range, randomFourVariables, range[1] * 4)


    textSize(28);
    const title = 'Exemplo prático do teorema de valor central';

    text(title, CANVAS_SIZE.width / 2 - textWidth(title) / 2, 50);


    text('Uma Variável aleatória', 400, linePosY - 50);
    oneVariable.map((value, index) => rect(50 + index * 10, linePosY, 10, - value));


    text('Soma de duas variáveis aleatórias', 400, linePosY + dy - 50);
    twoVariables.map((value, index) => rect(50 + index * 10, linePosY + dy, 10, - value));

    text('Soma de três variáveis aleatórias', 400, linePosY + 2 * dy - 50);
    threeVariables.map((value, index) => rect(50 + index * 10, linePosY + 2 * dy, 10, - value));

    text('Soma de quatro variáveis aleatórias', 400, linePosY + 3 * dy - 50);
    fourVariables.map((value, index) => rect(50 + index * 10, linePosY + 3 * dy, 10, - value));







}



