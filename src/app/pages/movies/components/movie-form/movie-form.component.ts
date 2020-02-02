import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss']
})
export class MovieFormComponent implements OnInit {

  title = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.title = this.route.snapshot.data['pageTitle'];
  }

}
