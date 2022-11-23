import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { hiringInfo } from '../models/hiringInfo.model';

@Injectable({
  providedIn: 'root'
})

export class HireValidationService {

  private apiUrl = 'https://637d5b4916c1b892ebcbf89a.mockapi.io/hiredValidation/'

  constructor(private http:HttpClient, private router: Router) {}

  getData(data: string): Observable<any> {
    return this.http.get<hiringInfo>(this.apiUrl.concat(data));
  }

  validateHiring(data: NgForm): void {
    this.getData(((data as unknown) as string).toUpperCase()).subscribe(
      (res: hiringInfo) => {
        if (res.hired == "success") {
          this.router.navigate(['success']);
	}
      }, 
      (err: any) => {
	console.error(err);
	this.router.navigate(['error']);
      }
    )
  }
}
