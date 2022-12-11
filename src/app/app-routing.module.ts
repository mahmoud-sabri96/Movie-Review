import { AuthGuard } from './auth.guard';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TvComponent } from './tv/tv.component';
import { PeopleComponent } from './people/people.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';

const routes: Routes = [
  { path: '', redirectTo: "login", pathMatch: 'full' },
  { path: 'register', component: RegisterComponent, title: 'Noxi: Register' },
  { path: 'login', component: LoginComponent, title: 'Noxi: Login' },

  { path: 'home', canActivate: [AuthGuard], component: HomeComponent, title: 'Noxi: Home' },
  { path: 'tv', canActivate: [AuthGuard], component: TvComponent, title: 'Noxi: Tv-Shows' },
  { path: 'people', canActivate: [AuthGuard], component: PeopleComponent, title: 'Noxi: People' },
  { path: 'moviedetails/:mediaType/:id', canActivate: [AuthGuard], component: MoviedetailsComponent, title: 'Noxi: movie-Details' },

  { path: '**', component: NotfoundComponent, title: 'Noxi: Not-Found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
