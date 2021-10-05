function resultati(val)
{
    document.getElementById("result").value+=val;
}

// функция показывает цифру и возвращает результат
function rovno()
{
    let x = document.getElementById("result").value
    //eval() используется для вычисления значения арифметического выражения
    let y = eval(x)
    document.getElementById("result").value = y
}

//функция, которая очищает все
function clear()
{
    document.getElementById("result").value = "";
}