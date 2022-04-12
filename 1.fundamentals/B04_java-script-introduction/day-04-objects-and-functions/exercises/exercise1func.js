function palindromo (palavra) {
    palavra2 = palavra.split("").reverse().join("");
    
    if (palavra === palavra2){
       console.log(true);
    } else {
        console.log(false);
    }
}

palindromo("pablo");