$('#heading').css('color','red');
// for using jquey just select the item using $ then . functionalitites forstyle there is css(propertyname , value )

// click event
$('#btn').click(function (){
    console.log('button is clicked')
    $(this).css('color','red');
})

// keyboard events 
$('#inp').keypress(function (e){
    // console.log('key is pressed')
    // console.log($(this).val())
    if(e.which===13){
        console.log('you press enter')
    }
})

//effects in jquery
// $('.button').click(function (){
//     $('div').fadeOut(2000, function(){
//         console.log('faded out !!!')
//     })
// })

$('.button').click(function (){
    $('div').fadeToggle(2000, function(){
        console.log('faded out !!!')
    })
})