import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { DataService } from 'src/app/services/data.service';
import { Actor } from 'src/app/models/types';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.scss']
})
export class ActorsComponent implements OnInit {

  actors$: Observable<Actor[]>;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.actors$ = this.data.listActors();
  }

}
