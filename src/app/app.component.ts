import { RepositoryService } from './services/repositoryService/repository.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'airbnb_clone';
  houses: any[] = [];

  constructor(private repo: RepositoryService) {
    // perform the request to the repository
    repo.getHouses().subscribe({
      next: (response) => {
        this.houses = response;
      },
      error: (errorMessage) => {
        // TODO: NOTIFY THE USER ABOUT THE ERROR...
      },
    });
  }
}
