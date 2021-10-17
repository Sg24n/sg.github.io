
function getValue() {
    console.clear();
    // .value в конце превращает тип данных htmlelement в универсальный any 
    // благодаря чему его можно превратить в число
    var inDollars = document.getElementById("quantityDollars").value;
    var inCoins = document.getElementById("quantityCoins").value;
    //Получение точки продажи
    var tP1 = document.getElementById("tp1").value;
    var tP2 = document.getElementById("tp2").value;
    var tP3 = document.getElementById("tp3").value;



    if (tP1 && tP2 && tP3 > 0) {
        clog = "1"
        //1/6 часть от суммы монет
        var part = inCoins / 6;
        var outP1 = part;
        var outP2 = part * 2;
        var outP3 = part * 3;

    }
    else if (tP1 && tP2 > 0) {
        clog = "2"
        var part = inCoins / 3;
        var outP1 = part;
        var outP2 = part * 2;
        var outP3 = 0;

    }
    else if (tP2 && tP3 > 0) {
        clog = "3"
        var part = inCoins / 3;
        var outP1 = 0;
        var outP2 = part;
        var outP3 = part * 2;
    }
    else { clog = "!ошибка!" }

    //Цена одной мнеты
    var cost = (inDollars / inCoins);
    //Эквивалент монет в долларах

    var outPD1 = outP1 * tP1;
    var outPD2 = outP2 * tP2;
    var outPD3 = outP3 * tP3;
    //эквивалент в процентах
    var procent1 = (outPD1 * 100) / inDollars;
    var procent2 = (outPD2 * 100) / inDollars;
    var procent3 = (outPD3 * 100) / inDollars;
    var clog;

    //Общий профит в долларах и процентах
    var sumD = outPD1 + outPD2 + outPD3;
    var sumProc = procent1 + procent2 + procent3;

    //Вывод в консоль
    console.log("Алгоритм части: " + clog)
    console.log(
        "Стоимость монеты = " + cost +
        "\nЧасть от монет   = " + part);
    console.log(
        "\nКол-во монет на продажу " +
        "\nТочка 1 = " + outP1 +
        "\nТочка 2 = " + outP2 +
        "\nТочка 3 = " + outP3);
    console.log(
        "\n\tПрофит " +
        "\nТочка $ 1 = " + outPD1 +
        "\nТочка $ 2 = " + outPD2 +
        "\nТочка $ 3 = " + outPD3
    );

    console.log(
        "Процент 1 = " + procent1 + "% " +
        "\nПроцент 2 = " + procent2 + "% " +
        "\nПроцент 3 = " + procent3 + "% ");

    console.log(
        "\nСумма выхода = " + sumD +
        "\nОбщий % =      " + sumProc);




}