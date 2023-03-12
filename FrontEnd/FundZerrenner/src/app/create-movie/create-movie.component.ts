import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';
import { Observable, ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.scss']
})
export class CreateMovieComponent implements OnInit {

  movie: Movie = new Movie();
  constructor(private movieService: MovieService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveMovie(){
    this.movieService.createMovie(this.movie).subscribe( data =>{
      console.log(data);
      this.goToMovieList();
    },
    error => console.log(error));
  }

  goToMovieList(){
    this.router.navigate(['/movies']);
  }
  
  onSubmit(){
    console.log(this.movie);
    this.saveMovie();
  }
 onFileSelected(event) {
    this.convertFile(event.target.files[0]).subscribe(base64 => {
      this.movie.poster = base64;
    });
  }

  convertFile(file : File) : Observable<string> {
    const result = new ReplaySubject<string>(1);
    const reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = (event) => result.next(btoa(event.target.result.toString()));
    return result;
  }

}
