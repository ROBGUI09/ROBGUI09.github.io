    var i = ""
    var r_text = new Array ();
    r_text[0] = "хуевый java dev";
//    r_text[1] = "более\-менее python dev";
//    r_text[2] = "cpp\,c sharp\,c\#? Что это?";
//    r_text[3] = "LOLCODE IS THE BEST";
//    r_text[4] = "не учи еблана";
//    r_text[5] = "что такое brainfuck?";
//    r_text[6] = "в один прекрасный день\, я перестану пиздить чужой код";
//    r_text[7] = "если ваш кол не работает\, возможно его писал я";
//    r_text[8] = "ЧТО? КТО ТО КОДИТ ХУЖЕ МЕНЯ????";
//    r_text[9] = "обалдеть\, тут есть посетители";
//    r_text[10] = "определенно пахнет говнокодом";
//    r_text[11] = "\*Пахнет говнокодом";
//    r_text[12] = "Вы когда нибудь пробовали писать код руками из жопы? Вот-вот!";
//    r_text[12] = "В один прекрасный день\, руки вырастут где надо";
//    r_text[13] = "Кто это? Это птица? Это самолет? Нет, это просто говнокодер";
//    r_text[14] = "Зачем тебе мой код? Запутаться в себе и стать моим клоном?";
//    r_text[15] = "я не умею думать";
//    r_text[16] = "заскамил мамонта и взломал его ass";
    function kook() {
        for (var l=0; l<Infinity; l++) {
            document.getElementById('desc').innerHTML = '';
            i = Math.floor(Math.random()*0);
            itext=r_text[i].split('');    
            var b = 0;
            var display = setInterval(function() {
                var pr = document.getElementById('desc').innerHTML.split('|').join('');
                document.getElementById('desc').innerHTML = pr + itext[b] + '|';
                if (b == (itext.length-1)) {
                    clearInterval(display);
                    b = 0
                }
                else{
                b++;
                }
            }, 100);
        };
    }
