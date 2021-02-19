import { Component, OnInit } from "@angular/core";
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

export interface Tile {
  color: string;
  cols: number;
  text: string;
}

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.scss']
})

export class SystemComponent implements OnInit {

  showFiller = false;

  display1 = true;

  display;

  tiles: Tile[] = [
    { text: 'One', cols: 1, color: 'lightblue' },
    { text: 'Two', cols: 11, color: 'lightgreen' },
  ];

  constructor(private authService: AuthService, private router: Router) {

  }

  ngOnInit(): void {

  }

  logout() {
    this.authService.logout().subscribe(null, null, () => {
      this.router.navigateByUrl('/auth/login');
    }
    );
  }
}
