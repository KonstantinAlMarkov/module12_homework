//Перепишите консольное приложение из предыдущего юнита на классыПерепишите консольное приложение из предыдущего юнита на классы

class ElectricEquipment
{ 
    constructor(powerConsumption)
    {
        this.powerConsumption = powerConsumption;
        this.state = false;
    }
    //делаем статический атрибут
    static totalConsumtion = 0;
    //делаем статический метод
    static getTotalConsumption()
    {
        console.log(ElectricEquipment.totalConsumtion);    
    }

    changeState()
    {
        if (this.state === true)
        {
            this.state = false;
            ElectricEquipment.totalConsumtion -= this.powerConsumption;            
        }
        else if(this.state === false)
        {
            this.state = true;
            ElectricEquipment.totalConsumtion += this.powerConsumption;   
        }       
    }
}

//лампочка
class Bulb extends ElectricEquipment
{
    constructor(powerConsumption, lightColor)
    {
        super(powerConsumption)
        this.lightColor = lightColor
    }
}
 
//компьютер
class Computer extends ElectricEquipment
{
    constructor(powerConsumption, CPU, APU)
    {
        super(powerConsumption)
        this.CPU = lightColor
        this.APU = lightColor   
    } 
}

const bulb1 = new Bulb(25, 'white');
const bulb2 = new Bulb(50, 'yellow');
const computer = new Bulb(250, 'AMD', 'NVIDIA');
bulb1.changeState();
bulb2.changeState();
//Приложение консольное, так что оставим так:
ElectricEquipment.getTotalConsumption();
computer.changeState();
ElectricEquipment.getTotalConsumption();
bulb2.changeState();
ElectricEquipment.getTotalConsumption();