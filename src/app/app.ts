import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignalsIntro } from "./signals-intro/signals-intro";

@Component({
  selector: 'app-root',
  imports: [SignalsIntro],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('labsignals_21');
}
