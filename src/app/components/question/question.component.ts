import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router';

import { InputComponent } from './../input/input.component';

import { HireValidationService } from '../../services/hire-validation.service';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})

export class QuestionComponent {

    constructor(public hireValidationService: HireValidationService, private router: Router) {}

    sendInput(data:NgForm) {
        this.hireValidationService.validateHiring(data);
        console.log(this.hireValidationService.isHired);
        if (this.hireValidationService.isHired == true) {
            this.router.navigate(['success']);
        }
        else {
            this.router.navigate(['error']);
        }

    }
}
