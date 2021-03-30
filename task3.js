//Напишите функцию, которая создает пустой объект, но без прототипа
function createUnProto()
{
    let returnObj = Object.create(null);
    return returnObj;
}

let testVar = createUnProto();
console.log(Object.getPrototypeOf(testVar));