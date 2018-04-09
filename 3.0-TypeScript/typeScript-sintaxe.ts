//Declaração de variavel fortemente tipada=====================================================================

//Tipagem por atribuição de tipo
let nome: string; /*Para declarar variaveis usamos o comando "let" seguido do "nome" da variavel ":" 
e o tipo da variavel*/
nome = "Chapolin";/*Assim... ao darmos um valor tipo string como no exmeplo a variavel aceita seu conteudo*/
nome = 10;/*Quando tentamos setar um valor que não seja uma string o compilador não aceita*/


//Tipagem por atribuição de conteúdo:
let nNome = "Chapolin";/*Agora usando o comando "let" + o "nome" da variavel e atribuindo um "valor"
assim... a variavel será tipada baseado no tipo de valor que vc imputa nela */
nNome = 10;/*Quando tentamos setar um valor que não seja uma string o compilador não aceita*/

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
