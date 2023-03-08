function show_info(){
    document.getElementById("infoBlock").style.display = 'block'
    document.getElementById("infoBlock").style.opacity = 1
}

function hide_info(){
    document.getElementById("infoBlock").style.opacity = 0
    document.getElementById("infoBlock").style.display = 'none'
}


function check_input_text(){
    



    text = document.getElementById("sentiment_text");
    sentiment = document.querySelector('input[name="sentiment"]:checked');

    if (text.value != '' && text.value.length >= 10 
                         && text.value.length <= 150 && check_russian_litters(text.value)
                         && sentiment != null) {
        console.log(text);
        console.log(sentiment);
        document.getElementById('send-the-form-btn').click();     
        return;
    }
    
    document.getElementById("thanks-words").style.display = 'none';
    document.getElementById("empty-exception").style.display = 'none';
    document.getElementById("min-exception").style.display = 'none';
    document.getElementById("max-exception").style.display = 'none';
    document.getElementById("symb-exception").style.display = 'none';
    document.getElementById("sentiment-exception").style.display = 'none';

    if (text.value == '') {

        document.getElementById("empty-exception").style.display = 'block';
        console.log('Поле не может быть пустым!');
    }

    if (text.value.length < 10 ) {
        
        document.getElementById("min-exception").style.display = 'block';

        console.log('Минимальное количество символов 10!');
    }

    if (text.value.length > 150) {
        
        document.getElementById("max-exception").style.display = 'block';

        console.log('Максимальное количество символов 150!');
        
    }

    if (!check_russian_litters(text.value)  && text.value.length > 0) {
        
        document.getElementById("symb-exception").style.display = 'block';

        console.log("Тока русские букавы");
    }

    if (sentiment == null) {
        
        document.getElementById("sentiment-exception").style.display = 'block';

        console.log("Тока русские букавы");
    }
    document.getElementById("attentions-list").style.display = 'inline-block'
}


function check_russian_litters(str) {
    let match = /^[А-яЁё!,.?\s-]+$/i.test(str);
    // let match = /^[А-яЁё0-9!$%,.?+]+$/i.test(str);

    return match;
}

