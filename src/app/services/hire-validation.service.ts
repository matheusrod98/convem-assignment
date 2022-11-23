import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

import { hiringInfo } from '../models/hiringInfo.model';

@Injectable({
  providedIn: 'root'
})

export class HireValidationService {

  private apiUrl = 'https://637d5b4916c1b892ebcbf89a.mockapi.io/hiredValidation/'

  public isHired: any;

  constructor(private http:HttpClient) {}

  getData(data: NgForm): Observable<any> {
    return this.http.get<hiringInfo>(this.apiUrl.concat((((data as unknown) as string).toUpperCase())));
  }

  validateHiring(data: NgForm): void {
    this.getData(data).subscribe(
      (res: hiringInfo) => {
        this.isHired = res;
      }, 
      (err: any) => {
	console.error(err);
      }
    )
  }
}
