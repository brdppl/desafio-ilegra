import { Component, OnInit } from '@angular/core';
import { RequestApiService } from '../services/request-api.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public movies = [];
  public movieId;
  public error;
  public years = [];

  public isLoading = false;

  public filterByText;
  public filterByYear;

  constructor(
    public reqService: RequestApiService,
    public router: Router,
    public title: Title
  ) { }

  ngOnInit() {
    this.title.setTitle('Ilegra\'s Challenge - Home');
    this.listMovies();
  }

  async listMovies() {
    this.isLoading = true;
    await this.reqService.getRequest('films').subscribe((data: any) => {
      if (data.results.length) {
        this.movies = data.results;
        this.isLoading = false;

        // Array of years
        for (const x of this.movies) {
          const onlyYear = x.release_date.split('-', 1)[0];
          this.years.push(onlyYear);
        }
      } else {
        this.isLoading = false;
        this.error = 'Error loading movies';
      }
    }, (error: any) => {
      this.isLoading = false;
      console.log('erro', error);
    });
  }

  getMovieId(url) {
    const truncate = url.split('/', 6)[5];
    return this.movieId = Number(truncate);
  }

  getCover = (id) => `url('assets/img/cover${id}.jpg')`;

  openDetails(id) {
    this.router.navigate(['/movie', this.getMovieId(id)]);
  }

}
