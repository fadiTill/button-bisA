
// largepage > 767px



   const fitGuideButton = `<br> </br>
   <p> fitGuideButton Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, 
    feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
    egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo </p>` 

     const careButton = `<br> </br>
     <p> careButtonPellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, 
     feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
     egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo <p>` 

     const materialsButton =`<div class="materials">
     <p  class="pourcentagea">50%              46%           4%</p>
     <p class="materb">cashmere            <span class="ref"> modal </span></p>
   </div>
   <br></br>
 <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, 
  feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
  egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo
</p> `


   
   
    function myFunctionFitGuide() {
        let x = document.getElementById("myFitGuide");
          x.innerHTML =  fitGuideButton
         
    };


    function myFunctionCare() {
        let x = document.getElementById("myFitGuide");
          x.innerHTML =  careButton
         
    };

    function myFunctionMaterials() {
        let x = document.getElementById("myFitGuide");
          x.innerHTML =  materialsButton
         
    }

   