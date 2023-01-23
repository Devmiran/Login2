 const boton=document.getElementById('ingresar')
boton.addEventListener('click', e=>{
    e.preventDefault()
    const username=document.getElementById('username').value
    const passaword=document.getElementById('passaword').value

    if(username==='' || passaword==='' ){
        alert ('ERROR!! NO SE HA INGRESADO DATOS')
        }

    if(username==='ilva' && passaword==='123456'){    
        document.body.style.background="purple"
        localStorage.token="ilva"
        alert('BIENVENIDO')
       setTimeout(()=>{
            location="./index1.html"
        },1000) 
    }else{
        document.querySelector('#mensaje').style.display='block'
        setTimeout(()=>{
            document.querySelector('#mensaje').style.display='none'
        },3000)

    }
}) ;


