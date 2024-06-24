function convert(){
    let num1 = prompt("Enter Temperature in Celsius:");


    /*let temperature = "celsius";
    let operation = prompt("Select the operation: 1. Addition, 2. Subtraction, 3. Multiplication, 4.Division");

    if(operation==1){
        //addition operation
        let result = Number(num1) + Number(num2);
        //display result on HTML
        document.getElementById("results").innerHTML=`<p>The conversion for celsius is: ${result}</p>`;
    }
}*/

function convert(celsius) {
    console.log('Value in celsius:', celsius +"°C");
    let fahrenheit = celsius * 9 / 5 + 32;
    console.log('Value in Fahrenheit:', fahrenheit +"°F");
    return fahrenheit;
    document.getElementById("results").innerHTML=`<p>The conversion for celsius is: ${result}</p>`;
}
convert(50);
}
