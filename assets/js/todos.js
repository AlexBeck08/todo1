var listCount = 1

// Check off specific Todos by clicking
$('ul').on('click', 'li', function() {
  $(this).toggleClass('completed');
});

// Click on X to delete Todo
$('ul').on('click', 'span', function(event) {
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });
  event.stopPropagation();
});

// Type in Input, hit enter, take val of input and add to new li
$('input[type="text"]').on('keypress', function(event) {
  if(event.which === 13) {
    //text value of new todo
    var newTodo = $(this).val()
    $(this).val('');
    // create new li at bottom
    $('ul').append('<li><span><i class="far fa-trash-alt"></i></span> ' + newTodo + '</li>')
  }
});

// Todo Input toggle
$('.fa-edit').on('click', function() {
  $('input[type="text"]').fadeToggle();
});

//Add New Todo List and Name It
$('.fa-plus-circle').on('click', function() {
  listCount += 1;
  $('.listSpacer').append('<div class="container"><h1 class="listNum' + listCount + '">TO-DO LIST <span class="newList"><i class="fas fa-plus-circle"></i></span><span class="newTodoToggle"><i class="far fa-edit"></i></span></h1><input type="text" placeholder="Add New Todo"><ul><li><span><i class="far fa-trash-alt"></i></span> Go To Potions Class</li><li><span><i class="far fa-trash-alt"></i></span> Buy New Robes</li><li><span><i class="far fa-trash-alt"></i></span> Visit Hagrid</li></ul></div>');
})