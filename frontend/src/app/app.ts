import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlaskService } from './services/flask-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // Usa un Signal invece di una variabile normale
  profilo = signal<any>({});

  constructor(private flaskService: FlaskService) {}

  ngOnInit(): void {
    // Quando il componente si avvia chiama il service
    this.flaskService.getProfilo().subscribe((dati) => {
      // Usa set() per aggiornare il Signal
      this.profilo.set(dati);
      console.log("Dati arrivati:", this.profilo());
    });
  }
}