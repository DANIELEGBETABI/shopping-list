$(document).ready(function() {
    
    
        
        //append to list using the + button
        $("#addbutton").click(function(enter) {
           console.log("+ was pressed.");
           postGrocery();
        });
        
        //apdpend to the list using enter
        $("#groceries").keydown(function(enter) {
            if (enter.keyCode==13) {
                console.log("enter is pressed.");
                postGrocery();
            }
        });
    //};
    
    //got the grocery, print it
    function postGrocery() {
        var grocery = $("#groceries").val();
        var listitem = '<li class="notbought"><img src="../shopping-list/images/check.png" alt="checkbox" id="checkbox">' +grocery+ '<input type="button" id="delete" value="-"> </li>'

        if (grocery.indexOf(" ") !== -1 ) {
            alert("Please enter a food item to add it to your list.");
        }
        else if (grocery == "") {
            alert("Please enter a food item to add it to your list.");
        }
        else {
            
            $(".items").append(listitem).fadeIn(200);
            $("#groceries").val("");
            console.log(grocery);
            console.log(listitem);
        };
    };
    
    //make the delete button work.
    $(document).on("click", "#delete", function() {
        $(this).closest("li").fadeOut(200);
    });
    

    //getting .toggle to work    
    $(document).on("click", "#checkbox", function () {
        $(this).closest("li").toggleClass("notbought checked");
    });
    
    // getting clearall to work
    $(document).on("click", "#clearall", function () {
        $(".items").empty();
    });
    
    //adding a way to resize the instructions fix this section later
    $('.instructions').hover(function(){
        $(this).attr('size',4);
    },function(){
        $(this).attr('size',1);
    });
});


