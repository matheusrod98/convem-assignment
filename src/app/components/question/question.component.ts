import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'


import { HireValidationService } from '../../services/hire-validation.service';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})

export class QuestionComponent {

    res: any;
    constructor(public hireValidationService: HireValidationService) {}

    sendInput(data:NgForm) {
        this.hireValidationService.validateHiring(data);
    }
}
