/*

const arr : number[]=[1,2,3,4];
const newArr : number[]=[...arr];
const newArr2 : number[]=arr;

arr.push(5);

console.log(arr);
console.log(newArr);
console.log(newArr2);


const sam = {
    name: "SVB",
    age: 36
}
const clone = {...sam};

clone.age=38; //referentie naar Sam dus sam. of clone. is hetzelfde

console.log (sam);
console.log(clone);


interface Options {
    title: string,
    size?: Size
}
interface Size{
    width: number,
    heigth: number
}
const object1: Options = {
    title: "boek"
}
const object2: Options = {
    title: "boek",
    size:{
        heigth:5,
        width:5
    }
}

console.log(object1.size?.width ?? "geen waarde meegegeven");
console.log(object2.size?.heigth);

const array = ["Chris","Bergen"];
const [voornaam,achternaam] = array;

console.log(voornaam);
console.log(achternaam);

const person = {
    naam: "Chris",
    leeftijd: 37
}
const {leeftijd, naam}=person;

console.log(leeftijd);



interface Callback{
    ():void
}

function foo(bar:Callback){
    console.log("dit wordt eerst gedaan")
    bar();
}

foo(()=>console.log("hallo"));

*/
interface Persoon{
    naam:string,
    age:number
}

const numbers:number[]=[1,2,3,4,5];

/*
const otherNumbers:Persoon[]=numbers
    .filter(n => n  == 2)
    .map(n=>{
        naam:"joske",
        age:n
    }
    
);

console.log(otherNumbers);
*/
