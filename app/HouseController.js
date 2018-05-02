function HouseController(){

//private

var houseService = new HouseService()


function drawHouses(){
 var houses = houseService.getHouses()
    var template = ``
    for (let i = 0; i < houses.length; i++){
        var house = houses[i];
        template += `
        <div>
        <img src="${house.img}" alt="">
        <h3>Make: ${house.address}</h3>
        <h3>Model: ${house.city}</h3>
        <h3>Year: ${house.state}</h3>
        <h3>Price: ${house.zipcode}</h3>
        <h3>Price: ${house.bedroom}</h3>
        <h3>Price: ${house.baths}</h3>
        <h3>Price: ${house.pricee}</h3>
        <h3>Price: ${house.lotsize}</h3>
      </div>
        `
    }
    document.getElementById('house').innerHTML = template
}
 drawHouses()

//public

this.addHouse = function addHouse(e){
    e.preventDefault();
    var data = e.target
    var newHouse = {
        img: data.img.value,
        address: data.address.value,
        city: data.city.value,
        state: data.state.value,
        zipcode: data.zipcode.value,
        bedroom: data.bedroom.value,
        baths: data.baths.value,
        price: data.price.value,
        lotsize: data.lotsize.value
    }
    houseService.addHouse(newHouse)
    drawHouses()
}

}
