import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(
  private route: ActivatedRoute,
  private router: Router,
) {
  this.router.navigate(['/products']);
}

}
