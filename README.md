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
        setInterval(function() {
            i = Math.floor(Math.random()*6)
            text=""
            itext=r_text[i].split('')
            itext.forEach(function(item, index, array) {
                setTimeout(function(){
                    text=text.split('|').join('').concat(item, "|")
                    document.getElementById('desc').innerHTML
                        = text
                }, 100)
            });
            text=""
        }, 1000);
    }
</script>
</head>
<body onload="kook();">
<h1 align=center><label id="desc">че закибербулили тебя да, ну я не знаю, включи javascript</label></h1>
</body>
