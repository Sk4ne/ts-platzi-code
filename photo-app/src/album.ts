import { Item } from './item' // Import relativo
// import { Item } from 'item' // Import absoluto
import { Picture } from './picture';

export class Album extends Item {
    picture: Picture[];
  id: any;
    
    constructor(id: number, title:string){
      super(id,title); 
      this.picture = []; 
    }
    addPicture(picture: Picture){
      this.picture.push(picture); 
    }
    
}