function HouseService(){

var houses = []
var id =1

function House(img, address, city, state, zipcode, bedroom, baths, price, lotsize){
this.id = id
this.img = img
this.address = address
this.city = city
this.state = state
this.zipcode = zipcode
this.bedroom = bedroom
this.baths = baths
this.price = price
this.lotsize = lotsize
id++
}

var niceHouse = new House('http://www.reallynicehouses.com/wp-content/uploads/really-nice-house.jpg', '1500 Richy lane', 'money', 'ID', 83333, 6, 7, 4500000, '100 acres')
var normalHouse = new House('http://www.lethbridge.ca/living-here/My-Taxes/PublishingImages/Average%20house.jpg', '1600 Noormal lane', 'nowhere', 'ID', 85334, 3, 2, 45000, '0.3 acres')
var badHouse = new House('https://heidijeanwatson.files.wordpress.com/2014/02/poor-house.jpg', '100 Poor row', 'NOmoney', 'ID', 80000, 1, 0, 450, '.0001 acres')

houses.push(niceHouse, normalHouse, badHouse)


//public

this.getHouses = function getHouses(){
    return JSON.parse(JSON.stringify(houses))
}

this.addHouse = function addHouse(house){
    var newHouse = new House(house.img, house.address, house.city, house.state, house.zipcode, house.bedroom, house.baths, house.price, house.lotsize)
    houses.push(newHouse)
}



} //<!-- last bracket -->