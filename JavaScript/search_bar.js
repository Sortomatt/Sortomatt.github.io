function getData(lat, lon) {
  // Get the data from the wunderground API
  $.ajax({
    url: 'https://api.wunderground.com/api/66f2cca3c6759655/geolookup/conditions/forecast/q/' + lat + ',' + lon + '.json',
      dataType: "jsonp",
      success: function(data) {
      console.log(data);
      var location = data.location.city + ', ' + data.location.state;
      var temp_f = data.current_observation.temp_f;
          var high_temp = data.forecast.simpleforecast.forecastday["0"].high.fahrenheit;
          var low_temp = data.forecast.simpleforecast.forecastday["0"].low.fahrenheit;
      console.log('Location is: ' + location);
      console.log('Temp is: ' + temp_f);
      $("#cityDisplay").text(location);
      $("title").html(location + " | Weather Center");
      $("#currentTemp").html(Math.round(temp_f) + '°');
        $("#summary").text(data.current_observation.icon);
          $("#add1").text('High is: ' + high_temp);
          $("#add2").text('Low is: ' + low_temp);
      $("#cover").fadeOut(250);
    }
  });
}

$('#query').keyup(function() {
  var value = $('#query').val();
  var rExp = new RegExp(value, "i");
  $.getJSON("https://autocomplete.wunderground.com/aq?query=" + value + "&cb=?", function(data) {
    console.log(data); // test for JSON received
    // Begin building output
    var output = '<ol>';
    $.each(data.RESULTS, function(key, val) {
      if (val.name.search(rExp) != -1) {
        output += '<li>';
        output += '<a href="#"' + ' onclick="getData(' + val.lat + ',' + val.lon +')"' + ' title="See results for ' + val.name + '">' + val.name + '</a>';
        output += '</li>';
      }
    }); // end each
    output += '</ol>';
    $("#searchResults").html(output); // send results to the page
  }); // end getJSON
}); // end onkeyup

$("#searchResults").on("click", "a", function (evt) {
  evt.preventDefault();
    var i = $(this).index('a');
    console.log(i);
    $("#searchResults").hide();
    $("#results").hide();
 // With the text value get the needed value from the weather.json file
  var jsonCity = $(this).text(); // Franklin, etc...
  console.log(jsonCity);
 getData(i.lat, i.lon);
});