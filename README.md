<head>
<script>
    var i = ""
    var r_text = new Array ();
    r_text[0] = "All the leaves are brown";
    r_text[1] = "And the sky is grey";
    r_text[2] = "I've been for a walk";
    r_text[3] = "On a winter's day";
    r_text[4] = "I'd be safe and warm";
    r_text[5] = "If I was in L.A.";
    r_text[6] = "California dreaming, On such a winter's day";
    function kook() {
        document.getElementById('desc').innerHTML = ''
        i = Math.floor(Math.random()*6);
        itext=r_text[i].split('');    
        var display = setInterval(function() {
            var b = 0;
            document.getElementById('desc').innerHTML += itext[b];
            console.log("ok")
            if (b == (itext.length-1)) {
                clearInterval(display);
                console.log("cleared")
            }
            b++;
        }, 100);
    }
</script>
</head>
<body onload="kook();">
<h1 align=center><label id="desc">че закибер6yлили тебя да, ну я не знаю, включи javascript</label></h1>
</body>
