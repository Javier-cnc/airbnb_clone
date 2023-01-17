import { Component, OnInit } from '@angular/core';
import { PrimeIcons, MenuItem } from 'primeng/api';
import { ProductService } from '../product.service';

export interface Product {
  id?: string;
  code?: string;
  name?: string;
  description?: string;
  price?: number;
  quantity?: number;
  inventoryStatus?: string;
  category?: string;
  image?: string;
  rating?: number;
}

@Component({
  selector: 'app-filters-bar',
  templateUrl: './filters-bar.component.html',
  styleUrls: ['./filters-bar.component.css'],
})
export class FiltersBarComponent {
  public products: any[] = [];
  public filters: MenuItem[] = [];

  public responsiveOptions;

  constructor(private productService: ProductService) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 1,
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
    // create the collection of elements
    for (let i = 0; i < 100; i++) {
      this.products.push({ name: i });
    }

    this.filters = [
      {
        label: 'File',
        items: [
          { label: 'New', icon: PrimeIcons.PLUS },
          { label: 'Open', icon: PrimeIcons.DOWNLOAD },
        ],
      },
      {
        label: 'Edit',
        items: [
          { label: 'Undo', icon: PrimeIcons.REFRESH },
          { label: 'Redo', icon: PrimeIcons.REPLAY },
        ],
      },
    ];
  }
}
