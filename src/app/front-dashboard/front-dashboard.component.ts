import { Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { AsyncPipe } from '@angular/common';
@Component({
  selector: 'app-front-dashboard',
  standalone: true,
  imports: [FlexLayoutModule,MatFormFieldModule,
     MatInputModule,
     MatAutocompleteModule,
     AsyncPipe
  ],
  templateUrl: './front-dashboard.component.html',
  styleUrl: './front-dashboard.component.css'
})
export class FrontDashboardComponent {
  options: string[] = ['One', 'Two', 'Three'];
}
