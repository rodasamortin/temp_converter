
    function temperatureConverter(valNum) 
    {
      valNum = parseFloat(valNum);
      document.getElementById("outputCelcius").innerHTML=valNum-273.15;
      document.getElementById("outputFahrenheit").innerHTML=((valNum-273.15)*1.8)+32;
    } 