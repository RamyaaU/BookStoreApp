import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  header:FormGroup;
  list
  bag

  constructor(public route: Router, private fb:FormBuilder) {

    this.header=fb.group({
      dataa:[""]
    })
  }

  ngOnInit(){

  }

  cartItem:number = 0;

  gotoCart(){
    this.route.navigate(['cart'])
  }

}
