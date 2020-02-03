import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ActorsService } from 'src/app/services/actors.service';
import { Actor } from 'src/app/models/types';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.scss']
})
export class ActorsComponent implements OnInit {

  actors$: Observable<Actor[]>;

  constructor(private actorsService: ActorsService) { }

  ngOnInit() {
    this.actors$ = this.actorsService.listActors();
  }

  deleteMovie(id: string, idx: number) {
    this.actorsService.deleteActor(id).subscribe(e => {
      this.actors$ = this.actorsService.listActors();
      // this.router.navigateByUrl(`${location.href}#${idx + 1}`);
    });
  }

}
