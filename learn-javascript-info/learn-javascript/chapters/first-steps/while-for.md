### Циклы while и for(Loops: while and for)

**syntax**

- while
- do..while
- for(..;..;..)
- for (let ... in ...)
- for (let ... of ...)

**Прерывание цикла: «break» (Breaking the loop)**

- syntax `break`

>

    while (true) {
    let value = +prompt("Введите число", '');
    if (!value) break; // (*)
    sum += value;
    }

**Переход к следующей итерации: continue (Continue to the next iteration)**

- syntax `continue`

>

        for (let i = 0; i < 10; i++) {
        // if true, skip the remaining part of the body
        if (i % 2 == 0) continue;
        alert(i); // 1, then 3, 5, 7, 9
        } 

**Метки для break/continue (Labels for break/continue)**

- syntax `labelName: for(...){}`

>

        labelName: for (let i = 0; i < 3; i++) { ... }

