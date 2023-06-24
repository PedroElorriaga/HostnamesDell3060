import './assets/css/style.css';

const status = document.querySelectorAll('.status')

for(let i = 0; i < status.length;i ++){
    let temp = status[i]
    if (temp.innerHTML === "REMOVIDO") {
        temp.style.color = '#32CD32'
    } else {
        temp.style.color = 'red'
    }
}


