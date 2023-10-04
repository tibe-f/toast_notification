const toasts=document.querySelector('.toasts')
const btn=document.querySelector('.btn')

const message=['message one','message two','message three']

btn.addEventListener('click',()=> toastGenerator(Math.floor(Math.random()*message.length)))

function toastGenerator(msg){
    const notify=document.createElement('div')
    notify.classList.add('toast')
    notify.innerText= message[msg]
    toasts.append(notify)

    setTimeout(()=>notify.remove(),3000)
}