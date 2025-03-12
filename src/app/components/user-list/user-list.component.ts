import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, RouterModule, NgxChartsModule], 
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnChanges {
  @Input() users: any[] = [];
  chartData: any[] = [];

  constructor(private githubService: GithubService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['users'] && this.users.length > 0) {
      this.updateChartData();
    }
  }

  updateChartData(): void {
    const requests = this.users.map(user =>
      this.githubService.getUserDetails(user.login).then(details => ({
        name: user.login,
        value: details.followers || 0
      }))
    );

    Promise.all(requests).then(data => {
      this.chartData = data.filter(user => user.value > 0);
    });
  }
}



