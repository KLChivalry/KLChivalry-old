$($(".CodeClick > div").click(function(){
    window.location = $(".CodeClick").attr("loc") + "#" + $(this).attr("CC#");
}));