const car = (name, model, year, owner, phone, image) => ({name, model, year, owner, phone, image});
const cars = [
    car('Nissan', 'Note', 2006, 'Sokolova', '+7999 4005050', 'images/NissanNote.jpg'),
    car('Nissan', 'Caravan Elgrand', 2001, 'Sablin', '+7999 8881111', 'images/NissanCaravanElgrand.jpg'),
    car('Toyota', 'Estima Emina', 1998, 'Sidoroff', '+7923 1051010', 'images/ToyotaEstimaEmina.jpg'),
    car('Toyota', 'Hiace Regius', 1997, 'Sarkisyan', '+7908 0000001', 'images/ToyotaHiaceRegius.jpg'),
    car('Mazda', 'Bongo Friendee', 2004, 'Rakitin', '+7900 1002000', 'images/MazdaBongo.jpg')
];
const log = (text, type, date = new Date()) => ({text, type, date});

new Vue({
    el: '#app',
    data: {
        cars: cars,
        car: cars[0],
        logs: [],
        selectedCarIndex: 0,
        phoneVisible: false,
        search: '',
        modalVisible: false
    },
    methods: {
        selectCar(index) {
            console.log('Clicked...', index);
            this.car = cars[index];
            this.selectedCarIndex = index;
        },
        newOrder() {
            this.modalVisible = false;
            this.logs.push(
                log(`Car ${this.car.name} ${this.car.model} is successfully ordered :-)`, `ok`)
            );
        },
        cancelOrder() {
            this.modalVisible = false;
            this.logs.push(
                log(`Order is cancelled for car ${this.car.name} ${this.car.model} :-(`, `cnl`)
            );

        }
    },
    computed: {
        phoneBtnText() {
            return this.phoneVisible ? 'Hide phone' : 'Show phone'
        },
        filteredCars() {
            return this.cars.filter(car => {
                return car.name.indexOf(this.search) > -1 || car.model.indexOf(this.search) > -1
            });
        }
    },
    filters: {
        date(value){
            return value.toLocaleString();
        }
    }
});