import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { PrimeIcons, MenuItem } from 'primeng/api';
import { ProductService } from '../product.service';
import { RepositoryService } from '../repository.service';

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
  public categories: { icon: string; label: string }[] = [];

  public selectedCategoryLabel: string = 'Islas';

  public areNavigatorsVisible: boolean = false;

  public responsiveOptions;

  constructor(
    private repo: RepositoryService,
    private breakpointObserver: BreakpointObserver
  ) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 10,
        numScroll: 6,
      },
      {
        breakpoint: '768px',
        numVisible: 6,
        numScroll: 4,
      },
      {
        breakpoint: '560px',
        numVisible: 5,
        numScroll: 2,
      },
    ];

    // register the handler for the breakpoint observer
    this.breakpointObserver
      .observe([`(max-width: ${'768px'})`])
      .subscribe((res) => {
        if (res.matches) {
          this.areNavigatorsVisible = false;
        } else {
          this.areNavigatorsVisible = true;
        }
      });

    // load categories collection
    this.repo.getCategories().subscribe({
      next: (res) => {
        this.categories = res;
      },
      error: (message) => {
        // TODO: Output something to the console...
      },
    });
  }
}
