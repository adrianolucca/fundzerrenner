import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.scss']
})
export class UpdateMovieComponent implements OnInit {

  id!: number;
  movie: Movie = new Movie();
  constructor(private movieService: MovieService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.movieService.getMovieById(this.id).subscribe(data => {
      this.movie = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.movieService.updateMovie(this.id, this.movie).subscribe( data =>{
      this.goToMovieList();
    }
    , error => console.log(error));
  }

  goToMovieList(){
    this.router.navigate(['/movies']);
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
