import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { ProductServiceService } from 'src/app/service/product-service.service';
export interface IProduct {
  name : string,
  content: string,
  price: number,
  id: string,
  imageLink : string
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products : IProduct[] = []
  constructor(private spinner: NgxSpinnerService,private ps : ProductServiceService, private router: Router) { }

  ngOnInit(): void {

    if(localStorage.getItem('item') === '' || localStorage.getItem('item') === null){
      this.router.navigateByUrl('/login');
    }
    this.initAllProduct()
  }


  initAllProduct(){
      /** spinner starts on init */
    this.spinner.show();
    const result = this.ps.getAllProduct()

    result.subscribe((data)=>{
        if(data)
        {

          // i like it because it so beautiful
         this.products = data as IProduct[]
         setTimeout(() => {
          this.spinner.hide();
         }, 500);
        }
    })
  }

  navigate(){
    this.router.navigateByUrl('/product-create');
  }
}
