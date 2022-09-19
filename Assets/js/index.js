window.addEventListener( 'DOMContentLoaded', function () {
    const openform  = document.getElementById("open-popup-button"); //query selecctor
    const product = document.getElementById("product-input");
    const price = document.getElementById("price-input");
    const quantity = document.getElementById("qty-input");
    const details = document.getElementById("descripcion");
    const allItemsform = document.querySelectorAll("div > input, textarea")
    const savebutton = document.getElementById("guardar-button")
    const rowsfordelete =  document.querySelector("table")
    const rowsproducts = document.getElementById("list-products")
    const popup = new bootstrap.Modal(document.getElementById("contenedor-modal"))
    const deleteproduct = document.getElementById("eliminar-seleccion")

   

    allItemsform .forEach(input => {
        input.addEventListener('change', function(event) {
          if (event.target.value !== "") {
            input.classList.remove('is-invalid')
          }
         
        })
      })
    
    openform.addEventListener('click', function(event) {
        
               allItemsform .forEach(input => {
            input.value=""   
            input.classList.remove('is-invalid')             
        })
    });

    deleteproduct.addEventListener('click', function(event){
         let allcheckbox = document.querySelectorAll("td > input")
         const tamaño = allcheckbox.length
         console.log(rowsproducts)
         let n_eliminados = 0
        allcheckbox.forEach((input, index, arr )=>{
            
            if(input.checked === true){

                console.log(index+1-n_eliminados, allcheckbox.length)
                
                
                    rowsfordelete.deleteRow(index+1-n_eliminados)
                n_eliminados+=1    
                console.log(input.checked)
            }
            
        })
    })

    savebutton.addEventListener('click', function(event) {
        event.preventDefault()
        
        
        if(product.value === ""){
            product.classList.add('is-invalid')
        }
        if(price.value === "" ){
            price.classList.add('is-invalid')   
        }
        if(quantity.value === ""){
            quantity.classList.add('is-invalid')
        }
        if(details.value === ""){
            details.classList.add('is-invalid')
        }
        
        if(product.value !== "" && price.value !== "" && quantity.value !== "" && details.value !== ""){
            product.classList.remove('is-invalid')
            price.classList.remove('is-invalid')
            quantity.classList.remove('is-invalid')
            details.classList.remove('is-invalid')

            rowsproducts.insertRow(-1).innerHTML = `
            <tr id='row'>
                <td><input type="checkbox" /></td>
                <td>${product.value}</td>
                <td>${price.value}</td>
                <td>${quantity.value}</td>
                <td>${details.value}</td>
            </tr>            
            `
            
            popup.hide()            
            allItemsform .forEach(input => {
                input.value=""                
            })

        
        }

        
    
    
    })  



});
