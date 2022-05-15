function monto()
{   var numero1=parseInt(document.getElementById('numero1').value);
    var seleccion=document.getElementById('seleccion').value

    switch(seleccion)
    {
        case 'Estudiante':
            document.getElementById('total').value=(numero1*200)-(numero1*((200*80)/100));
            break

        case 'Trainee':
            document.getElementById('total').value=(numero1*200)-(numero1*((200*50)/100));
            break

        case 'Junior':
            document.getElementById('total').value=(numero1*200)-(numero1*((200*15)/100));
            break
    }


}