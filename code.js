     $.ajax({
         url: "js/acme.json",
         dataType: "json",
         sucess: function (data) {
             console.log(data);
             var home = data['nav-bar']['home'];
             var anvil = data['nav-bar']['anvil'];
             var explosive = data['nav-bar']['tnt'];
             var decoy = data['nav-bar']['decoy'];
             var trap = data['nav-bar']['trap'];
             $("#zero").html("<a>home</a>");
             $("#one").html(anvil);
             $("#two").html(explosive);
             $("#three").html(decoy);
             $("#four").html(trap);
         }
     });
     $("#flexlist").on("click", "a", function (evt) {

         evt.preventDefault();
         var navClick = $(this).text();
         console.log(navClick);

         var pname = data[navClick]['name'];
         var pdesc = data[navClick]['description'];
         var pmanu = data[navClick]['manufacturer'];
         var pprice = data[navClick]['price'];
         var preview = data[navClick]['reviews'];
         var pimage = data[navClick]['path']
         console.log(pmanu);
         $("#home").hide();

         var output = ('<img alt="Product Image" src="' + pimage + '">');
         $("#pname").html(pname);
         $("#pdesc").html(pdesc);
         $("#pmanu").html("Made by: " + pmanu);
         $("#pprice").html("Price: $" + pprice);
         $("#previews").html("Reviews: " + preview);
         $("#pimg").html(output);
         console.log(output);
         //                 if (navClick = home) {
         //                     $("#page").addClass(".gone");
         //                     $("#home").removeClass(".gone");
         //                 } else {
         //                     $("#page").removeClass(".gone");
         //                     $("#home").addClass(".gone");
         //                 }
     });
     $("#flexlist").on("click", "a", function (evt) {

         evt.preventDefault();
         var navClick = $(this).text();
         console.log(navClick);
         if (navClick != home) {
             var pname = data[navClick]['name'];
             var pdesc = data[navClick]['description'];
             var pmanu = data[navClick]['manufacturer'];
             var pprice = data[navClick]['price'];
             var preview = data[navClick]['reviews'];
             var pimage = data[navClick]['path']
             console.log(pmanu);

             $("#page").removeClass(".gone");
             $("#home").addClass(".gone");

             var output = ('<img alt="Product Image" src="' + pimage + '">');
             $("#pname").html(pname);
             $("#pdesc").html(pdesc);
             $("#pmanu").html("Made by: " + pmanu);
             $("#pprice").html("Price: $" + pprice);
             $("#previews").html("Reviews: " + preview);
             $("#pimg").html(output);
             console.log(output);
         } else {
             $("#page").removeClass(".gone");
             $("#home").addClass(".gone");
         }
     });

     $.ajax({
                 url: "js/acme.json",
                 dataType: "json",
                 success: function (data) {
                         console.log(data);
                         var home = data['nav-bar']['home'];
                         var anvil = data['nav-bar']['anvil'];
                         var explosive = data['nav-bar']['tnt'];
                         var decoy = data['nav-bar']['decoy'];
                         var trap = data['nav-bar']['trap'];
                         var output = '#flexlist';

                         $.getJSON("js/acme.json", function (data) {
                             $.each(data, function (key, val) {
                                 output += '<li>';
                                 output += '<a href="#"' + ' onclick="getData(' +
                                     val.name + ')"' + ' title="go to ' + val.name + '">' + val.name + '</a>';
                                 output += '</li>';
                                 console.log(output);
                             });
                         });
