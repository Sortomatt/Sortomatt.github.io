     jQuery(document).ready(function($){
            $.ajax({
                url:"http://api.wunderground.com/api/66f2cca3c6759655/forecast/geolookup/conditions/q/CA/San_Francisco.json",
                dataType: "json",
                sucess: function (data) {
                    console.log = data;
                    var location = datalocation.city;
                    var temp_f = data.current_observation.temp_f;
                    console.log("Current Temperature in" + location + " is " + temp_f);
                    var locName = $('#locName');
                    var hightempMessage = $('tempMessage');
                    
                    locName.html(location);
                    highTemp.html(temp_f);
                    tempMessage.html("Current temperature in " + location + " is: " + temp_f);
                    
                }
            });
        })