// ... altre importazioni in alto ...
import { Component } from '@angular/core';
import { SecondComponent } from './second-component/second-component';
import { ThirdComponent } from './third-component/third-component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SecondComponent, ThirdComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  name = 'app';
}