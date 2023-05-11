/*TIPOS*/

        var fechar = window.document.body.getElementsByClassName('botao')[0]
        var lista =  window.document.body.getElementsByClassName('listatipospopup')[0] 
        var abrir = window.document.body.getElementsByClassName('janelatipos')[0]
       
        abrir.addEventListener('click', clicar)
        fechar.addEventListener('click', clicar0)

        function clicar() {
            
           
            lista.style.display = 'block'

        }

        function clicar0() {   
            lista.style.display = 'none'
        }
        /*CAPACIDADE*/
        var abrir = window.document.body.getElementsByClassName('caplink')[0]
        var tabtipos = window.document.body.getElementsByClassName('tabInfo0')[0]
        var fechar = window.document.body.getElementsByClassName('botao1')[0]
        
        abrir.addEventListener('click', clicar1)
        fechar.addEventListener('click', fechar1)


        function clicar1() {tabtipos.style.display = 'block'}
        function fechar1() {tabtipos.style.display = 'none'}
       /*Estoque*/

            
       var img1 = window.document.body.getElementsByClassName('imgmod')[0]
       var valor = window.document.body.getElementsByClassName('preco')[0]

       var primod = window.document.body.getElementsByClassName('primod')[0]
       var segmod = window.document.body.getElementsByClassName('segmod')[0]
       var termod = window.document.body.getElementsByClassName('termod')[0]
       var quamod = window.document.body.getElementsByClassName('quamod')[0]
       
       


       primod.addEventListener('click', modelo1)
       segmod.addEventListener('click', modelo2)
       termod.addEventListener('click', modelo3)
       quamod.addEventListener('click', modelo4)
       
       


       function modelo1() { 
           img1.src = 'Imagens/SpringerSplit12000.jpg' 
           valor.innerHTML = 'R$ 1680,00'

   }

   function modelo2() { 
           img1.src = 'Imagens/SpringerParede12000.jpg' 
           valor.innerHTML = 'R$ 1890,00'

   }

   function modelo3() { 
           img1.src = 'Imagens/ConsulParede7500.jpg' 
           valor.innerHTML = 'R$ 1300,00'

   }

   function modelo4() { 
           img1.src = 'Imagens/ElginPortatil9000.jpg' 
           valor.innerHTML = 'R$ 1900,00'

   }



  
      
  
   