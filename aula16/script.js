function contar() {
    let num = document.getElementById('txn')
    let tab = document.getElementById('tabu')
    if (num.value.length == 0){
        window.alert('[ERRO] Por favor digite um número')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML=''
        while (c <=10){
            let item= document.createElement('option')
            item.text= `${n} X ${c} = ${n*c}`
            item.value= `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}