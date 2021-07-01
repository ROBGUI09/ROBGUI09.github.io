
    var r_text = new Array ();
    r_text[0] = "bad java dev";
    //r_text[1] = "well python dev";
    //r_text[2] = "owo.......uwu";
    //r_text[3] = "LOLCODE IS THE BEST";
    //r_text[4] = "do not disturb, generating bad scripts";
    //r_text[5] = "brainfuck?";
    //r_text[6] = "hewlo my name is zuzie, but zuzis with duh z";
    //r_text[7] = "omogash, i see ya";
    //r_text[8] = "WAT? SOMEONE CODING WORSE THAN ME???";
    //r_text[9] = "wow, smone visited this page";
    //r_text[10] = "smells like bad coding";
    //r_text[11] = "in these days like this.... Kids like S H O U L D B U R N I N H E L L";
    //r_text[12] = "did ya try to write code when you are asshole? that it is";
    //r_text[12] = "if imma not online mabye imma playing at my own smp";
    //r_text[13] = "did u see what bad code doing to ppl? ";
    //r_text[14] = "never -g-o-n-n-a- -g-i-v-e- -y-o-u- -u-p- sharing my own code, exceptions is only paying for code";
    //r_text[15] = "how to think?";
    //r_text[16] = "dungeon master";
    function kook() {
        for (var l=0; l<Infinity; l++) {
            document.getElementById('desc').innerHTML = '';
            var i = Math.floor(Math.random()*0);
            var itext=r_text[i].split('');
            var b = 0;
            var display = setInterval(function() {
                var pr = document.getElementById('desc').innerHTML.split('|').join('');
                document.getElementById('desc').innerHTML = pr + itext[b] + '|';
                if (b == (itext.length-1)) {
                    clearInterval(display);
                    b = 0;
                }
                else{
                b++;
                }
            }, 100);
        }
    }
