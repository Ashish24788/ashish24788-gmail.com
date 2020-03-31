import { Component, OnInit } from '@angular/core';
import { BaseService } from '../core/base.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  url = 'https://pokeapi.co/api/v2/pokemon/?limit=30&offset=0';
  listData: any;
  jsonData: any;
  prevBtn: boolean;
  nextBtn: boolean;
  navigateToDetail = false;

  constructor(private baseService: BaseService, private router: Router) {
    this.navigateToDetail = this.router.url === '/home';
   }

  ngOnInit() {
    this.baseService.get(this.url).subscribe(
      res => {
        this.jsonData = res;
        this.listData = this.jsonData.results;
        console.log('HTTP response', res);
      },
      err => console.log('HTTP Error', err),
      () => console.log('HTTP request completed.')
    );
  }

  showNextPrevData() {
    if (this.jsonData.previous) {
      this.prevBtn = true;
      this.nextBtn = false;
      this.baseService.get(this.jsonData.previous).subscribe(
        res => {
          this.jsonData = res;
          this.listData = this.jsonData.results;
          console.log('HTTP response', res);
        },
        err => console.log('HTTP Error', err),
        () => console.log('HTTP request completed.')
      );
    }
    else if (this.jsonData.next) {
      this.prevBtn = false;
      this.nextBtn = true;
      this.baseService.get(this.jsonData.next).subscribe(
        res => {
          this.jsonData = res;
          this.listData = this.jsonData.results;
          console.log('HTTP response', res);
        },
        err => console.log('HTTP Error', err),
        () => console.log('HTTP request completed.')
      );
    }
  }

}
