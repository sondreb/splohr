import { Component, OnInit } from '@angular/core';
import { IndexerService } from '../services/indexer';
import { interval } from 'rxjs';
import { map, startWith, switchMap } from 'rxjs/operators'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public peers: [];
  public stats: [];

  constructor(private indexer: IndexerService) { }

  ngOnInit() {

    this.indexer.peers().subscribe((data: any) => {
      console.log(data);
      this.peers = data;
    });;

    this.indexer.stats().subscribe((data: any) => {
      console.log(data);
      this.stats = data;
    });
  }
}
