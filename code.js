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
             $("#page-nav").on("click", "a", function (evt) {
                 evt.preventDefault();
                 var navClick = $(this).text();
                 console.log(navClick);
                 var pname = data[navClick]['path'];
                 var pdesc = data[navClick]['description'];
                 var pmanu = data[navClick]['manufacturer'];
                 var pprice = data[navClick]['price'];
                 var preview = data[navClick]['review']
                 console.log(pmanu);
                 $("#pname").html(pname);
                 $("pdesc").html(pdesc);
                 $("pmanu").html(pmanu);
                 $("pprice").html(pprice);
                 $("previews").html(preview);
                 $("#home").hide();
             });
//     $.ajax({
//         url: "js/acme.json",
//         dataType: "json",
//         success: function (data) {
//             console.log(data);
//             var home = data['nav-bar']['home'];
//             var anvil = data['nav-bar']['anvil'];
//             var explosive = data['nav-bar']['tnt'];
//             var decoy = data['nav-bar']['decoy'];
//             var trap = data['nav-bar']['trap'];
//             var output = '#flexlist';
//
//             $.getJSON("js/acme.json", function (data) {
//                 $.each(data, function (key, val) {
//                     output += '<li>';
//                     output += '<a href="#"' + ' onclick="getData(' +
//                         val.name + ')"' + ' title="go to ' + val.name + '">' + val.name + '</a>';
//                     output += '</li>';
//                     console.log(output);
//                 });
//             });