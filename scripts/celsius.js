function convert() {
    let celsius = prompt("Enter Temperature in Celsius:");
    console.log('Value in Celsius:', celsius +"°C");
    let results = celsius * 9 / 5 + 32;
    console.log('Value in Fahrenheit:', results +"°F");
    document.getElementById("results").innerHTML=`<p> ${results} The conversion for celsius is: </p>`;
    
}




