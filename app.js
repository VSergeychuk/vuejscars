const car = (name, model, year, owner, phone, image) => ({name, model, year, owner, phone, image});
const cars = [
    car('Nissan', 'Note', 2006, 'Sokolova', '+7999 4005050', 'images/NissanNote.jpg'),
    car('Nissan', 'Caravan Elgrand', 2001, 'Sablin', '+7999 8881111', 'images/NissanCaravanElgrand.jpg'),
    car('Toyota', 'Estima Emina', 1998, 'Sidoroff', '+7923 1051010', 'images/ToyotaEstimaEmina.jpg'),
    car('Toyota', 'Hiace Regius', 1997, 'Sarkisyan', '+7908 0000001', 'images/ToyotaHiaceRegius.jpg'),
    car('Mazda', 'Bongo Friendee', 2004, 'Rakitin', '+7900 1002000', 'images/MazdaBongo.jpg')
];

new Vue({
    el: '#app',
    data: {
        cars: cars,
        car: cars[0],
        selectedCarIndex: 0,
        phoneVisible: false,
        search: ''
    },
    methods: {
        selectCar(index) {
            console.log('Clicked...', index);
            this.car = cars[index];
            this.selectedCarIndex = index;
        }
    },
    computed: {
        phoneBtnText() {
            return this.phoneVisible ? 'Hide phone' : 'Show phone'
        },
        filteredCars() {
            const filtered = this.cars.filter(car => {
                return car.name.indexOf(this.search) > -1
            });
            return filtered;
        }
    }
});