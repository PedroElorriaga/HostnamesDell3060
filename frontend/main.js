import './assets/css/style.css';

const status = document.querySelectorAll('.status')
const hostInfo = document.querySelectorAll('.host-info')
const logado = document.querySelector('.logado')
const errorSn = document.querySelector('.sn')
const errorMac = document.querySelector('.mac')

for (let i = 0; i < status.length; i++) {
    let temp = status[i]
    if (temp.innerHTML === "REMOVIDO") {
        temp.style.color = '#32CD32'
    } else {
        temp.style.color = 'red'
    }
}

if (!logado) {
    for (let i = 0; i < hostInfo.length; i++) {
        let temp = hostInfo[i]
        temp.setAttribute('hidden', '')
    }
}