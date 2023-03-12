import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private baseURL = "https://fundacaozerrenner.azurewebsites.net/api/FundZerrenner";

  constructor(private httpClient: HttpClient) { }
  
  getMovieList(): Observable<Movie[]>{
    return this.httpClient.get<Movie[]>(`${this.baseURL}`);
  }

  createMovie(movie: Movie): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, movie);
  }

  getMovieById(id: number): Observable<Movie>{
    return this.httpClient.get<Movie>(`${this.baseURL}/${id}`);
  }

  updateMovie(id: number, movie: Movie): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, movie);
  }

  deleteMovie(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}