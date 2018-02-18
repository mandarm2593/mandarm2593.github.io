
    
    
 $(document).ready(function(){
  
    var progressBtn1= $('#progressBtn1');
     var progressBtn2=$('#progressBtn2');
     var progressBtn3=$('#progressBtn3');
    progressBtn1.removeClass('btn-circle-deactive').addClass('btn-circle-active');
     var prevButton=$('#prevButton');
     var nextButton=$('#nextButton');
     var part1=$('#part1');
     var part2=$('#part2');
     var part3=$('#part3');
     nextButton.click(function(){

        if(part1.hasClass('visible')){
            part1.removeClass('visible');
            part1.addClass('invis');
            part2.addClass('visible');
             part2.removeClass('invis');
            progressBtn1.removeClass('btn-circle-active').addClass('btn-circle-deactive');
            progressBtn2.removeClass('btn-circle-deactive').addClass('btn-circle-active');
            prevButton.removeClass('disabled').addClass('active').addClass('customButton');
            $(window).scrollTop(0);
        } 
         
        else if(part2.hasClass('visible')){
             
             part2.removeClass('visible');
             part2.addClass('invis');
            part3.removeClass('invis');
             part3.addClass('visible');
              progressBtn2.removeClass('btn-circle-active').addClass('btn-circle-deactive');
            progressBtn3.removeClass('btn-circle-deactive').addClass('btn-circle-active');
                        // nextButton.removeClass('active').addClass('disabled');

                nextButton.html('Submit');            
                    $(window).scrollTop(0);

        
        }
         else if(part3.hasClass('visible')){
             
             alert('Form Submitted Successfully');
             part3.removeClass('visible').addClass('invis');
             part1.removeClass('invis').addClass('visible');
             progressBtn3.removeClass('btn-circle-active').addClass('btn-circle-deactive');
             progressBtn1.addClass('btn-circle-active').removeClass('btn-circle-deactive');
                          prevButton.removeClass('active').addClass('disabled');
            nextButton.removeClass('disabled').addClass('active');
            nextButton.html('Next');
             
             
         }
           
        
         
         
          
    });

 
     
     prevButton.click(function(){
         
         if(part2.hasClass('visible')){
             part2.removeClass('visible');
             part2.addClass('invis');
            part1.removeClass('invis').addClass('visible');
             progressBtn2.removeClass('btn-circle-active').addClass('btn-circle-deactive');
            progressBtn1.removeClass('btn-circle-deactive').addClass('btn-circle-active');
             prevButton.removeClass('active').addClass('disabled');
                         $(window).scrollTop(0);

         }
         
         else if(part3.hasClass('visible')){
             part3.removeClass('visible');
             part3.addClass('invis');
            part2.removeClass('invis').addClass('visible');
             progressBtn3.removeClass('btn-circle-active').addClass('btn-circle-deactive');
            progressBtn2.removeClass('btn-circle-deactive').addClass('btn-circle-active');
             nextButton.html('Next');
             $(window).scrollTop(0);
             
             
             
         }
         
     
     
     });
     
     
     progressBtn1.click(function(){
        
         if(part2.hasClass('visible')){
             part1.addClass('visible').removeClass('invis');
             part2.removeClass('visible').addClass('invis');
             progressBtn2.removeClass('btn-circle-active').addClass('btn-circle-deactive');
            progressBtn1.removeClass('btn-circle-deactive').addClass('btn-circle-active');
             prevButton.removeClass('active').addClass('disabled');

             
             
         }
         
         if(part3.hasClass('visible')){
              part1.addClass('visible').removeClass('invis');
             part3.removeClass('visible').addClass('invis');
             progressBtn3.removeClass('btn-circle-active').addClass('btn-circle-deactive');
            progressBtn1.removeClass('btn-circle-deactive').addClass('btn-circle-active');
             prevButton.removeClass('active').addClass('disabled');
             nextButton.html('Next');
         }
         
         
         
         
     });
     
     
      progressBtn2.click(function(){
        
         if(part1.hasClass('visible')){
             part2.addClass('visible').removeClass('invis');
             part1.removeClass('visible').addClass('invis');
             progressBtn1.removeClass('btn-circle-active').addClass('btn-circle-deactive');
            progressBtn2.removeClass('btn-circle-deactive').addClass('btn-circle-active');
             prevButton.addClass('active').addClass('customButton').removeClass('disabled');

             
             
         }
         
         if(part3.hasClass('visible')){
              part2.addClass('visible').removeClass('invis');
             part3.removeClass('visible').addClass('invis');
             progressBtn3.removeClass('btn-circle-active').addClass('btn-circle-deactive');
            progressBtn2.removeClass('btn-circle-deactive').addClass('btn-circle-active');
             nextButton.html('Next');
         }
         
         
         
         
     });
     
     
      progressBtn3.click(function(){
        
         if(part2.hasClass('visible')){
             part3.addClass('visible').removeClass('invis');
             part2.removeClass('visible').addClass('invis');
             progressBtn2.removeClass('btn-circle-active').addClass('btn-circle-deactive');
            progressBtn3.removeClass('btn-circle-deactive').addClass('btn-circle-active');
             nextButton.html('Submit');
             
             
         }
         
         if(part1.hasClass('visible')){
              part3.addClass('visible').removeClass('invis');
             part1.removeClass('visible').addClass('invis');
             progressBtn1.removeClass('btn-circle-active').addClass('btn-circle-deactive');
            progressBtn3.removeClass('btn-circle-deactive').addClass('btn-circle-active');
             prevButton.removeClass('disabled').addClass('active');
             nextButton.html('Submit');
         }
         
         
         
         
     });
     
     
     
     
     
 
 
 
 });