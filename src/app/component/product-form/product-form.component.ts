import { Component, Input, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from 'src/app/service/product-service.service';
import { IProduct } from 'src/app/view/home/home.component';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  @Input() action : string = ''
  id:string = ''
  constructor(
  private fb :FormBuilder, 
  private sv : ProductServiceService,
  private route:ActivatedRoute,
  private router: Router) { }
  productFrom = this.fb.group({
    name : ['', [Validators.required,]],
    content : ['',Validators.required],
    price : ['',Validators.required],
    imageLink : ['',Validators.required]
  })
  

  ngOnInit(): void {
    if(this.action === 'update')
    {
       const data = this.route.params.subscribe(params => {
        // console.log(params) //log the entire params object
        // console.log(params['id']) //log the value of id
        this.id = params['id'];
        this.sv.getProductById(params['id']).subscribe((result)=>{
          if(result)
          {
            this.productFrom.controls['name'].setValue(result.name);
            this.productFrom.controls['content'].setValue(result.content);
            this.productFrom.controls['price'].setValue(result.price);
            this.productFrom.controls['imageLink'].setValue(result.imageLink);
          }
        })
      });
    
    }

  }
  onSubmit(e: Event){
    e.preventDefault()

    console.log(this.productFrom);
    if(this.productFrom.status === 'INVALID'){
      alert('Please input !')
      return
    }

    const data = this.productFrom.value;
    
    const product : IProduct = {
      content : data.content,
      imageLink : data.imageLink,
      name : data.name,
      price : data.price,
      id : ''
    }



    if(this.action === 'add')
    {

      this.sv.postProudct(product).subscribe((result)=>{
        console.log(result);

        this.router.navigateByUrl('/home');
        
      },
      (error)=>{
        console.log(error);
        
      })
    }
    else if (this.action === 'update')
    {
     
      this.sv.updateProduct(product,this.id).subscribe((result)=>{
        console.log(result);
        this.router.navigateByUrl('/home');
      },error=>{console.log(error)})
    }
  }

  onDeleteProduct() {
    this.sv.deleteProductById(this.id).subscribe((data)=>{
      this.router.navigateByUrl('/home');
      
    })
  }
}
