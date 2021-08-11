function calculate()
{
    var getSqLnth=Number(document.getElementById("lengthOfSide").value);

    document.getElementById("result").innerHTML=SquareArea(getSqLnth);

    document.getElementById("result1").innerHTML=SquarePeri(getSqLnth);
}

function SquareArea(num1)

{
    var CalSq=num1*num1;
    return CalSq;
    
}

function SquarePeri(num1)
{
    var CalPeri=4*num1;
    return CalPeri;
      
}


