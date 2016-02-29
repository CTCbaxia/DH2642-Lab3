var ListDishesViewController = function(view, model){
    view.selectType.change(function(){
  	var dishType = view.selectType.val();
  	model.setSelectedDish(dishType);

    $(".selectDish").on("click",function(){
        var value = [];
        var selectClass = $(".selectDish");
        var id = $(this).attr('id');
        model.setDishID(id); 
        model.addDishToPendingMenu(id);//add pending to dinnerMenuView
         $(".confirm").attr('id',id);
         $(".backToMenu").attr('id',id);//add id to backToMenu button, so if go back without adding, the dish won't be showed on menu
      
      });

  });
   
  view.search.click(function(){
  	var filter = view.keyWords.val();
  	model.setFilter(filter);
  });

  $(".selectDish").on("click",function(){
    var value = [];
    var selectClass = $(".selectDish");
    var id = $(this).attr('id');
    model.setDishID(id);
    model.addDishToPendingMenu(id);//add pending to dinnerMenuView
    $(".confirm").attr('id',id);
    $(".backToMenu").attr('id',id);//add id to backToMenu button, so if go back without adding, the dish won't be showed on menu
    // console.log($(".confirm").attr('id',id));
    // console.log($("#backToMenu").attr('id',id));
  });
  
  //unused 
  // $(".confirm").on("click",function(){  
  //   var id = $(this).attr('id');
  //   model.addDishToMenu(id);
  // });

}
