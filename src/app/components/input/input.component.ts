import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router';

import { HireValidationService } from '../../services/hire-validation.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})

export class InputComponent {

    constructor(public hireValidationService: HireValidationService, private router: Router) {}

    sendInput(data:NgForm) {
        this.hireValidationService.validateHiring(data);
    }
}
