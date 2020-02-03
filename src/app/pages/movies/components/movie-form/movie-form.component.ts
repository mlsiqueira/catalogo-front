import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss'],
  preserveWhitespaces: true
})
export class MovieFormComponent implements OnInit {

  title = '';
  formGroup: FormGroup;
  testItens = ['Primus', 'Secundos', 'Tertius', 'Quartus', 'Quintos'];
  inTheater = false;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private movieService: MoviesService) { }

  ngOnInit() {
    this.title = this.route.snapshot.data['pageTitle'];
    this.buildForm();
  }

  buildForm() {
    this.formGroup = this.formBuilder.group({
      title: null,
      desc: null,
      poster: null,
      director: null,
      genre: null,
      actors: null,
      releaseDate: null,
      runtime: null,
      inTheater: false,
    });
  }

  onSubmit() { // basta declarar em (ngSubmint)
    console.log(this.formGroup.value);
    this.movieService.createMovie(this.formGroup.value);
  }

  onReset() {
    this.formGroup.reset();
  }

  onSelectChange(event: Array<string>) {
    this.formGroup.controls.actors.setValue(event);
  }

  setInTheater() {
    this.inTheater = !this.inTheater;
    this.formGroup.controls.inTheater.setValue(this.inTheater);
  }

}
