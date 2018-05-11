function HouseController(){


//private

var houseService = new HouseService(drawHouses)


function drawHouses(houses){
    var template = ``
    for (let i = 0; i < houses.length; i++){
        var house = houses[i];
        template += `
        <div>
        <img src="${house.imgUrl}" alt="">
        <h3>bedrooms: ${house.bedrooms}</h3>
        <h3>bathrooms: ${house.bathrooms}</h3>
        <h3>levels: ${house.levels}
        <h3>Year: ${house.year}</h3>
        <h3>Description: ${house.description}</h3>
        <button onclick="app.controllers.houseController.deleteHouse('${house._id}')">Delete<button>
      </div>
        `
    }
    document.getElementById('house').innerHTML = template
}


//public

this.addHouse = function addHouse(e){
    e.preventDefault();
    var data = e.target
    var newHouse = {
        bedrooms: data.bedrooms.value,
        bathrooms: data.bathrooms.value,
        levels: data.levels.value,
        year: data.year.value,
        price: data.price.value,
        img: data.img.value,
        description: data.description.value
    }
    houseService.addHouse(newHouse)
    data.reset()
}
this.deleteHouse = function deleteHouse(id){
    houseService.deleteHouse(id)
}


}
