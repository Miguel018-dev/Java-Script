function contar(){
    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert("[ERRO] Faltam dados!")
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('[ERRO] Passo inválido')
            p = 1
        }
        if (i < f) {
            // Contagem crescente
            for (c = i; c <= f; c++){
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            // Contagem regressiva
            for (c = 1; c >= f; c--) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}