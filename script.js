var request = new XMLHttpRequest();
request.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload = function () {
  var result = JSON.parse(request.response);
  console.log(result)
  //1. region in asia
  var a = result.filter((Element) => Element.region == "Asia").map((Element) => Element.name);
  console.log(a);

  //2.population less than 2laks
  var b = result.filter((Element) => Element.population < 200000).map((Element) => Element.name);
  console.log(b);
  //3.foreach loop
  result.forEach(element => {
    console.log(element.name);
    console.log(element.capital);
    console.log(element.flag);
  });
  //4.total population
  var c = result.reduce((initial, element) => initial + element.population, 0)
  console.log(c);
  //5.currencies in usd
  var d = result.filter((Element) => {
    for (var i = 0; i < Element.currencies.length; i++) {
      if (Element.currencies[i].code === "USD") {
        return true;
      }
    }


  });
  console.log(d);













}

