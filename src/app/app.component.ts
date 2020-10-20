import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {TableDataService} from './service/tableData.service';
import * as XLSX from 'xlsx';
import { ngxCsv } from 'ngx-csv/ngx-csv';
import * as jsPDF from 'jspdf';
import html2Canvas from 'html2Canvas';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  customerData = [];
  filteredCustomerData = [];
  fileName = 'CustomerSheet.xlsx';
 private search_text:string;
 @ViewChild('tableRef')tableRef:ElementRef;

  constructor(private tableData:TableDataService){}
 
  ngOnInit(){
    this.tableData.getAllCustomers().subscribe(data=>{
      this.customerData = data;
      this.filteredCustomerData = this.customerData
    })
  }
  checkTableLength(array:Array<any>):boolean{
    return array.length?true:false;
  }

  getSearchTerm(event){
    console.log(event.target.value)
    if(event.target.value === ""){
      this.filteredCustomerData = this.customerData
    }
    else{
      this.search_text = event.target.value;
      this.filteredCustomerData =  this.filterCustomerData(this.search_text)
    }

  }

   filterCustomerData(searchTerm:string){
    if(searchTerm)
    return this.filteredCustomerData.filter(
      customer=>
      customer.firstName.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
      ||customer.lastName.toLowerCase().indexOf(searchTerm.toLowerCase())!==  -1
      ||customer.stage.toLowerCase().indexOf(searchTerm.toLowerCase())!== -1
      ||customer.product.toLowerCase().indexOf(searchTerm.toLowerCase())!==-1
      )

  }

  exportToExcel(){
    //pass the table to worksheet
    const element =  document.getElementById('export-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    //create a workbook and add work sheet
    const wb:XLSX.WorkBook = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet 1');

    //save fileName 
    XLSX.writeFile(wb, this.fileName)
  }

  exportAsCSV(){
    //const keys = Object.keys(this.filterCustomerData[0]);
    //console.log(keys)
     var options = { 
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: true, 
    showTitle: false,
    useBom: true,
    noDownload: false,
    headers: ['CustomerId', 'firstName', 'lastName', 'Phone', 'Stage', 'Product']
  };
    //new ngxCsv(this.filteredCustomerData, ‘CustomerData’)
    new ngxCsv(this.filteredCustomerData ,'CustomerData', options)

  }
  //downloadpdf
  downLoadPDF(){
     const element =  document.getElementById('export-table');
     // html2Canvas(element).then((canvas)=>{
     //  // console.log(canvas)
     //   var imgData = canvas.toDataURL('image/png')
     //   var doc = new jsPDF()
     //   doc.addImage(imgData,0, 0, 208,500)
     //   doc.save('nico.pdf')
     // })

  }

}
