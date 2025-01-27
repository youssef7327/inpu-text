let input = document.getElementById('input')
let btn = document.getElementById('btn')
let par = document.getElementById('p') 

let save = window.localStorage.setItem('value', input.value)
let get = window.localStorage.getItem('value')
 

btn.onclick= function pro(){
     let input_value = input.value
     par.innerHTML = input_value
    
}


