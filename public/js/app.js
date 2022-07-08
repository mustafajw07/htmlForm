let email_size = 3;
let number_size = 3;

function addEmail(){
    if(email_size >= 0){
        let new_email = parseInt($('#h_email').val())+1;
        var new_input="<input type='text' id='email"+new_email+"' name='email"+new_email+"'>";
        $('#hidden_email').append(new_input);
        $('#h_email').val(new_email)
        email_size--;    
    }
    else{
        var span="<span>Too many fields</span>";
        $('#hidden_email').append(span);
    }
}

function addNumber(){
    if(number_size >= 0){
        let newPhone = parseInt($('#h_number').val())+1;
        var new_input="<input type='text' id='number"+newPhone+" 'name='number"+newPhone+"'>";
        $('#hidden_number').append(new_input);
        $('#h_number').val(newPhone)
        number_size--;    
    }
    else{
        var span="<span>Too many fields</span>";
        $('#hidden_number').append(span);
    }
}
 