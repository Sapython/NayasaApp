import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-f-new-pass',
  templateUrl: './f-new-pass.page.html',
  styleUrls: ['./f-new-pass.page.scss'],
})
export class FNewPassPage implements OnInit {

  constructor() { }
  pop: boolean = false;


  onclicked() {
    this.pop = true;

  }
  home() {
    this.pop = false;

  }
  ngOnInit() {
  }

}
