import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { CreateMovieComponent } from './create-movie/create-movie.component';
import { UpdateMovieComponent } from './update-movie/update-movie.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

const routes: Routes = [
  {path: 'movies', component: MovieListComponent},
  {path: 'create-movie', component: CreateMovieComponent},
  {path: '', redirectTo: 'movies', pathMatch: 'full'},
  {path: 'update-movie/:id', component: UpdateMovieComponent},
  {path: 'movie-details/:id', component: MovieDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],                                                                                                                                                                                                                                                                                                          
  exports: [RouterModule]
})
export class AppRoutingModule { }
