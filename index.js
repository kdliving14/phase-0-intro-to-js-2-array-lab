// Write your solution here!

let cats =["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name)
{
    return cats.push(name);
}

function destructivelyPrependCat(name)
{
    return cats.unshift(name);
}

function destructivelyRemoveFirstCat()
{
    return cats.shift();
}

function destructivelyRemoveLastCat()
{
    return cats.pop();
}

function appendCat(name)
{
    const coolCats = [...cats, name];
    return coolCats;
}

function prependCat(name)
{
    const coolCats = [name, ...cats];
    return coolCats;
}

function removeLastCat()
{
    return cats.slice(0, cats.length-1);
}

function removeFirstCat()
{
    return cats.slice(1);
}