import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {of} from 'rxjs'
interface myData{
  message:string
  }
@Injectable({
  providedIn: 'root'
})
export class TableDataService {
  private tableData = [
  {
    customerId:1,
    firstName:"katende",
    lastName:"Nicholas",
    phone:"0759983853",
    stage:'Application',
    product:"Rice"
  },
  {
    customerId:2,
    firstName:"james",
    lastName:"Nicholas",
    phone:"0759983853",
    stage:"Credit",
    product:"Matooke"
  },
  
  {
    customerId:3,
    firstName:"Ssemakula",
    lastName:"jona",
    phone:"0759983853",
    stage:'regional',
    product:"beans"
  },
  
  {
    customerId:4,
    firstName:"kakembo",
    lastName:"Thio",
    phone:"0759983853",
    stage:'headoffice',
    product:"Rice"
  },
  
  {
    customerId:5,
    firstName:"katende",
    lastName:"Nicholas",
    phone:"0759983853",
    stage:'Application',
    product:"Rice"
  },
  {
    customerId:6,
    firstName:"katende",
    lastName:"Peter",
    phone:"0759983853",
    stage:'headexit',
    product:"Rice"
  }
  ]

  getAllCustomers(){
    return of(this.tableData)
  }
}
