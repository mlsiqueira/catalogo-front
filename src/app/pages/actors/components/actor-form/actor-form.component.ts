import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { ActorsService } from 'src/app/services/actors.service';

@Component({
  selector: 'app-actor-form',
  templateUrl: './actor-form.component.html',
  styleUrls: ['./actor-form.component.scss'],
  preserveWhitespaces: true
})
export class ActorFormComponent implements OnInit {

  formGroup: FormGroup;
  title: string;

  constructor(
    private formBuilder: FormBuilder,
    private actorService: ActorsService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.title = this.route.snapshot.data['pageTitle'];
    this.buildForm();
  }

  onSubmit() {
    console.log(this.formGroup.value);
    this.actorService.create(this.formGroup.value)
      .subscribe(console.log);
  }

  onReset() {
    this.formGroup.reset();
  }


  private buildForm() {
    this.formGroup = this.formBuilder.group({
      name: null,
      bio: null,
      avatar: null,
      nationality: null,
    });
  }

}
