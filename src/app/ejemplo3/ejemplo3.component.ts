import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo3',
  templateUrl: './ejemplo3.component.html',
  styleUrls: ['./ejemplo3.component.scss']
})
export class Ejemplo3Component implements OnInit {

  real1: boolean;
  real2: boolean;
  real3 : boolean;
  constructor() {

  }

  ngOnInit() {
    this.real1 = true;
    this.real2 = false;
    this.real3 = true;
  }

 // public function cambiarReal(caso){
 //   switch (caso){
 //       case 1:
 //         this.real1 = true;
 //         this.real2 = false;
 //         break
 //
 //       case 2:
 //         this.real1 = false;
 //         this.real2 = true;
 //         break
 //   }
 //
 // };


}
