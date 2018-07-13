//1. Вывести все числа от 10 000 до 150 000, у которых сумма трех предыдущих элементов при делении на 100 дает остаток 52, вторая цифра — 2.
let sum = 0;
let rem;
for (let n =1e4; n <= 15e4; n -= 2) {
    for (let i = 0; i < 3; i ++) {
        sum += n;
        n++;
    }
    rem = sum % 100;
    if (rem === 52){
        let string = String(n);
        if (string[1] === "2") {
            console.log(string);
        }
    }
    sum = 0;
}
