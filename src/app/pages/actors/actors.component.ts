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

    this.actorsService.createActor({
      name: 'Mauro Maurocas',
      bio: 'Nascido lindo',
      nationality: 'Brasil',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRup4YYebniuZAlU6qZ3GRNDVQGlMHrp_WMVGB1tjGK1EKXQdfiTg&s'
    }).subscribe(console.log);

    this.actorsService.deleteActor('9').subscribe(console.log);
  }

}
