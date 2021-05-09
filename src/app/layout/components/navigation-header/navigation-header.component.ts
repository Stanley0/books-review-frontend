import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-header',
  templateUrl: './navigation-header.component.html',
  styleUrls: ['./navigation-header.component.scss']
})
export class NavigationHeaderComponent implements OnInit {

  public get isInBookModule() {
    return this.router.url === "/" || this.router.url.includes("/books");
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
