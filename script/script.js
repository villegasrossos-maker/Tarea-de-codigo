function esPrimo(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function obtenerPrimosFibonacci(cantidad) {
    let primos = [];
    let a = 0, b = 1;
    
    while (primos.length < cantidad) {
        let siguiente = a + b;
        a = b;
        b = siguiente;
        if (esPrimo(siguiente)) {
            primos.push(siguiente);
        }
        if (siguiente > 1000000) break; 
    }
    return primos;
}

document.getElementById('btnCifrar').addEventListener('click', () => {
    const palabra = document.getElementById('palabraInput').value;
    if (!palabra) return;
    
    const primos = obtenerPrimosFibonacci(palabra.length);
    let resultado = "";
    
    for (let i = 0; i < palabra.length; i++) {
        let asciiValue = palabra.charCodeAt(i);
        let cifrado = asciiValue + (primos[i] || 0);
        resultado += String.fromCharCode(cifrado);
    }
    
    document.getElementById('resultadoCifrado').innerText = resultado;
});

document.getElementById('btnDescifrar').addEventListener('click', () => {
    const palabraCifrada = document.getElementById('codigoInput').value;
    if (!palabraCifrada) return;
    
    const primos = obtenerPrimosFibonacci(palabraCifrada.length);
    let resultado = "";
    
    for (let i = 0; i < palabraCifrada.length; i++) {
        let asciiValue = palabraCifrada.charCodeAt(i);
        let descifrado = asciiValue - (primos[i] || 0);
        resultado += String.fromCharCode(descifrado);
    }
    
    document.getElementById('resultadoDescifrado').innerText = resultado;
});