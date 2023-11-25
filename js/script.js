const btnReestablecer = document.getElementById('btnReestablecer')
const contadorVisitas = document.getElementById('contadorVisitas')
console.log(btnReestablecer,contadorVisitas)

let contador = localStorage.getItem('Visitas')||0;

contador++;

localStorage.setItem('Visitas', contador);

contadorVisitas.innerHTML = contador;

btnReestablecer.addEventListener('click', ()=>{
    localStorage.clear()
    contadorVisitas.innerHTML = 0
});