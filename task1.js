//Напишите функцию, которая принимает в качестве аргумента объект и выводит в консоль 
//все ключи и значения только собственных свойств. 
//Данная функция не должна возвращать значение.
const testObj = {
    a:1,
    b:2
}
function printArgs(testObj)
{
    this.c=1;
    this.d=2;
    console.log(Object.entries(this));
}

const test = new printArgs(testObj);
