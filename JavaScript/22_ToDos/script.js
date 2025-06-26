$('#addBtn').click(function(){
    $('#todoInput').toggle()
})

$('ul').on('click','li',function (){
    $(this).toggleClass('completed')// this is for li
})

$('#todoInput').keypress(function(e){
    const inputValue = $(this).val()
    if(e.which===13){
        $('#todoList').append(`<li><span>X</span>${inputValue}</li>`);
        $('#todoInput').val("");
    }
})

$('#todoList').on('click','span', function (e){
    $(this).parent().fadeOut(function (){
        $(this).remove()
    })
    e.stopPropogation();
})