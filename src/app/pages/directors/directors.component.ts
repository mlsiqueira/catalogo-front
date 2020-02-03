import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import * as toastr from 'toastr';

import { DirectorsService } from 'src/app/services/directors.service';
import { Director } from 'src/app/models/types';

@Component({
  selector: 'app-directors',
  templateUrl: './directors.component.html',
  styleUrls: ['./directors.component.scss'],
  preserveWhitespaces: true
})
export class DirectorsComponent implements OnInit {

  directors$: Observable<Director[]>;

  constructor(private directorsService: DirectorsService) { }

  ngOnInit() {
    this.directors$ = this.directorsService.list();
  }

  deleteMovie(id: string) {
    const observer = {
      next: () => {
        this.directors$ = this.directorsService.list();
        toastr.success('Diretor excluído com sucesso.');
      },
      error: error => {
        toastr.error(error);
      }
    };

    this.directorsService.delete(id).subscribe(observer);
  }

}
