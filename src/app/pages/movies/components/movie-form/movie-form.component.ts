import { Component, OnInit, AfterContentChecked, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

import { MoviesService } from '../../../../services/movies.service';
import { ActorsService } from '../../../../services/actors.service';
import { DirectorsService } from '../../../../services/directors.service';
import { Director, Actor, Movie } from 'src/app/models/types';
import { genders } from '../../../../models/genders';


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
  submittingForm = false;  // estado para 'travar' o sistema enquanto envia
  inTheater = false;
  selected = [];
  genders = genders;

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
    this.pageTitle = this.route.snapshot.data['pageTitle'];
    this.actors$ = this.actorsService.listActors();
    this.directors$ = this.directorsService.listDirectors();
    this.setCurrentAction();
    this.buildForm();
    this.populateForm();
  }

  ngAfterContentChecked() {
    this.setPageTitle();
  }

  onSubmit() {
    this.moviesService.create(this.formGroup.value)
      .subscribe(m => this.redirectAndReload(m));
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


  private buildForm() {
    this.formGroup = this.formBuilder.group({
      title: null,
      desc: null,
      poster: null,
      directorId: null,
      genre: null,
      actorIds: null,
      releaseDate: null,
      runtime: null,
      inTheater: false,
    });
  }

  private populateForm() {
    if (this.currentAction === 'edit') {
      const id = this.route.snapshot.params['id'];
      this.moviesService.get(id).subscribe(m => {
        this.formGroup.setValue({
          title: m.title,
          desc: m.desc,
          poster: m.poster,
          directorId: m.director.id,
          genre: m.genre,
          actorIds: m.actors.map(e => e.id),
          releaseDate: m.releaseDate,
          runtime: m.runtime,
          inTheater: m.inTheater,
        });

        console.log(this.formGroup.value);

        this.selected = m.actors.map(e => e.id);
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
      this.pageTitle = 'Cadastro de um novo filme';
    } else {
      const movieName = this.formGroup.value.title || ''; // para evitar de escrever null
      this.pageTitle = `Editando o filme: ${movieName}`;
    }
  }

  /**
   * Faz o seguinte redirecionamento (quando salvar a nova categoria):
   * url/categories/new -> url/categories/ -> url/categories/:id/edit
   */
  private redirectAndReload(movie: Movie) {
    // navigateByUrl retorna uma Promessa
    this.router.navigateByUrl('movies',     // navego primeiro para movies
      { skipLocationChange: true })         // não salvo no histórico
      .then(                                // quando terminar de navegar...
        () => this.router.navigate(['movies', movie.id, 'edit']));
  }

}
