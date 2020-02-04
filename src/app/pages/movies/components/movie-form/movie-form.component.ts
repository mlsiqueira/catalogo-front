import { Component, OnInit, AfterContentChecked, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { MoviesService } from '../../../../services/movies.service';
import { ActorsService } from '../../../../services/actors.service';
import { DirectorsService } from '../../../../services/directors.service';
import { Director, Actor, Movie } from 'src/app/models/types';
import { genres } from '../../../../models/genres';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss'],
  preserveWhitespaces: true
})
export class MovieFormComponent implements OnInit, AfterContentChecked {

  currentAction: ('new' | 'edit') = 'edit';
  pageTitle: string;
  formGroup: FormGroup;
  inTheater = false;
  genres = genres;

  actors$: Observable<Actor[]>;
  directors$: Observable<Director[]>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private moviesService: MoviesService,
    private actorsService: ActorsService,
    private directorsService: DirectorsService) { }

  ngOnInit() {
    this.actors$ = this.actorsService.list();
    this.directors$ = this.directorsService.list();
    this.setCurrentAction();
    this.buildForm();
    this.populateForm();
  }

  ngAfterContentChecked() {
    this.setPageTitle();
  }

  onSubmit() {
    const id = this.route.snapshot.params['id'];

    if (this.currentAction === 'new') {
      const date = this.formGroup.value.releaseDate;
      const isoDate = new Date(date).toISOString();
      this.formGroup.value.releaseDate = isoDate;

      this.moviesService.create(this.formGroup.value)
        .subscribe((m: Movie) => {
          this.router.navigateByUrl('/movies');
        });
    } else {
      this.moviesService.update(id, this.formGroup.value)
        .subscribe((m: Movie) => {
          this.router.navigateByUrl('/movies');
        });
    }
  }

  onReset() {
    this.formGroup.reset();
  }

  onSelectChange(event: Array<string>) {
    this.formGroup.controls.actorIds.setValue(event.map((e: any) => e.id.toString()));
  }

  setInTheater() {
    this.inTheater = !this.inTheater;
    this.formGroup.controls.inTheater.setValue(this.inTheater.toString());
  }


  get titleValidation() {
    const { title } = this.formGroup.controls;

    if (title.errors && title.errors.required && title.touched) {
      return true;
    }
    return false;
  }

  get directorValidation() {
    const { directorId } = this.formGroup.controls;

    if (directorId.errors && directorId.errors.required && directorId.touched) {
      return true;
    }
    return false;
  }

  get genreValidation() {
    const { genre } = this.formGroup.controls;

    if (genre.errors && genre.errors.required && genre.touched) {
      return true;
    }
    return false;
  }


  private buildForm() {
    this.formGroup = this.formBuilder.group({
      title: [null, Validators.required],
      desc: null,
      poster: null,
      directorId: [null, Validators.required],
      genre: [null, Validators.required],
      actorIds: null,
      releaseDate: new Date().toISOString(),
      runtime: null,
      inTheater: 'false',
    });
  }

  private populateForm() {
    if (this.currentAction === 'edit') {
      const id = this.route.snapshot.params['id'];
      this.moviesService.get(id).subscribe(m => {

        const ids = m.actors.map(e => e.id.toString());

        this.formGroup.setValue({
          title: m.title,
          desc: m.desc,
          poster: m.poster,
          directorId: m.director.id.toString(),
          genre: m.genre,
          actorIds: [...ids],
          releaseDate: m.releaseDate,
          runtime: m.runtime.toString(),
          inTheater: m.inTheater.toString()
        });

        this.inTheater = m.inTheater;
      });
    }
  }

  /** Verifica na URL se existe um segmento 'new' */
  private setCurrentAction() {
    if (this.route.snapshot.url[0].path === 'new') {
      this.currentAction = 'new';
    } else {
      this.currentAction = 'edit';
    }
  }

  private setPageTitle() {
    if (this.currentAction === 'new') {
      this.pageTitle = 'Cadastrando um novo filme:';
    } else {
      const movieName = this.formGroup.value.title || '';
      this.pageTitle = `Editando o filme: ${movieName}`;
    }
  }

}
