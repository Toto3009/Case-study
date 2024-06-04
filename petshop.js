class Product {
    constructor(Name, Species, Age, Owner, Photo) {
        this.Name = Name;
        this.Species = Species;
        this.Age = Age;
        this.Owner = Owner;
        this.Photo = Photo;
    }

    getName() {
        return this.Name;
    }

    setName(name) {
        this.Name = name;
    }

    getSpecies() {
        return this.Species;
    }

    setSpecies(species) {
        this.Species = species;
    }

    getAge() {
        return this.Age;
    }

    setAge(age) {
        this.Age = age;
    }

    getOwner() {
        return this.Owner;
    }

    setOwner(owner) {
        this.Owner = owner;
    }
    getPhoto() {
        return this.Photo;
    }
    setPhoto(photo) {
        this.Photo = photo;
    }
}

let product = new Product("Moon", "Anh lông ngắn", "1", 'ToTo', '');
let product2 = new Product("Meo", "Xiêm", "3", 'VanA', '');
let product3 = new Product("Jon", "Pitbull", "3", 'VanB', '');
let product4 = new Product("Tom", "Husky", "2", 'VanC', '');

let arr = [product, product2, product3, product4];

display = () => {
    let str = "";
    for (let i = 0; i < arr.length; i++) {
        str += "<tr>";
        str += "<td>" + (i + 1) + "</td>"
        str += "<td>" + arr[i].Name + "</td>"
        str += "<td>" + arr[i].Species + "</td>"
        str += "<td>" + arr[i].Age + "</td>"
        str += "<td>" + arr[i].Owner + "</td>"
        str += "<td>" + arr[i].Photo + "</td>"
        str += "<td><button class='btn btn-success' onclick='updateProduct(" + i + ")'>Update</button></td>"
        str += "<td><button class='btn btn-success' onclick='deleteProduct(" + i + ")'>Delete</button></td>"
        str += "</tr>";
    }
    document.getElementById('display').innerHTML = str;
}

display();

addNewProduct = () => {
    let name = prompt("Enter product's name");
    let species = prompt("Enter product's species");
    let age = prompt("Enter product's age");
    let owner = prompt("Enter product's owner");
    let newProduct = new Product(name, species, age, owner);
    arr.push(newProduct);
    display();
}

updateProduct = (index) => {

    let elements = document.getElementById('product-add').elements;
    elements['index'].value = index;
    elements['name'].value = arr[index].getName();
    elements['species'].value = arr[index].getSpecies();
    elements['age'].value = arr[index].getAge();
    elements['owner'].value = arr[index].getOwner();
}

deleteProduct = (index) => {
    let check = confirm("Are you sure?");
    if (check) {
        arr.splice(index, 1);
        display();
    } else {
        alert("Nope!");
    }
}

submitForm = () => {
    let elements = document.getElementById('product-add').elements;
    let index = elements['index'].value;
    let name = elements['name'].value;
    let species = elements['species'].value;
    let age = Number(elements['age'].value);
    let owner = elements['owner'].value;
    if (!name || name.trim().length === 0
        || !species || species.trim().length === 0
        || !owner || owner.trim().length === 0
        || age == null) {
        // !name => name is null && name is undefined
        alert("Name is required!");
        return;
    }
    elements['index'].value = '';
    elements['name'].value = '';
    elements['species'].value = '';
    elements['age'].value = '';
    elements['owner'].value = '';
    let product = new Product(name, species, age, owner)
    console.log('product: ', product);
    if (index == null || index.trim().length === 0) {
        arr.push(product);
    } else {
        arr[index] = product;
    }
    display();
}