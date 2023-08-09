// Bài 1
function arangeToBigOrder() {
    var number1 = +document.getElementById("number1").value;
    var number2 = +document.getElementById("number2").value;
    var number3 = +document.getElementById("number3").value;
    var result1 = document.getElementById("result1");

    var biggest;
    var medium;
    var smallest;

    if (number1 >= number2) {
        if ( number2 >= number3) {
            biggest = number1;
            medium = number2;
            smallest = number3;
        }
        else {
            if ( number1 >= number3 ) {
                biggest = number1;
                medium = number3;
                smallest = number2;
            }
            else {
                biggest = number3;
                medium = number1;
                smallest = number2;
            }
        }
    } 
    else {
        if ( number1 >= number3) {
            biggest = number2;
            medium = number1;
            smallest = number3;
        }
        else {
            if ( number2 >= number3 ) {
                biggest = number2;
                medium = number3;
                smallest = number1;
            }
            else {
                biggest = number3;
                medium = number2;
                smallest = number1;
            }
        }
    }

    result1.innerHTML = `
    <div>
        <span>
        Xếp theo thứ tự tăng dần như sau: ${smallest}<${medium}<${biggest};
        </span>
    </div> 
    `;
}

// Bài 2
function sayHelloToFamily() {
    var memberInFamily = document.getElementById("memberInFamily").value;
    var result2 = document.getElementById("result2");
    var member;

    if( memberInFamily == "B" ) {
        member = "Bố";
    }
    else if( memberInFamily == "M" ) {
        member = "Mẹ";
    }
    else if( memberInFamily == "A" ) {
        member = "An trai nắng";
    }
    else if( memberInFamily == "E" ) {
        member = "Em gái mưa";
    }
    else {
        member = "Anonymous, Xin vui lòng chỉ nhập B M A hoặc E";
    }
    
    result2.innerHTML = `
    <div>
        <span>
        Xin chào: ${member}
        </span>
    </div> 
    `;
}

// Bài 3
function countEvenOddNumber() {
    var number1 = +document.getElementById("number1_bai3").value;
    var number2 = +document.getElementById("number2_bai3").value;
    var number3 = +document.getElementById("number3_bai3").value;
    var result3 = document.getElementById("result3");

    var evenNumber = 0;
    var oddNumber = 0;

    if( number1 % 2 == 0 ) {
        evenNumber += 1;
    }
    else {
        oddNumber += 1;
    }

    if( number2 % 2 == 0 ) {
        evenNumber += 1;
    }
    else {
        oddNumber += 1;
    }
    
    if( number3 % 2 == 0 ) {
        evenNumber += 1;
    }
    else {
        oddNumber += 1;
    }
    result3.innerHTML = `
    <div>
        <span>
        Số chẵn có ${evenNumber} số, 
        số lẻ có ${oddNumber} số
        </span>
    </div> 
    `;
}




// Bài 3
function judgeTypeOfTriangle() {
    var canhAB = +document.getElementById("canhAB").value;
    var canhBC = +document.getElementById("canhBC").value;
    var canhCA = +document.getElementById("canhCA").value;
    var result4 = document.getElementById("result4");

    var typeOfTriangle;
    var tamgiacdeu = "Tam Giác Đều";
    var tamgiaccan = "Tam Giác Cân";
    var tamgiacvuong = "Tam Giác Vuông"; 
    var tamgiacthuong = "Tam Giác Thường"; 

    if ( canhAB == canhBC ) {
        if ( canhBC == canhCA ) {
            typeOfTriangle = tamgiacdeu;
        }
        else {
            typeOfTriangle = tamgiaccan;
        }
    }

    else if ( canhBC == canhCA ) {
        if ( canhCA == canhAB ) {
            typeOfTriangle = tamgiacdeu;
        }
        else {
            typeOfTriangle = tamgiaccan;
        }
    }

    else if ( canhCA == canhAB ) {
        if ( canhAB == canhCA ) {
            typeOfTriangle = tamgiacdeu;
        }
        else {
            typeOfTriangle = tamgiaccan;
        }
    }
    else {
        if ( ( canhAB ** 2 + canhBC ** 2 == canhCA ** 2 ) || ( canhBC ** 2 + canhCA ** 2 == canhAB ** 2 ) || ( canhCA ** 2 + canhAB ** 2 == canhBC ** 2 ) ) {
            typeOfTriangle = tamgiacvuong;
        }
        else {
            typeOfTriangle = tamgiacthuong;
        }
    }
    
    result4.innerHTML = `
    <div>
        <span>
        Tam giác có ba cạnh lần lượt là ${canhAB}, ${canhBC}, ${canhCA} là tam giác ${typeOfTriangle}
        </span>
    </div> 
    `;
}