function createAList() {
    let listname = $('#createinput').val();
     $('.main').append(
         '<div class="list-box">'
            +'<div class="header">'
                + '<input type="checkbox" class="markCompleteList">'
                + '<div class="fa fa-trash"></div>'
                + '<div class="headleft">'
                    + listname
                + '</div>'
                +'<div class="headright">'
                    + '<button type="button" class="addItem btn btn-primary" data-toggle="modal" data-target="#addItemModal" data-whatever="@mdo">Add Items</button>'
                +'</div>'
            +'</div>'
            + '<div class="list">'
                    + '<ul class="todolist">'
                    + '</ul>'
            + '</div>'
         +'</div>');
     $('#createinput').val("");
     $('.main').show(this);
 }
 $(document).ready(function() {
     let $active;

     $(document).on( 'click', '.addItem', function(e){
         let $button = $(this);
         $active = $button.closest('.list-box');
         e.stopPropagation();
     });
     $(document).on("click", ".markCompleteList", function() {
         $(this).parent().parent('.list-box').toggleClass("completed");
     });
     $(document).on("click", ".fa-trash",function () {
         $(this).parent().parent('.list-box').remove();
     });
     $(document).on('click', '#createItemBtn',function(){
         let listItem = $('#createItemInput').val();
         $active.find('.todolist').append('<div class="todoitem">'+'<li>'+ '<input type="checkbox" class="markComplete">' + listItem + '</li>'+'<div class="fa fa-trash"></div>'+'</div>');
         $('#createItemInput').val("");
     });
     $(document).on("click", ".markComplete", function() {
         $(this).closest("li").toggleClass("completed");
     });
     $(document).on("click", ".fa-trash",function () {
         $(this).parent().remove();
     });
 });
