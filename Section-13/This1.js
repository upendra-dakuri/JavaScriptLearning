let person1 =
{
    name:'meghana'
};
let person2 =
{
    name:'bharath'
};
function namer()
{
    return this.name;
}
console.log(namer.bind(person1)());
