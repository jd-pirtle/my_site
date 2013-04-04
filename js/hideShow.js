$(".smallproj").on({
    mouseover: function() {
        $(this).closest(".smallproj").find("a").show();
    },      
    mouseout: function() {
        $(this).closest(".smallproj").find("a").hide();
    }       
});  
