inputTelephone.addEventListener('keypress', function(e) {
    if (/[^0-9]/.test(e.key) && e.key !== "Enter") {
        e.preventDefault();
    } 
});

inputTelephone.addEventListener('input', function (e) {
    let valor = this.ariaValueMax.replace(/\D/g, '');

    if (valor.length > 15) {
        valor = valor.slice(0,11); 
    }

    if (valor.length < 14){
        return
    } else if (valor.length ===14) {
        valor = valor.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
    } else {
        valor = valor.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
    }

    this.value = valor;
})
