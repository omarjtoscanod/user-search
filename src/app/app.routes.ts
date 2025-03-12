import { Routes } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserScoreGuard } from './guards/user-score.guard';

export const routes: Routes = [
  { path: '', component: SearchComponent },
  { path: 'user/:username', component: UserProfileComponent, canActivate: [UserScoreGuard] }
];
