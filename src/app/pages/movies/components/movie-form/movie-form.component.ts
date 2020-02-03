import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

import { MoviesService } from '../../../../services/movies.service';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss'],
  preserveWhitespaces: true
})
export class MovieFormComponent implements OnInit {

  title: string;
  formGroup: FormGroup;
  testItens = [
    { id: 1, name: 'Primus' },
    { id: 2, name: 'Secundos' },
    { id: 3, name: 'Tertius' },
    { id: 4, name: 'Quartus' },
    { id: 5, name: 'Quintos' }];
  inTheater = false;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private moviesService: MoviesService) { }

  ngOnInit() {
    this.title = this.route.snapshot.data['pageTitle'];
    this.buildForm();
  }

  onSubmit() {
    this.moviesService.createMovie(this.formGroup.value).subscribe(console.log)
  }

  onReset() {
    this.formGroup.reset();
  }

  onSelectChange(event: Array<string>) {
    this.formGroup.controls.actorsIds.setValue(event.map((e: any) => e.id.toString()));
  }

  setInTheater() {
    this.inTheater = !this.inTheater;
    this.formGroup.controls.inTheater.setValue(this.inTheater.toString());
  }


  private buildForm() {
    this.formGroup = this.formBuilder.group({
      title: null,
      desc: null,
      poster: null,
      directorId: null,
      genre: null,
      actorsIds: null,
      releaseDate: null,
      runtime: null,
      inTheater: false,
    });
  }

}
