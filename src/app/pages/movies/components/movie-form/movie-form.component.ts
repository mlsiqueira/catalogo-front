import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss'],
  preserveWhitespaces: true
})
export class MovieFormComponent implements OnInit {

  title = '';
  formGroup;
  testItens = ['Primus', 'Secundos', 'Tertius', 'Quartus', 'Quintos'];
  inTheater = false;

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
    console.log(this.formGroup.value);
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
