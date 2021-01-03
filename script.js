const btnLoad = document.getElementById('btn-load')
const gif = document.getElementsByClassName('el-pai')[0]

btnLoad.innerHTML = 'ocultar load'
btnLoad.style.fontFamily = 'sans-serif'

btnLoad.onclick = (e) => {
    if(!gif.classList.contains('hide')){
        gif.classList.add('hide')
        e.target.innerHTML = 'Mostrar load'
    } else {
        gif.classList.remove('hide')
        e.target.innerHTML = 'ocultar load'
    }
    

}
