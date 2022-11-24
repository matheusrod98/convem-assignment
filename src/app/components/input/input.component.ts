import { Component } from '@angular/core';

import { HireValidationService } from '../../services/hire-validation.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})

export class InputComponent {

    constructor(public hireValidationService: HireValidationService) {}

    sendInput(data: { userInput: string }) {
        this.hireValidationService.validateHiring(data);
    }
}
