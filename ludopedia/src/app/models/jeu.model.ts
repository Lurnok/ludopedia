export class Jeu {
    id: string; 
    age: number; 
    description: string;
    duration: number;
    imageurl: string;
    nbplayers: number; 
    price: number; 
    title: string; 

    constructor(
        id: string = "",
        age: number = 0,
        description: string = "",
        duration: number  = 0,
        imageurl: string = "",
        nbplayers: number = 0,
        price: number = 0,
        title: string = "",
    ) {
        this.id = id;
        this.age = age;
        this.description = description;
        this.duration = duration;
        this.imageurl = imageurl;
        this.nbplayers = nbplayers;
        this.price = price;
        this.title = title;
    }
}
