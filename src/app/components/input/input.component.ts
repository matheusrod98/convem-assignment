import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'

import { HireValidationService } from '../../services/hire-validation.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

    constructor(private hireValidationService: HireValidationService) {}

    sendInput(data:NgForm) {
        this.hireValidationService.validateHiring(data);
    }
}
