//Напишите функцию, которая принимает в качестве аргументов строку и объект, 
//а затем проверяет, есть ли у переданного объекта свойство с данным именем. 
//Функция должна возвращать true или false.
function checkArg(ArgName, Object)
{
    for (let key in Object) {
        if (Object.hasOwnProperty(ArgName)) {
            return true;
        }   
    }
    return false;
}

var testObj = {
    arg1: "123",
    arg2: "dsfdfsdf"
}

console.log(checkArg('arg1',testObj));
console.log(checkArg('arg2',testObj));
console.log(checkArg('arg3',testObj));