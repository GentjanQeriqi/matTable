import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { TableComponent } from './table.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { TableRoutingModule } from './table-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TableRoutingModule,
    MatTableModule,
    MatIconModule
  ],
  declarations: [TableComponent]
})
export class TableModule { }

