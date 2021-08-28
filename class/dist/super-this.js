class PC {
    constructor(hddCapacity) {
        this.hddCapacity = hddCapacity;
        this.ram = '0G';
    }
    set ramCapacity(value) {
        this.ram = value;
    }
    get ramCapacity() {
        return this.ram;
    }
    getHddCapacity() {
        return this.hddCapacity;
    }
}
class Desktop extends PC {
    constructor(hddCapacity) {
        super(hddCapacity);
        this.hddCapacity = hddCapacity;
    }
    getInfo() {
        console.log('1번 HDD 용량 :', super.getHddCapacity(), super.hddCapacity);
        console.log('2번 HDD 용량 :', this.getHddCapacity(), this.hddCapacity);
        this.hddCapacity = '2000G';
        console.log('3번 HDD 용량 :', super.getHddCapacity(), super.hddCapacity);
        console.log('4번 HDD 용량 :', this.getHddCapacity(), this.hddCapacity);
        super.ramCapacity = '16G';
        console.log('5번 RAM 용량 :', this.ramCapacity, super.ramCapacity);
        this.ramCapacity = '8G';
        console.log('6번 RAM 용량 :', this.ramCapacity, super.ramCapacity);
    }
}
let myDesktop = new Desktop('1000G');
myDesktop.getInfo();
/*
    실행 결과
    1번 HDD 용량 : 1000G undefined
    2번 HDD 용량 : 1000G 1000G
    3번 HDD 용량 : 2000G undefined
    4번 HDD 용량 : 2000G 2000G
    5번 RAM 용량 : 16G 16G
    6번 RAM 용량 : 8G 8G
 */ 
