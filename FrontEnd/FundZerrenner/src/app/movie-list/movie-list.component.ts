import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie'
import { MovieService } from '../movie.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movies: Movie[] = [];

  constructor(private movieService: MovieService,
    private router: Router) { }

  ngOnInit(): void {
    this.getMovies();
  }

  private getMovies(){
    this.movieService.getMovieList().subscribe(data => {
      this.movies = data;      
    });
    
  }

  movieDetails(id: number){
    this.router.navigate(['movie-details', id]);
  }

  updateMovie(id: number){
    this.router.navigate(['update-movie', id]);
  }

  deleteMovie(id: number){
    this.movieService.deleteMovie(id).subscribe( (data: any) => {
      console.log(data);
      this.getMovies();
    })
  }
}