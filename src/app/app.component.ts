import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css', 
})
export class AppComponent {
  city = 'Chile';
}
