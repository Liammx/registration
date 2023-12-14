// let patterns = {
//     name: /^[a-z ,.'-]+$/i,
//     surname: /^[a-z ,.'-]+$/i,
//     phone: /^\+998([- ])?(90|91|93|94|95|98|99|33|97|71)([- ])?(\d{3})([- ])?(\d{2})([- ])?(\d{2})$/g,
//     email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ig
// }

// const btn = document.querySelector('.button')
// const inps = document.querySelector('.inps')
// const inp = document.querySelector('.inp')
// const inpa = document.querySelector('.inpa')

// const form = document.forms.registration

// let txt = ``
// let mxm = ``
// let cxc = ``

// btn.addEventListener('click' , () =>{

//     form.addEventListener('submit' , (e) => {
//         e.preventDefault()
//         let user = {}
    
//         let fm = new FormData(form)
//         fm.forEach((value , key) =>{
//             user[key] = value
//         })
//     })
    
    
//     inps.forEach(inps => {
//         inps.onkeyup = () => {
//             console.log(
//                 patterns[inps.name].test(inps.value)
//                 );
//                 if(patterns[inps.name].test(inps.value)){
//                     inps.parentElement.classList.remove('errorField')
//             } else {
//                 inps.parentElement.classList.add('errorField')
//             }
//         }
//     } )

//     inps.addEventListener('keyup' , (e) =>{
//         txt = e.target.value
//         console.log(txt)
//     })
//     inp.addEventListener('keyup' , (e) =>{
//         mxm = e.target.value
//         console.log(mxm)
//     })
//     inpa.addEventListener('keyup' , (e) =>{
//         cxc = e.target.value
//     console.log(cxc)
//     })
    

    
//     location.href = '/html/login.html'
// })


let patterns = {
    name: /^[a-z ,.'-]+$/i,
    surname: /^[a-z ,.'-]+$/i,
    phone: /^\+998([- ])?(90|91|93|94|95|98|99|33|97|71)([- ])?(\d{3})([- ])?(\d{2})([- ])?(\d{2})$/g,
    email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ig
}


const inp = document.querySelectorAll('input')
const btn = document.querySelector('.btn')
const form = document.forms.login

let txt = ''


for (let i = 0; i < inp.length; i++) {
    inp[i].addEventListener('keyup', (e) => {
        txt = e.target.value

    })
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    let user = {}

    let fm = new FormData(form)

    fm.forEach((value, key) =>{
        user[key] = value
    })

    localStorage.setItem('user', JSON.stringify(user))

    location.href = '/html/login.html'
})


