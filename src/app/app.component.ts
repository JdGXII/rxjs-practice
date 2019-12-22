import { Component, OnInit } from '@angular/core';
import { fromEvent} from 'rxjs'; 
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  nombre;
   ngOnInit(){
  const input = document.querySelector('input');
  const assignName = (userInput) => {
	this.nombre = userInput.target.value;
 };
  const source = fromEvent(input,'keyup').pipe(debounceTime(2000));
  source.subscribe(assignName);
   }
}
