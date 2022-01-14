import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/view/home/home.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() product! : IProduct;
  constructor() { }

  ngOnInit(): void {
  }

}
