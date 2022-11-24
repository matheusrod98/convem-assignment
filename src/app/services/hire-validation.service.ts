import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { hiringInfo } from '../models/hiringInfo.model';
import { userInput } from '../models/userInput.model';

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class HireValidationService {

  constructor(private http:HttpClient, private router: Router) {}
  
  getData(data: userInput): Observable<any> {
    return this.http.post<hiringInfo>(environment.BASE_URL + '/v1/hired', data);
  }

  validateHiring(data: userInput) {
    this.getData(data).subscribe(
      (res: hiringInfo) => {
        if (res.hired == "success") {
          this.router.navigate(['success']);
        }
        else {
          this.router.navigate(['error']);
        }
      },
      (err: any) => {
        console.error(err);
        this.router.navigate(['error']);
      }
    )
  }
}
