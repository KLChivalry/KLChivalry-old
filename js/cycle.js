var number_of_photos = 25;
var speed_in_seconds = 12; // Sarah said it was going to slow.
create_content();
$($('#slideshow li:first').fadeIn(1000));
$(setInterval(function () {
    $('#slideshow li:first')
        .fadeOut(1000)
        .next()
        .delay(1000)
        .fadeIn(1000)
        .end()
        .appendTo('#slideshow');
}, speed_in_seconds * 1000));

function create_content() {
    var array = [];
    array = create_array();
    var text = "";
    array.forEach(function (element, index, array) {
        var picture = "";
        if (element < 10) {
            picture = "0" + element;
        }
        else {
            picture = String(element);
        }
        text += '<li>\r\n<img src="images/quotes/quote' + picture + '.jpg">\r\n</li>\r\n';
    });
    $('#slideshow').append(text);
}

function create_array() {
    //This is where the script creates the array
    var array = null;
    //For each picture add a value in the array
    for (var i = 1; i <= number_of_photos; i++) {
        if (array == null) {
            array = [i];
        }
        else {
            array[array.length] = i;
        }
    }
    //for each picture there is a value in the array
    var sort = null;
    i = 0;
    while (array.length > 0) {
        i = Math.floor((Math.random() * array.length) + 0);
        if (sort == null) {
            sort = array.splice(i, 1);
        }
        else {
            sort = sort.concat(array.splice(i, 1));
        }
    }
    return sort;
}
/*function switch_picture_random()
{
        var src = document.getElementById("quote-img").src;
        var picture = get_src();
        var n_picture = Math.floor((Math.random() * number_of_photos) + 1);
        
        
        if (n_picture == Number(picture))
        {
            switch_picture_random();
        }
        else
        {
            var ns_picture;
            if(n_picture<10)
            {
                ns_picture = "0"+n_picture;
            }
            else
            {
                ns_picture = String(n_picture);
            }
            src = src.replace(picture, ns_picture);
            document.getElementById("quote-img").src = src;
        }
}

//https://k-and-l-of-chivalry-jonathanarendt.c9.io/images/quotes/quote03.jpg

function get_src(){
    var src = document.getElementById("quote-img").src;
    src = String(src);
    return src.substr(src.indexOf('tes/quote',0)+9,2);
}

/*if(Math.floor((Math.random() * 2) + 1)!=2)
{
    setinterval = setInterval(switch_picture, (speed_in_seconds * 1000));
}
else
{
    setinterval = setInterval(switch_picture_random, (speed_in_seconds * 1000));
//}



//the script starts here and calls this method
switch_picture_random();*/