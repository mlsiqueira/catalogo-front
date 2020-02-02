import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss']
})
export class MovieFormComponent implements OnInit {

  title = '';
  formGroup;
  itensTeste = ['Primus', 'Secundos', 'Tertius', 'Quartus']

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder) { }

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
    console.log(this.formGroup);
  }

  onReset() {
    this.formGroup.reset();
  }

}
