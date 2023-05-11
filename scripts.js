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
      



  
      
  
   