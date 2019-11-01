import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestApiService } from '../services/request-api.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  public movieId;
  public movie = {
    episode_id: null,
    title: '',
    release_date: '',
    director: '',
    producer: '',
    opening_crawl: ''
  };
  public error;

  public characters = [];
  public planets = [];
  public species = [];
  public starships = [];
  public vehicles = [];

  public isLoading = false;

  constructor(
    public route: ActivatedRoute,
    public reqService: RequestApiService,
    public title: Title
  ) {
    this.route.params.subscribe(data => {
      this.movieId = data.id;
    });
  }

  ngOnInit() {
    this.listMovie();
  }

  async listMovie() {
    this.isLoading = true;
    await this.reqService.getRequest(`films/${this.movieId}`).subscribe((data: any) => {
      if (data) {
        this.movie = data;
        this.isLoading = false;
        this.title.setTitle(`Star Wars: ${this.movie.title}`);

        this.doFor(data.characters, 'people', this.characters);
        this.doFor(data.planets, 'planets', this.planets);
        this.doFor(data.species, 'species', this.species);
        this.doFor(data.starships, 'starships', this.starships);
        this.doFor(data.vehicles, 'vehicles', this.vehicles);
      } else {
        this.isLoading = false;
        this.error = 'Error loading movie details';
      }
    }, (error: any) => {
      this.isLoading = false;
      console.log('erro', error);
    });
  }

  getBanner = (id) => `url('assets/img/banner${id}.jpg')`;

  getCover = (id) => `assets/img/cover${id}.jpg`;

  doFor(arr, endpoint, newArr) {
    for (const key of arr) {
      const getId = Number(key.split('/', 6)[5]);
      this.reqService.getRequest(`${endpoint}/${getId}?${endpoint}`).subscribe((data: any) => {
        newArr.push(data);
      });
    }
    return newArr;
  }

}
