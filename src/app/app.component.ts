import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import bootstrap from '../main.server';
import { FooterComponent } from "./footer/footer.component";
import { FrontDashboardComponent } from "./front-dashboard/front-dashboard.component";
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, FrontDashboardComponent,FlexLayoutModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'version18app';
  isAdmin: boolean = true;
  showI: any ; 
  ingredientList = [
    {name: 'noodles', quantity: 1},
    {name: 'miso broth', quantity: 1},
    {name: 'egg', quantity: 2},
  ];
  onclick(){
    this.isAdmin = false;
  }
  showIF(){
    this.isAdmin = true;
    this.showI = true
  }
}
