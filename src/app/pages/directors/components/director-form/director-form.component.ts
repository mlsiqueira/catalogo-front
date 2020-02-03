import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-director-form',
  templateUrl: './director-form.component.html',
  styleUrls: ['./director-form.component.scss']
})
export class DirectorFormComponent implements OnInit {

  title: string;
  formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private directorService: DirectorsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.title = this.route.snapshot.data['pageTitle'];
    this.buildForm();
  }

  buildForm() {
    this.formGroup = this.formBuilder.group({
      name: null,
      bio: null,
      avatar: null,
      nationality: null,
    });
  }

  onSubmit() {
    console.log(this.formGroup.value);
    this.directorService.createActor(this.formGroup.value)
      .subscribe(console.log);
  }

  onReset() {
    this.formGroup.reset();
  }

}
