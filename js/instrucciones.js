$("#btnE").click(function (e) { 
    e.preventDefault();
    $("#txtI").slideUp();
    $("#txtE").slideDown();
});

$("#btnI").click(function (e) { 
    e.preventDefault();
    $("#txtE").slideUp();
    $("#txtI").slideDown();
    
});