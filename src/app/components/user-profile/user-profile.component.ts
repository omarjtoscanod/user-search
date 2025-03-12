import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GithubService } from '../../services/github.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  user: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private githubService: GithubService
  ) {}

  ngOnInit(): void {
    const username = this.route.snapshot.paramMap.get('username');
    console.log("Usuario recibido en la URL:", username);

    if (username) {
      this.githubService.getUserDetails(username).then(user => {
        this.user = user;
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}

