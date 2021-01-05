$(document).ready(function() 
{




$("#vaniermenu").hover(function()
{
	
	$(this).toggleClass("active sub-menu");

	
     var collegeMenu = $(this).next('ul');



     if (collegeMenu.hasClass('open'))
     {
	    collegeMenu.removeClass('open');
     }

     else
     {
        collegeMenu.addClass('open');
     }

});






$("a").hover(function() 
{	

    $(this).css("transition", "color 1.2s linear"); 
  
});





$("ul li").hover(function() 
{	

     $(this).css("transition", "max-height 3s ease-out").show().slideDown(200); 
  
});






$("> ul").hover(function() 
{	

     $(this).css("transition", "max-height 0.8s linear"); 
  
});




	
});

