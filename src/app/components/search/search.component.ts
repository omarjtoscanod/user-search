import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GithubService } from '../..//services/github.service';
import { UserListComponent } from '../user-list/user-list.component';
import { ErrorHandlerComponent } from '../error-handler/error-handler.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule, UserListComponent, ErrorHandlerComponent],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  query: string = '';
  users: any[] = [];
  errorMessage: string = '';

  constructor(private githubService: GithubService) {}

  searchUsers() {
    if (this.query.includes('doublevpartners')) {
      this.errorMessage = 'No puedes buscar "doublevpartners".';
      return;
    }

    this.githubService.getUsersByName(this.query).subscribe({
      next: (response) => {
        this.users = response.items.slice(0, 10);
        this.errorMessage = '';
      },
      error: () => {
        this.errorMessage = 'Error al buscar usuarios.';
      }
    });
  }
}


