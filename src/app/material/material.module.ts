import { NgModule } from '@angular/core';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
const MaterialComponents=[
  MatButtonModule,
  MatIconModule,
  MatGridListModule,
  MatCardModule,
  MatToolbarModule,
  FlexLayoutModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatTableModule,
  MatSidenavModule ,
  MatListModule,
  MatDividerModule,

];



@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatTableModule,
    MatSidenavModule, 
    MatListModule,
    MatDividerModule,
  ],
  exports:[
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatTableModule,
    MatSidenavModule ,
    MatListModule,
    MatDividerModule,
  
  ]
})
export class MaterialModule { }
