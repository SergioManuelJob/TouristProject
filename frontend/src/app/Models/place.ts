export class Place {
    id?: number;
    title: string;
    description: string;
    direction: string;
    image: string;
    review: any = [];

    constructor(id: number, title: string, description: string, direction: string, image: string, review: any[]){
        this.id = id;
        this.title = title;
        this.description = description;
        this.direction = direction;
        this.image = image;
        this.review = review;
    }
}
