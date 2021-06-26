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
    function strtxt(txt) {
    t = txt.split('');
    return t;
    }
    function kook() {   
        var display = setInterval(function() {
            i = Math.floor(Math.random()*6);
            itext=strtxt(r_text[i]);
            var b = 0;
            txt=document.getElementById('desc').innerHTML
            txt=txt+itext[b];
            if (b == (itext.length-1)) {
                clearInterval(display);
            }
            b++;
        }, 100);
    }
</script>
</head>
<body onload="kook();">
<h1 align=center><label id="desc">че закибер6yлили тебя да, ну я не знаю, включи javascript</label></h1>
</body>
