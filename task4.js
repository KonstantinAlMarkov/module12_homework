//Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
//Определите иерархию электроприборов. 
//Включите некоторые в розетку. 
//Посчитайте потребляемую мощность. 
//Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). 
//Выбрав прибор, подумайте, какими свойствами он обладает.
function ElectricEquipment(powerConsumption)
{
    this.powerConsumption = powerConsumption,
    //изначально всегда выкл
    this.state = false,
    //для расчёта общего потребления
    totalConsumption = 0
}

ElectricEquipment.prototype.getTotalConsumption = function(){
    console.log(totalConsumption);
}
//Если меняем состояние объекта вкл/выкл, то изменяем totalConsumption прототипа
ElectricEquipment.prototype.changeState = function(){
    if (this.state === true)
    {
          this.state = false;
          totalConsumption -= this.powerConsumption;
        //  console.log(totalConsumption);
    }
    else if(this.state === false)
    {
          this.state = true;
          totalConsumption += this.powerConsumption;   
       //   console.log(totalConsumption);
    }
}
//лампочка
function Bulb(powerConsumption, lightColor){
  this.powerConsumption = powerConsumption;
  this.lightColor = lightColor
}

//компьютер
function Computer(powerConsumption, CPU, APU){
    this.powerConsumption = powerConsumption;
    this.CPU = lightColor
    this.APU = lightColor    
  }
  

Bulb.prototype = new ElectricEquipment();

const bulb1 = new Bulb(25, 'white');
const bulb2 = new Bulb(50, 'yellow');
const computer = new Bulb(250, 'AMD', 'NVIDIA');
bulb1.changeState();
bulb2.changeState();
//Приложение консольное, так что оставим так:
ElectricEquipment.prototype.getTotalConsumption();
computer.changeState();
ElectricEquipment.prototype.getTotalConsumption();
bulb2.changeState();
ElectricEquipment.prototype.getTotalConsumption();