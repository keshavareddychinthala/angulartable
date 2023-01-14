import { Component,ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import DataTables from 'datatables.net-dt';
import 'datatables.net';
import * as $ from 'jquery';
window['jQuery'] = window['$'] = $; 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'angular-table';
//   table = new DataTables('#example', {
//     // options
// });
  name:any="demo";
  dataTable: any;
  clients: any[]=[];
constructor(private http: HttpClient,private chRef: ChangeDetectorRef){
  
}
ngOnInit(){
  const table: any = $('table');

  this.dataTable = table.DataTable({select: true});
  // this.dataTable
  this.dataTable.on('onRowSelect',
  (e:any, dt :any, type :any, indexes:number[]) =>(
    console.log(e)
  ));
  
  this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(res=>{
    console.log(res,"res...")
    // this.dataTable.table.
    this.clients = res as any[];
  })
/*  this.dataTable.on('onRowSelect',
 (e, dt, type, indexes) => this.onRowSelect(indexes)); */
}
}
