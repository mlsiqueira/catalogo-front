import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import * as toastr from 'toastr';

import { ActorsService } from 'src/app/services/actors.service';
import { Actor } from 'src/app/models/types';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.scss'],
  preserveWhitespaces: true
})
export class ActorsComponent implements OnInit {

  actors$: Observable<Actor[]>;

  constructor(private actorsService: ActorsService) { }

  ngOnInit() {
    this.actors$ = this.actorsService.list();
  }

  deleteMovie(id: string, idx: number) {
    const observer = {
      next: () => {
        this.actors$ = this.actorsService.list();
        toastr.success('Ator excluído com sucesso.');
      },
      error: error => {
        toastr.error(error);
      }
    };

    this.actorsService.delete(id).subscribe(observer);
  }

}
