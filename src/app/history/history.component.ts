import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  imagename: string;
  time:string
}

const ELEMENT_DATA: PeriodicElement[] = [
  {imagename: 'yes', time: '8:AM'},
  {  imagename: 'yes',  time: '8.00 AM'},
  { imagename:'yes', time: '8.00 AM'},
]

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  displayedColumns: string[] = ['imagename', 'time'];
  dataSource = ELEMENT_DATA;
  panelOpenState = false;
  username:string="Ahsan";
  constructor() { }

  ngOnInit(): void {
  }

}
