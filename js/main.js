function clicado(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"))
    //alert("Obrigado por clicar")
}

function redirecionar(){
    window.open("http://www.google.com")
    window.location.href = "http://www.google.com"
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse"
    elemento.innerHTML = "Obrigado por passar o mouse"
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"
    elemento.innerHTML = "Passe o mouse aqui"
}

function load(){
    alert("Página carregada")
}

function funcaoChange(elemento){
    console.log(elemento.value)
}

/*function soma(n1,n2){
    return n1+n2;
}

function setReplace(frase,nome,novo_nome){
    return frase.replace(nome,novo_nome)
}

var validar=0;
function validaIdade(idade){
    if(idade>=18){
        validar = true;
    }else{
        validar = false;
    }
}

var idade = prompt("Qual a sua idade?")
validaIdade(idade)
alert(validar)
*/
//alert(soma(10,5));
//alert(setReplace("Vai Japão","Japão","Brasil"))

/*var d = new Date();
alert(d.getMonth()+1)
alert(d.getMinutes())
alert(d.getDay())
alert(d.getHours())
*/


/*var count;
for(count=0;count<=5;count++){
    alert(count)
}
*/

/*
var count = 0;
while(count<=5){
    console.log(count)
    count++;
}*/


/*var idade = prompt("Qual é a sua idade?");

if(idade>=18){
    alert("Maior de idade")
}else{
    alert("Menor de idade")
}*/


/*var frutas = [{nome:"maçã", cor:"vermelha"},{nome:"uva", cor:"roxa"}]
console.log(frutas)
alert(frutas[1].nome)
*/


/*var fruta = {nome:"maçã", cor:"vermelha"}
console.log(fruta.nome)
console.log(fruta.cor)
*/

/*var lista = ["maçã", "pêra", "laranja"];
console.log(lista[1])
lista.push("uva")
console.log(lista)
lista.pop()
console.log(lista)
console.log(lista.length)
console.log(lista.reverse())
console.log(lista.toString())
console.log(lista.toString()[1])
console.log(lista.join(" - "))
*/

/*var nome = "Douglas de Freitas";
var idade = 37;
var idade2 = 10;
var frase = "O Japão é o melhor time do mundo"
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2)
console.log(nome);
console.log(idade+idade2);
console.log(frase.replace("Japão","Brasil"));
alert(frase.replace("Japão","Brasil"));
console.log(frase.toUpperCase())*/