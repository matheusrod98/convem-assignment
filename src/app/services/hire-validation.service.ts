import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class HireValidationService {

  private apiUrl = 'https://637d5b4916c1b892ebcbf89a.mockapi.io/hiredValidation/'

  constructor(private http:HttpClient) { }

  hired: any;

  validateHiring(data: NgForm): any {
    console.log(((data as unknown) as string).toUpperCase());
    this.http.get(this.apiUrl.concat((((data as unknown) as string).toUpperCase()))).subscribe(
        (res)=>{
            this.hired = "success";
            console.log(res);
        },
        (err)=>{
            this.hired = "error";
            console.log('Not hired!', err)
            console.log(this.hired);
        }
    )
  }
}
