import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent implements OnInit {

  powers = ['Really Smart', 'Super Flexible',
  'Super Hot', 'Weather Changer'];

  model = new Hero(17, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;
  
  onSubmit() { 
    this.submitted = true; 
  }
  
  
  constructor() { }
  
  ngOnInit(): void {
  }

  newHero(){
    this.model=new Hero(40,'','')
  }

}
