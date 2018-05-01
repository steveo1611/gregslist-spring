function CarService(){
  //This is where the data lives

  //PRIVATE
  var cars = []
  var id = 1

  function Car(img, year, model, make, price){
    this.id = id
    this.img = img
    this.year = year
    this.model = model
    this.make = make
    this.price = price
    id++
  }

  var pontiac = new Car('https://file.kbb.com/kbb/vehicleimage/housenew/480x360/1998/1998-pontiac-firebird-frontside_pofir981.jpg', 1998, 'Firebird', 'Pontiac', 4350)
  var pinto = new Car ('https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Ford_Pinto.jpg/280px-Ford_Pinto.jpg', 1975, 'Pinto', 'Ford', 10)
  var zimmer = new Car('https://images.autotrader.com/scaler/620/420/cms/content/articles/oversteer/2017/02-feb/02-01/261356.jpg', 1983, 'Golden Spirit', 'Zimmer', 191586)

  cars.push(pontiac, pinto, zimmer)


  //PUBLIC
  this.getCars = function getCars(){
    return JSON.parse(JSON.stringify(cars))
  }

  this.addCar = function addCar(car){
    var newCar = new Car(car.img, car.year, car.model, car.make, car.price)
    cars.unshift(newCar)
  }




}