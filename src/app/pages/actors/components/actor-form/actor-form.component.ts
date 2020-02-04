import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ActorsService } from 'src/app/services/actors.service';
import { Actor } from 'src/app/models/types';

@Component({
  selector: 'app-actor-form',
  templateUrl: './actor-form.component.html',
  styleUrls: ['./actor-form.component.scss'],
  preserveWhitespaces: true
})
export class ActorFormComponent implements OnInit, AfterContentChecked {

  currentAction: ('new' | 'edit') = 'edit';
  pageTitle: string;
  formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private actorService: ActorsService,
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
      this.actorService.create(this.formGroup.value)
        .subscribe((m: Actor) => this.router.navigateByUrl('/actors'));
    } else {
      console.log('EDIT:', this.formGroup.value);
      this.actorService.update(id, this.formGroup.value)
        .subscribe((m: Actor) => {
          this.router.navigateByUrl('/actors');
        });
    }
  }

  onReset() {
    this.formGroup.reset();
  }


  get nameValidation() {
    const { name } = this.formGroup.controls;

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

      this.actorService.get(id).subscribe(a => {
        this.formGroup.setValue({
          name: a.name,
          bio: a.bio,
          avatar: a.avatar,
          nationality: a.nationality
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
      this.pageTitle = 'Cadastrando um novo ator:';
    } else {
      const name = this.formGroup.value.name || '';
      this.pageTitle = `Editando o ator: ${name}`;
    }
  }

}
