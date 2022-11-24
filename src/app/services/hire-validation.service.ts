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

  // getData(data: string): Observable<any> {
  //   return this.http.post<hiringInfo>(this.apiUrl, data);
  // }
  
  validateHiring(data: userInput) {
   this.http.post(environment.BASE_URL + '/v1/hired', data).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.error(err);
      }
    )
  }

 //  validateHiring(data: NgForm): void {
 //    this.getData(((data as unknown) as string).toUpperCase()).subscribe(
 //      (res: hiringInfo) => {
 //        if (res.hired == "success") {
 //          this.router.navigate(['success']);
	// }
 //      }, 
 //      (err: any) => {
 //        console.error(err);
 //        this.router.navigate(['error']);
 //      }
 //    )
 //  }
}
