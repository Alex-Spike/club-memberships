import { Component } from '@angular/core';import { HomeService } from './home.service'@Component({  moduleId: module.id,  selector: 'home',  templateUrl: 'home.component.html',  providers: [ HomeService ]})export class HomeComponent {  items;  constructor(private homeService: HomeService) {    this.getItems();  }  getItems() {    this.items = this.homeService.getItems();  }}