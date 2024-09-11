fetch('https://serverstore.pythonanywhere.com/api/v1/products/').then(res=>res.json()).then((res)=>{
    
    let page_btn1 = document.querySelector('.mahsulot_btn1')
    let page_btn2 = document.querySelector('.mahsulot_btn2')
    let page_btn3 = document.querySelector('.mahsulot_btn3')
    let page_btn4 = document.querySelector('.mahsulot_btn4')
    let page_btn5 = document.querySelector('.mahsulot_btn5')
    let page_btn6 = document.querySelector('.mahsulot_btn6')
    let page_btn7 = document.querySelector('.mahsulot_btn7')
    let page_btn8 = document.querySelector('.mahsulot_btn8')
    let page_btn9 = document.querySelector('.mahsulot_btn9')

    

    

    function mahsulot_page1() {
        
        let s2_tovars = document.querySelector('.s2_as')
        s2_tovars.innerHTML = ''
        
       
        counts = 0
        for (i=0; i<1000; i++){
            if (res.results[i].category ==1){
                counts = counts+1
                page_btn1.style.color = 'white'
                page_btn1.style.background = '#002627'
                page_btn2.style.color = '#002627'
                page_btn2.style.background = 'white'
                page_btn3.style.color = '#002627'
                page_btn3.style.background = 'white'
                page_btn4.style.color = '#002627'
                page_btn4.style.background = 'white'
                page_btn5.style.color = '#002627'
                page_btn5.style.background = 'white'
                page_btn6.style.color = '#002627'
                page_btn6.style.background = 'white'
                page_btn7.style.color = '#002627'
                page_btn7.style.background = 'white'
                page_btn8.style.color = '#002627'
                page_btn8.style.background = 'white'
                page_btn9.style.color = '#002627'
                page_btn9.style.background = 'white'
                
                
                
         
                let main_div = document.createElement('div')
                let tovar_img = document.createElement('img')
                let tovar_p = document.createElement('p')
                let tovar_btn = document.createElement('button')

                


                main_div.classList.add('tovar')
                tovar_img.classList.add('timg')
                tovar_p.classList.add('tp')
                tovar_btn.classList.add('btn1')
                
                tovar_btn.id = ''

                
 
                main_div.append(tovar_img,tovar_p,tovar_btn)
                s2_tovars.appendChild(main_div)

      
                
                tovar_img.src = res.results[i].image_file
                tovar_p.innerHTML = res.results[i].name
                if (tovar_p.innerHTML.length > 60) {
                    tovar_p.innerHTML = tovar_p.innerHTML.substring(0, 60);
                }
                tovar_btn.innerHTML = 'ПОДРОБНЕЕ'
                tovar_btn.style.fontFamily = 'Inter'
                   

                tovar_btn.id = i
                var modal = document.getElementById("productModal");
        
        
                var closeBtn = document.getElementsByClassName("closeBtn")[0];
                let modal_img = document.getElementById('modalimg')
                let modal_h1 = document.getElementById('modalh1')
                let modal_p1 = document.getElementById('modalp1')
                let modal_p2 = document.getElementById('modalp2')
                tovar_btn.addEventListener('click' ,()=>{
                    
                    for (i=0;i<201;i++){
                        if(tovar_btn.id == i){
                       
                        

                            modal.style.display = "block";
                            modal_img.src = res.results[i].image_file
                            modal_h1.innerHTML = res.results[i].model_name
                            modal_p1.innerHTML = res.results[i].name
                            modal_p2.innerHTML = res.results[i].price - '.00'+' Som'

                        }
                    }
                    
                });
        
                closeBtn.onclick = function() {
                    modal.style.display = "none";
                }

               
                window.onclick = function(event) {
                    if (event.target == modal) {
                        modal.style.display = "none";
                    }
                }
            }
        }   
    }


    function mahsulot_page2() {
        
        let s2_tovars = document.querySelector('.s2_as')
        s2_tovars.innerHTML = ''
        
       
        counts = 0
        for (i=0; i<1000; i++){
            if (res.results[i].model_name =='INTEL'){
                counts = counts+1
                page_btn1.style.color = '#002627'
                page_btn1.style.background = 'white'
                page_btn2.style.color = 'white'
                page_btn2.style.background = '#002627'
                page_btn3.style.color = '#002627'
                page_btn3.style.background = 'white'
                page_btn4.style.color = '#002627'
                page_btn4.style.background = 'white'
                page_btn5.style.color = '#002627'
                page_btn5.style.background = 'white'
                page_btn6.style.color = '#002627'
                page_btn6.style.background = 'white'
                page_btn7.style.color = '#002627'
                page_btn7.style.background = 'white'
                page_btn8.style.color = '#002627'
                page_btn8.style.background = 'white'
                page_btn9.style.color = '#002627'
                page_btn9.style.background = 'white'
                
                
                
      
                let main_div = document.createElement('div')
                let tovar_img = document.createElement('img')
                let tovar_p = document.createElement('p')
                let tovar_btn = document.createElement('button')

                tovar_btn.id = ''
                

             
                main_div.classList.add('tovar')
                tovar_img.classList.add('timg')
                tovar_p.classList.add('tp')
                tovar_btn.classList.add('btn1')
                
        

                
        
                main_div.append(tovar_img,tovar_p,tovar_btn)
                s2_tovars.appendChild(main_div)

        
                
                tovar_img.src = res.results[i].image_file
                tovar_p.innerHTML = res.results[i].name
                if (tovar_p.innerHTML.length > 60) {
                    tovar_p.innerHTML = tovar_p.innerHTML.substring(0, 60);
                }
                tovar_btn.innerHTML = 'ПОДРОБНЕЕ'
                tovar_btn.style.fontFamily = 'Inter'
                   

                tovar_btn.id = i
                var modal = document.getElementById("productModal");
        
        
                var closeBtn = document.getElementsByClassName("closeBtn")[0];
                let modal_img = document.getElementById('modalimg')
                let modal_h1 = document.getElementById('modalh1')
                let modal_p1 = document.getElementById('modalp1')
                let modal_p2 = document.getElementById('modalp2')

                tovar_btn.addEventListener('click' ,()=>{
               
                    for (i=0;i<201;i++){
                        if(tovar_btn.id == i){
                    
                        

                            modal.style.display = "block";
                            modal_img.src = res.results[i].image_file
                            modal_h1.innerHTML = res.results[i].model_name
                            modal_p1.innerHTML = res.results[i].name
                            modal_p2.innerHTML = res.results[i].price - '.00'+' Som'

                        }
                    }
                    
                });
             
                closeBtn.onclick = function() {
                    modal.style.display = "none";
                }

               
                window.onclick = function(event) {
                    if (event.target == modal) {
                        modal.style.display = "none";
                    }
                }
            }
        }   
    }



    function mahsulot_page3() {
        
        let s2_tovars = document.querySelector('.s2_as')
        s2_tovars.innerHTML = ''
        
       
        counts = 0
        for (i=0; i<1000; i++){
            if (res.results[i].category ==5){
                counts = counts+1
                page_btn1.style.color = '#002627'
                page_btn1.style.background = 'white'
                page_btn2.style.color = '#002627'
                page_btn2.style.background = 'white'
                page_btn3.style.color = 'white'
                page_btn3.style.background = '#002627'
                page_btn4.style.color = '#002627'
                page_btn4.style.background = 'white'
                page_btn5.style.color = '#002627'
                page_btn5.style.background = 'white'
                page_btn6.style.color = '#002627'
                page_btn6.style.background = 'white'
                page_btn7.style.color = '#002627'
                page_btn7.style.background = 'white'
                page_btn8.style.color = '#002627'
                page_btn8.style.background = 'white'
                page_btn9.style.color = '#002627'
                page_btn9.style.background = 'white'
                
                
                
         
                let main_div = document.createElement('div')
                let tovar_img = document.createElement('img')
                let tovar_p = document.createElement('p')
                let tovar_btn = document.createElement('button')

                tovar_btn.id = ''
                

       
                main_div.classList.add('tovar')
                tovar_img.classList.add('timg')
                tovar_p.classList.add('tp')
                tovar_btn.classList.add('btn1')
                
        

                
           
                main_div.append(tovar_img,tovar_p,tovar_btn)
                s2_tovars.appendChild(main_div)

       
                
                tovar_img.src = res.results[i].image_file
                tovar_p.innerHTML = res.results[i].name
                if (tovar_p.innerHTML.length > 90) {
                    tovar_p.innerHTML = tovar_p.innerHTML.substring(0, 90);
                }
                tovar_btn.innerHTML = 'ПОДРОБНЕЕ'
                tovar_btn.style.fontFamily = 'Inter'
                   

                tovar_btn.id = i
                var modal = document.getElementById("productModal");
        
        
                var closeBtn = document.getElementsByClassName("closeBtn")[0];
                let modal_img = document.getElementById('modalimg')
                let modal_h1 = document.getElementById('modalh1')
                let modal_p1 = document.getElementById('modalp1')
                let modal_p2 = document.getElementById('modalp2')

                tovar_btn.addEventListener('click' ,()=>{
                 
                    for (i=0;i<201;i++){
                        if(tovar_btn.id == i){
                     
                        

                            modal.style.display = "block";
                            modal_img.src = res.results[i].image_file
                            modal_h1.innerHTML = res.results[i].model_name
                            modal_p1.innerHTML = res.results[i].name
                            modal_p2.innerHTML = res.results[i].price - '.00'+' Som'

                        }
                    }
                    
                });
                
                closeBtn.onclick = function() {
                    modal.style.display = "none";
                }

                
                window.onclick = function(event) {
                    if (event.target == modal) {
                        modal.style.display = "none";
                    }
                }
            }
        }   
    }


    function mahsulot_page4() {
        
        let s2_tovars = document.querySelector('.s2_as')
        s2_tovars.innerHTML = ''
        
       
        counts = 0
        for (i=0; i<1000; i++){
            if (res.results[i].category ==2){
                counts = counts+1
                page_btn1.style.color = '#002627'
                page_btn1.style.background = 'white'
                page_btn2.style.color = '#002627'
                page_btn2.style.background = 'white'
                page_btn3.style.color = '#002627'
                page_btn3.style.background = 'white'
                page_btn4.style.color = 'white'
                page_btn4.style.background = '#002627'
                page_btn5.style.color = '#002627'
                page_btn5.style.background = 'white'
                page_btn6.style.color = '#002627'
                page_btn6.style.background = 'white'
                page_btn7.style.color = '#002627'
                page_btn7.style.background = 'white'
                page_btn8.style.color = '#002627'
                page_btn8.style.background = 'white'
                page_btn9.style.color = '#002627'
                page_btn9.style.background = 'white'
                
                
                
         
                let main_div = document.createElement('div')
                let tovar_img = document.createElement('img')
                let tovar_p = document.createElement('p')
                let tovar_btn = document.createElement('button')

                tovar_btn.id = ''
                

            
                main_div.classList.add('tovar')
                tovar_img.classList.add('timg')
                tovar_p.classList.add('tp')
                tovar_btn.classList.add('btn1')
                
        

   
                main_div.append(tovar_img,tovar_p,tovar_btn)
                s2_tovars.appendChild(main_div)

                
                tovar_img.src = res.results[i].image_file
                tovar_p.innerHTML = res.results[i].name
                if (tovar_p.innerHTML.length > 60) {
                    tovar_p.innerHTML = tovar_p.innerHTML.substring(0, 60);
                }
                tovar_btn.innerHTML = 'ПОДРОБНЕЕ'
                tovar_btn.style.fontFamily = 'Inter'
                   

                tovar_btn.id = i
                var modal = document.getElementById("productModal");
        
        
                var closeBtn = document.getElementsByClassName("closeBtn")[0];
                let modal_img = document.getElementById('modalimg')
                let modal_h1 = document.getElementById('modalh1')
                let modal_p1 = document.getElementById('modalp1')
                let modal_p2 = document.getElementById('modalp2')

                tovar_btn.addEventListener('click' ,()=>{
                
                    for (i=0;i<201;i++){
                        if(tovar_btn.id == i){
                         
                        

                            modal.style.display = "block";
                            modal_img.src = res.results[i].image_file
                            modal_h1.innerHTML = res.results[i].model_name
                            modal_p1.innerHTML = res.results[i].name
                            modal_p2.innerHTML = res.results[i].price - '.00'+' Som'

                        }
                    }
                    
                });
                
                closeBtn.onclick = function() {
                    modal.style.display = "none";
                }

                
                window.onclick = function(event) {
                    if (event.target == modal) {
                        modal.style.display = "none";
                    }
                }
            }
        }   
    }   





    function mahsulot_page5() {
        
        let s2_tovars = document.querySelector('.s2_as')
        s2_tovars.innerHTML = ''
        
       
        counts = 0
        for (i=0; i<1000; i++){
            if (res.results[i].category == 3){
                counts = counts+1
                page_btn1.style.color = '#002627'
                page_btn1.style.background = 'white'
                page_btn2.style.color = '#002627'
                page_btn2.style.background = 'white'
                page_btn3.style.color = '#002627'
                page_btn3.style.background = 'white'
                page_btn4.style.color = '#002627'
                page_btn4.style.background = 'white'
                page_btn5.style.color = 'white'
                page_btn5.style.background = '#002627'
                page_btn6.style.color = '#002627'
                page_btn6.style.background = 'white'
                page_btn7.style.color = '#002627'
                page_btn7.style.background = 'white'
                page_btn8.style.color = '#002627'
                page_btn8.style.background = 'white'
                page_btn9.style.color = '#002627'
                page_btn9.style.background = 'white'
                
                
                
        
                let main_div = document.createElement('div')
                let tovar_img = document.createElement('img')
                let tovar_p = document.createElement('p')
                let tovar_btn = document.createElement('button')

                tovar_btn.id = ''
                


                main_div.classList.add('tovar')
                tovar_img.classList.add('timg')
                tovar_p.classList.add('tp')
                tovar_btn.classList.add('btn1')
                
        

                
   
                main_div.append(tovar_img,tovar_p,tovar_btn)
                s2_tovars.appendChild(main_div)

  
                
                tovar_img.src = res.results[i].image_file
                tovar_p.innerHTML = res.results[i].name
                if (tovar_p.innerHTML.length > 60) {
                    tovar_p.innerHTML = tovar_p.innerHTML.substring(0, 60);
                }
                tovar_btn.innerHTML = 'ПОДРОБНЕЕ'
                tovar_btn.style.fontFamily = 'Inter'
                   

                tovar_btn.id = i
                var modal = document.getElementById("productModal");
        
        
                var closeBtn = document.getElementsByClassName("closeBtn")[0];
                let modal_img = document.getElementById('modalimg')
                let modal_h1 = document.getElementById('modalh1')
                let modal_p1 = document.getElementById('modalp1')
                let modal_p2 = document.getElementById('modalp2')

                tovar_btn.addEventListener('click' ,()=>{
                  
                    for (i=0;i<201;i++){
                        if(tovar_btn.id == i){
                          
                        

                            modal.style.display = "block";
                            modal_img.src = res.results[i].image_file
                            modal_h1.innerHTML = res.results[i].model_name
                            modal_p1.innerHTML = res.results[i].name
                            modal_p2.innerHTML = res.results[i].price - '.00'+' Som'

                        }
                    }
                    
                });
                
                closeBtn.onclick = function() {
                    modal.style.display = "none";
                }

                
                window.onclick = function(event) {
                    if (event.target == modal) {
                        modal.style.display = "none";
                    }
                }
            }
        }   
    }   




    function mahsulot_page6() {
        
        let s2_tovars = document.querySelector('.s2_as')
        s2_tovars.innerHTML = ''
        
       
        counts = 0
        for (i=0; i<1000; i++){
            if (res.results[i].model_name == 'HPE'){
                counts = counts+1
                page_btn1.style.color = '#002627'
                page_btn1.style.background = 'white'
                page_btn2.style.color = '#002627'
                page_btn2.style.background = 'white'
                page_btn3.style.color = '#002627'
                page_btn3.style.background = 'white'
                page_btn4.style.color = '#002627'
                page_btn4.style.background = 'white'
                page_btn5.style.color = '#002627'
                page_btn5.style.background = 'white'
                page_btn6.style.color = 'white'
                page_btn6.style.background = '#002627'
                page_btn7.style.color = '#002627'
                page_btn7.style.background = 'white'
                page_btn8.style.color = '#002627'
                page_btn8.style.background = 'white'
                page_btn9.style.color = '#002627'
                page_btn9.style.background = 'white'
                
                
                
    
                let main_div = document.createElement('div')
                let tovar_img = document.createElement('img')
                let tovar_p = document.createElement('p')
                let tovar_btn = document.createElement('button')

                tovar_btn.id = ''
                

             
                main_div.classList.add('tovar')
                tovar_img.classList.add('timg')
                tovar_p.classList.add('tp')
                tovar_btn.classList.add('btn1')
                
        

                
         
                main_div.append(tovar_img,tovar_p,tovar_btn)
                s2_tovars.appendChild(main_div)

       
                
                tovar_img.src = res.results[i].image_file
                tovar_p.innerHTML = res.results[i].name
                if (tovar_p.innerHTML.length > 60) {
                    tovar_p.innerHTML = tovar_p.innerHTML.substring(0, 60);
                }
                tovar_btn.innerHTML = 'ПОДРОБНЕЕ'
                tovar_btn.style.fontFamily = 'Inter'
                   

                tovar_btn.id = i
                var modal = document.getElementById("productModal");
        
        
                var closeBtn = document.getElementsByClassName("closeBtn")[0];
                let modal_img = document.getElementById('modalimg')
                let modal_h1 = document.getElementById('modalh1')
                let modal_p1 = document.getElementById('modalp1')
                let modal_p2 = document.getElementById('modalp2')

                tovar_btn.addEventListener('click' ,()=>{
              
                    for (i=0;i<201;i++){
                        if(tovar_btn.id == i){
                      
                        

                            modal.style.display = "block";
                            modal_img.src = res.results[i].image_file
                            modal_h1.innerHTML = res.results[i].model_name
                            modal_p1.innerHTML = res.results[i].name
                            modal_p2.innerHTML = res.results[i].price - '.00'+' Som'

                        }
                    }
                    
                });
                
                closeBtn.onclick = function() {
                    modal.style.display = "none";
                }

                
                window.onclick = function(event) {
                    if (event.target == modal) {
                        modal.style.display = "none";
                    }
                }
            }
        }   
    }   



    function mahsulot_page7() {
        
        let s2_tovars = document.querySelector('.s2_as')
        s2_tovars.innerHTML = ''
        
       
        counts = 0
        for (i=0; i<1000; i++){
            if (res.results[i].category == 4){
                counts = counts+1
                page_btn1.style.color = '#002627'
                page_btn1.style.background = 'white'
                page_btn2.style.color = '#002627'
                page_btn2.style.background = 'white'
                page_btn3.style.color = '#002627'
                page_btn3.style.background = 'white'
                page_btn4.style.color = '#002627'
                page_btn4.style.background = 'white'
                page_btn5.style.color = '#002627'
                page_btn5.style.background = 'white'
                page_btn6.style.color = '#002627'
                page_btn6.style.background = 'white'
                page_btn7.style.color = 'white'
                page_btn7.style.background = '#002627'
                page_btn8.style.color = '#002627'
                page_btn8.style.background = 'white'
                page_btn9.style.color = '#002627'
                page_btn9.style.background = 'white'
                
                
                

                let main_div = document.createElement('div')
                let tovar_img = document.createElement('img')
                let tovar_p = document.createElement('p')
                let tovar_btn = document.createElement('button')

                tovar_btn.id = ''
                

            
                main_div.classList.add('tovar')
                tovar_img.classList.add('timg')
                tovar_p.classList.add('tp')
                tovar_btn.classList.add('btn1')
                
        

                
        
                main_div.append(tovar_img,tovar_p,tovar_btn)
                s2_tovars.appendChild(main_div)

             
                
                tovar_img.src = res.results[i].image_file
                tovar_p.innerHTML = res.results[i].name
                if (tovar_p.innerHTML.length > 60) {
                    tovar_p.innerHTML = tovar_p.innerHTML.substring(0, 60);
                }
                tovar_btn.innerHTML = 'ПОДРОБНЕЕ'
                tovar_btn.style.fontFamily = 'Inter'
                   

                tovar_btn.id = i
                var modal = document.getElementById("productModal");
        
        
                var closeBtn = document.getElementsByClassName("closeBtn")[0];
                let modal_img = document.getElementById('modalimg')
                let modal_h1 = document.getElementById('modalh1')
                let modal_p1 = document.getElementById('modalp1')
                let modal_p2 = document.getElementById('modalp2')

                tovar_btn.addEventListener('click' ,()=>{
                
                    for (i=0;i<201;i++){
                        if(tovar_btn.id == i){
                       
                        

                            modal.style.display = "block";
                            modal_img.src = res.results[i].image_file
                            modal_h1.innerHTML = res.results[i].model_name
                            modal_p1.innerHTML = res.results[i].name
                            modal_p2.innerHTML = res.results[i].price - '.00'+' Som'

                        }
                    }
                    
                });
                
                closeBtn.onclick = function() {
                    modal.style.display = "none";
                }

                
                window.onclick = function(event) {
                    if (event.target == modal) {
                        modal.style.display = "none";
                    }
                }
            }
        }   
    }   




    function mahsulot_page8() {
        
        let s2_tovars = document.querySelector('.s2_as')
        s2_tovars.innerHTML = ''
        
       
        counts = 0
        for (i=0; i<1000; i++){
            if (res.results[i].model_name == 'DELL'){
                counts = counts+1

                page_btn1.style.color = '#002627'
                page_btn1.style.background = 'white'
                page_btn2.style.color = '#002627'
                page_btn2.style.background = 'white'
                page_btn3.style.color = '#002627'
                page_btn3.style.background = 'white'
                page_btn4.style.color = '#002627'
                page_btn4.style.background = 'white'
                page_btn5.style.color = '#002627'
                page_btn5.style.background = 'white'
                page_btn6.style.color = '#002627'
                page_btn6.style.background = 'white'
                page_btn7.style.color = '#002627'
                page_btn7.style.background = 'white'
                page_btn8.style.color = 'white'
                page_btn8.style.background = '#002627'
                page_btn9.style.color = '#002627'
                page_btn9.style.background = 'white'
                
                
                
           
                let main_div = document.createElement('div')
                let tovar_img = document.createElement('img')
                let tovar_p = document.createElement('p')
                let tovar_btn = document.createElement('button')

                tovar_btn.id = ''
                

               
                main_div.classList.add('tovar')
                tovar_img.classList.add('timg')
                tovar_p.classList.add('tp')
                tovar_btn.classList.add('btn1')
                
        

                
            
                main_div.append(tovar_img,tovar_p,tovar_btn)
                s2_tovars.appendChild(main_div)

                
                
                tovar_img.src = res.results[i].image_file
                tovar_p.innerHTML = res.results[i].name
                if (tovar_p.innerHTML.length > 60) {
                    tovar_p.innerHTML = tovar_p.innerHTML.substring(0, 60);
                }
                tovar_btn.innerHTML = 'ПОДРОБНЕЕ'
                tovar_btn.style.fontFamily = 'Inter'

                tovar_btn.id = i
                var modal = document.getElementById("productModal");
        
        
                var closeBtn = document.getElementsByClassName("closeBtn")[0];
                let modal_img = document.getElementById('modalimg')
                let modal_h1 = document.getElementById('modalh1')
                let modal_p1 = document.getElementById('modalp1')
                let modal_p2 = document.getElementById('modalp2')

                tovar_btn.addEventListener('click' ,()=>{
                
                    for (i=0;i<201;i++){
                        if(tovar_btn.id == i){
                  
                        

                            modal.style.display = "block";
                            modal_img.src = res.results[i].image_file
                            modal_h1.innerHTML = res.results[i].model_name
                            modal_p1.innerHTML = res.results[i].name
                            modal_p2.innerHTML = res.results[i].price - '.00'+' Som'

                        }
                    }
                    
                });
                
                closeBtn.onclick = function() {
                    modal.style.display = "none";
                }

                
                window.onclick = function(event) {
                    if (event.target == modal) {
                        modal.style.display = "none";
                    }
                }
            }
        }   
    }   

    function mahsulot_page9() {
        
        let s2_tovars = document.querySelector('.s2_as')
        s2_tovars.innerHTML = ''
        
       
        counts = 0
        for (i=0; i<1000; i++){
            if (res.results[i].category == '6'){
                counts = counts+1

                page_btn1.style.color = '#002627'
                page_btn1.style.background = 'white'
                page_btn2.style.color = '#002627'
                page_btn2.style.background = 'white'
                page_btn3.style.color = '#002627'
                page_btn3.style.background = 'white'
                page_btn4.style.color = '#002627'
                page_btn4.style.background = 'white'
                page_btn5.style.color = '#002627'
                page_btn5.style.background = 'white'
                page_btn6.style.color = '#002627'
                page_btn6.style.background = 'white'
                page_btn7.style.color = '#002627'
                page_btn7.style.background = 'white'
                page_btn8.style.color = '#002627'
                page_btn8.style.background = 'white'
                page_btn9.style.color = 'white'
                page_btn9.style.background = '#002627'
                
                
                
           
                let main_div = document.createElement('div')
                let tovar_img = document.createElement('img')
                let tovar_p = document.createElement('p')
                let tovar_btn = document.createElement('button')

                tovar_btn.id = ''
                

     
                main_div.classList.add('tovar')
                tovar_img.classList.add('timg')
                tovar_p.classList.add('tp')
                tovar_btn.classList.add('btn1')
                
        

                
      
                main_div.append(tovar_img,tovar_p,tovar_btn)
                s2_tovars.appendChild(main_div)

     
                
                tovar_img.src = res.results[i].image_file
                tovar_p.innerHTML = res.results[i].name
                tovar_btn.innerHTML = 'ПОДРОБНЕЕ'
                tovar_btn.style.fontFamily = 'Inter'
                
                if (tovar_p.innerHTML.length > 60) {
                    tovar_p.innerHTML = tovar_p.innerHTML.substring(0, 60);
                }

                tovar_btn.id = i
                var modal = document.getElementById("productModal");
        
        
                var closeBtn = document.getElementsByClassName("closeBtn")[0];
                let modal_img = document.getElementById('modalimg')
                let modal_h1 = document.getElementById('modalh1')
                let modal_p1 = document.getElementById('modalp1')
                let modal_p2 = document.getElementById('modalp2')
                tovar_btn.addEventListener('click' ,()=>{
                
                    for (i=0;i<201;i++){
                        if(tovar_btn.id == i){
                        
                        

                            modal.style.display = "block";
                            modal_img.src = res.results[i].image_file
                            modal_h1.innerHTML = res.results[i].model_name
                            modal_p1.innerHTML = res.results[i].name
                            modal_p2.innerHTML = res.results[i].price - '.00'+' Som'

                        }
                    }
                    
                });
                
                closeBtn.onclick = function() {
                    modal.style.display = "none";
                }

                
                window.onclick = function(event) {
                    if (event.target == modal) {
                        modal.style.display = "none";
                    }
                }
            }
        }   
    }   
    function poisk(){
        
        
       
        let s2_tovars = document.querySelector('.s2_as')
        s2_tovars.innerHTML = ''
        for (i=0;i<200;i++){
            page_btn1.style.color = '#002627'
            page_btn1.style.background = 'white'
            page_btn2.style.color = '#002627'
            page_btn2.style.background = 'white'
            page_btn3.style.color = '#002627'
            page_btn3.style.background = 'white'
            page_btn4.style.color = '#002627'
            page_btn4.style.background = 'white'
            page_btn5.style.color = '#002627'
            page_btn5.style.background = 'white'
            page_btn6.style.color = '#002627'
            page_btn6.style.background = 'white'
            page_btn7.style.color = '#002627'
            page_btn7.style.background = 'white'
            page_btn8.style.color = '#002627'
            page_btn8.style.background = 'white'
            page_btn9.style.color = '#002627'
            page_btn9.style.background = 'white'
            poisk_inp.value.toLowerCase()
            
            
            if(res.results[i].model_name.toLowerCase().includes(poisk_inp.value.toLowerCase()) || res.results[i].name.toLowerCase().includes(poisk_inp.value.toLowerCase())) {
                let main_div = document.createElement('div')
                let tovar_img = document.createElement('img')
                let tovar_p = document.createElement('p')
                let tovar_btn = document.createElement('button')

                tovar_btn.id = ''
                

     
                main_div.classList.add('tovar')
                tovar_img.classList.add('timg')
                tovar_p.classList.add('tp')
                tovar_btn.classList.add('btn1')
                
        

                
      
                main_div.append(tovar_img,tovar_p,tovar_btn)
                s2_tovars.appendChild(main_div)

     
                
                tovar_img.src = res.results[i].image_file
                tovar_p.innerHTML = res.results[i].name
                if (tovar_p.innerHTML.length > 90) {
                    tovar_p.innerHTML = tovar_p.innerHTML.substring(0, 90);
                }
                tovar_btn.innerHTML = 'BATAFSIL'
                tovar_btn.style.fontFamily = 'Inter'

                tovar_btn.id = i
                var modal = document.getElementById("productModal");
        
        
                var closeBtn = document.getElementsByClassName("closeBtn")[0];
                let modal_img = document.getElementById('modalimg')
                let modal_h1 = document.getElementById('modalh1')
                let modal_p1 = document.getElementById('modalp1')
                let modal_p2 = document.getElementById('modalp2')
                tovar_btn.addEventListener('click' ,()=>{
                    
                    for (i=0;i<201;i++){
                        if(tovar_btn.id == i){
                            
                        

                            modal.style.display = "block";
                            modal_img.src = res.results[i].image_file
                            modal_h1.innerHTML = res.results[i].model_name
                            modal_p1.innerHTML = res.results[i].name
                            modal_p2.innerHTML = res.results[i].price - '.00'+' Som'
                        }
                    }
                    
                });
                
                closeBtn.onclick = function() {
                    modal.style.display = "none";
                }

                
                window.onclick = function(event) {
                    if (event.target == modal) {
                        modal.style.display = "none";
                    }
                }
                
            }
        }
      
        poisk_inp.value = ''
        

    }



    let poisk_btn = document.getElementById('poisk_btn')

    poisk_inp.addEventListener('keydown', function(event) {
       
        if (event.key === 'Enter') {
          poisk_btn.click();
        }
      });

    poisk_btn.addEventListener('click',()=>{
        poisk();
        
    })









    page_btn1.addEventListener('click', () => {
        mahsulot_page1();
        page_btn1.style.color = 'white'
        page_btn1.style.background = '#002627'

        
    });
    page_btn2.addEventListener('click', () => {
        mahsulot_page2();
        page_btn2.style.color = 'white'
        page_btn2.style.background = '#002627'
        
    });
    page_btn3.addEventListener('click', () => {
        mahsulot_page3();
        page_btn3.style.color = 'white'
        page_btn3.style.background = '#002627'
        
    });
    page_btn4.addEventListener('click', () => {
        mahsulot_page4();
        page_btn4.style.color = 'white'
        page_btn4.style.background = '#002627'
        
    });
    page_btn5.addEventListener('click', () => {
        mahsulot_page5();
        page_btn5.style.color = 'white'
        page_btn5.style.background = '#002627'
        
    });
    page_btn6.addEventListener('click', () => {
        mahsulot_page6();
        page_btn6.style.color = 'white'
        page_btn6.style.background = '#002627'
        
    });
    page_btn7.addEventListener('click', () => {
        mahsulot_page7();
        page_btn7.style.color = 'white'
        page_btn7.style.background = '#002627'
        
    });
    page_btn8.addEventListener('click', () => {
        mahsulot_page8();
        page_btn8.style.color = 'white'
        page_btn8.style.background = '#002627'
        
    });
    page_btn9.addEventListener('click', () => {
        mahsulot_page9();
        page_btn9.style.color = 'white'
        page_btn9.style.background = '#002627'
        
    });




})