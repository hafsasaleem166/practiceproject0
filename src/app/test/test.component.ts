import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

   public name="Hafsa ";
   public surname=" Saleem";
   public siteurl=window.location.href;
   public myid="testId";
   public isdisabled=false;
   public tableheaddata="Employee Data";
   firstname:string="Hashir";
   lastname:string="Waqas";
   col:number=2;
   classapply:string='boldclass italicclass';
   public italic="italicclass";
   public hasError=true;
   public nothasError=false;
  public itsobjmessage={
    "boldclass":!this.hasError,
    "italicclass":this.nothasError,
    "colorclass":this.hasError
  }
  public highlight ="orange";



  constructor() { }

  ngOnInit(): void {
  }
  //Making Methods to perform actions on the object

  greeting()
  {
    return "Heloo "+this.name+this.surname;
  }


}
