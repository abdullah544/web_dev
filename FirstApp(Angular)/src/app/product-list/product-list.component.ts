import { Component } from '@angular/core';
import { products1 } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products1;
 
  share() {
    window.alert('The product has been shared!');
  }

  share1(){
    for(let i=0;i<products1.length;i++){
      let ref = products1[i].link;
      location.href=("https://wa.me/?text=Держи%20клевый%20продукт%20" + ref);
    }
  }

  onNotify(){
    window.alert('You will be notified when the product goes on sale');
  }
}