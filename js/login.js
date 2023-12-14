let patterns = {
    name: /^[a-z ,.'-]+$/i,
    surname: /^[a-z ,.'-]+$/i,
    password: /^[a-z ,.'-]+$/i,
    email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ig
}



const btn = document.querySelector('.btn')
const gmail = document.querySelector('.email')
const passwordd = document.querySelector('.password')
const form = document.forms.login

let names = ''
let password = ''

let user;

function getDate() {
    user = JSON.parse(localStorage.getItem('user') || "{}")
}

gmail.addEventListener('keyup', (e) => {
    names = e.target.value
})
passwordd.addEventListener('keyup', (e) => {
    password = e.target.value
})

form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (user.email === names && user.password === password) {
        location.href = '/html/about.html'
    } else {
        alert('error')
    }
})
const inps = document.querySelectorAll('input')

inps.forEach(inp => {
    inp.onkeyup = () => {
        console.log(
            patterns[inp.name].test(inp.value)
            );
            if (patterns[inp.name].test(inp.value)) {
                inp.parentElement.classList.remove('errorField')
            } else {
                inp.parentElement.classList.add('errorField')
            }
        }
    })
    
    getDate()