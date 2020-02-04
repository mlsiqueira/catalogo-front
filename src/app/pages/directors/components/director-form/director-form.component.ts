import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { DirectorsService } from 'src/app/services/directors.service';
import { Director } from 'src/app/models/types';

@Component({
  selector: 'app-director-form',
  templateUrl: './director-form.component.html',
  styleUrls: ['./director-form.component.scss'],
  preserveWhitespaces: true
})
export class DirectorFormComponent implements OnInit, AfterContentChecked {

  currentAction: ('new' | 'edit') = 'edit';
  pageTitle: string;
  formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private directorService: DirectorsService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.buildForm();
    this.setCurrentAction();
    this.populateForm();
  }

  ngAfterContentChecked() {
    this.setPageTitle();
  }

  onSubmit() {
    const id = this.route.snapshot.params['id'];

    if (this.currentAction === 'new') {
      console.log('NEW:', this.formGroup.value);
      this.directorService.create(this.formGroup.value)
        .subscribe((m: Director) => this.router.navigateByUrl('/directors'));
    } else {
      console.log('EDIT:', this.formGroup.value);
      this.directorService.update(id, this.formGroup.value)
        .subscribe((m: Director) => {
          this.router.navigateByUrl('/directors');
        });
    }
  }

  onReset() {
    this.formGroup.reset();
  }


  get nameValidation() {
    const { name } = this.formGroup.controls;
    console.log(name)

    if (name.errors && name.errors.required && name.touched) {
      return true;
    }
    return false;
  }


  private buildForm() {
    this.formGroup = this.formBuilder.group({
      name: [null, Validators.required],
      bio: null,
      avatar: null,
      nationality: null,
    });
  }

  private populateForm() {
    if (this.currentAction === 'edit') {
      const id = this.route.snapshot.params['id'];

      this.directorService.get(id).subscribe(d => {
        this.formGroup.setValue({
          name: d.name,
          bio: d.bio,
          avatar: d.avatar,
          nationality: d.nationality
        });
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
      this.pageTitle = 'Cadastrando um novo diretor:';
    } else {
      const name = this.formGroup.value.name || '';
      this.pageTitle = `Editando o diretor: ${name}`;
    }
  }

}
