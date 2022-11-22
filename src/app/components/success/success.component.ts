import { Component } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent {
	successMessage: string = "Você está mais próximo de se juntar ao time!";

}
