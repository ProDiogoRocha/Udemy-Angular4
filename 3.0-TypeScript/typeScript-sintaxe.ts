//Declaração de variavel fortemente tipada=====================================================================

//Tipagem por atribuição de tipo
let nome: string; /*Para declarar variaveis usamos o comando "let" seguido do "nome" da variavel ":" 
e o tipo da variavel*/
nome = "Chapolin";/*Assim... ao darmos um valor tipo string como no exmeplo a variavel aceita seu conteudo*/
//nome = 10;/*Quando tentamos setar um valor que não seja uma string o compilador não aceita*/


//Tipagem por atribuição de conteúdo:
let nNome = "Chapolin";/*Agora usando o comando "let" + o "nome" da variavel e atribuindo um "valor"
assim... a variavel será tipada baseado no tipo de valor que vc imputa nela */
//nNome = 10;/*Quando tentamos setar um valor que não seja uma string o compilador não aceita*/

//Tipos de variaveis em TS:
let boolean:boolean = true; //Booleanos
let number:number = 10;// Numeros (Isso inclue, inteiros, decimais, flutuantes e long)
let string:string = "string";//String
let any:any = "qualquer"/*Any (Aceita qualquer tipo de conteúdo mas nesse tipo de variavel o compilador
não consegue detectar erro de tipagem) - NÂO RECOMENDADO SEU USO */

//Arrays======================================================================================================

//Tipos de declaração de arrays:
let onePlayer:number[]=[1,2,3];//Indicando o tipo seguido de colchetes
let twoPlayer:Array<number>=[1,2,3];//Usando a classe Array seguida do tipo de dados que estará na array
let treePlayer = [1,2,3];//Inferido pelo valor da variavel

//Uso de Funções==============================================================================================

//Função sem retorno:
/*Para declarar a funcão sem retorno podemos usar o comando void após a declaração dos paramêtros */
function useTheForce(name:string):void{
    console.log('Use the force, '+name)
}

//Função com retorno
/*Para declarar a função com retorno declaramos uma variavel para receber o return da função e após a 
declaração dos paramêtros usar o tipo do retorno da função*/
let shortestRun = function(parsecs:number):boolean{
    return parsecs < 12
}

//ArrowFunctions:
/*Quando usamos arrowFunctions, apenas declaramos os parametros que irão ser recebidos pela funcção e depois
 usando "=>" descrever o retorno, sem usar "{}" nem a palavra "return" pois ambos já são explicitos nas 
 arrow functions*/

//Sem Arrow Function:
var oldWay = function(name, nickname) {
    return 'My name is ' + nickname + ', ' + name;
};

//Com Arrow Function:
let newWay2 = (name, nickname) => 'My name is ' + nickname + ', ' + name;

//Informando que uma variavel é uma função
/*Ao declarar o tipo da variavel podemos dizer para o compilador que a variavel é do tipo função por no tipo
 declarar o cabeçalho de uma Arrow Function e informar seu retorno*/
let call:(name:string)=>void;

//Usando Funções

/*Abaixo a função recebe um numero e verifica se o numero é menor que 12, se for menor a função retorna
true, se não for retorna false*/
let isEnoughToBeatMF = function (parsecs: number): boolean{
    return parsecs < 12
}
/*Atribuindo o valor de uma variavel com o numero 14*/
let distance = 14;
/*Usando uma notação que se chama "TemplateString" podemos chamar diretamente no console.log tanto as 
variaveis nescesarias como a função declarada acima*/
console.log(`Is ${distance} parsects enought to be Millennium Falcon? ${isEnoughToBeatMF(distance)} ? 'YES' : 'NO'`)

//Outro Exemplo:
let call2 = (name:string)=>console.log(`Do you copy, ${name}?`)
call2("R2");

//Funções com paramêtros padrões

/*Função pode receber 2 numeros, no entanto se o segundo numero não for informado ele recebe o valor 1
...Ou seja... essa é uma função que pode receber 2 ou menos paramentros na sua assinatura */
function inc(speed:number, inc:number = 1 ):number{
    return speed + inc;
}
console.log(`inc (5, 1) = ${inc(5,1)}`)
console.log(`inc (5) = ${inc(5)}`);


//Classes===================================================================================================

//Exemplo de Classe com construtor e método

class SpaceCraft{ //Classe deve ser sempre com a primeira letra em maiusculo e usando "CamelCase"
    
    propulsor:string //Uma propriedade da classe é publica de forma implicita
    
    constructor(propulsor:string){ //O Construtor da classe 
        this.propulsor = propulsor;
    }

    jumpIntoHperspace(){//Função que Imprime na tela a mensagem em console.log
        console.log("Entering Hyperspace with "+this.propulsor);
    }
}


//Construtor da mesma classe só que simplificado:
class SpaceCraftNew{
    constructor(public propulsor:string){}/*Quando damos ao parametro do construtor o modificador public
    o mesmo já entende que vai receber da propriedade da classe*/
}
//Instanciando Classes:
let falcon = new SpaceCraft("HyperDrive")

//Exemplo de como chamar a função pela instancia da classe:
falcon.jumpIntoHperspace();


//Herança:
//Exemplo:
class MillenniumFalconn extends SpaceCraft{ /*A Classe MillenniumFalconn herda de SpaceCraft usando a 
palavra extends*/
    constructor(){
        super ("HyperDrive")/*Chama construtor da classe Mãe e seta o construtor*/
    }

    jumpIntoHperspace(){ //Metodo sendo sobrescrito
        if(Math.random()>=0.5){
            super.jumpIntoHperspace()
        }else{
            console.log("Failed")
        }
    }
}


//Interface(contrato)=====================================================================================
/*Interfaces são contratos do que a classe que a implementar deve ter*/
interface ContainerShip{
    cargoContainer: number
}

/*A Classe XWing Herda de SpaceCraft por isso é uma espaçonave, mais além de ser uma espaçonave ela é
atmbém uma nave de carga pois implementa a interface ContainerShip usando o comando ""implements*/
class XWing extends SpaceCraft implements ContainerShip{

    cargoContainer: number //implementando a propriedade da interface

    constructor(){
        super("HyperDrive")
        this.cargoContainer=4//imputando valor a propriedade da interface
    }

} 

//Interface herdando de outra interface
//Agora toda Nave que for nave de contrabando também é uma nave de carga
interface Smugglership extends ContainerShip{
    hiddenContainers: number
}



