import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  features: any;

  constructor(
    private meta: Meta,
    private titleService: Title) {
    this.features =
      [
        {
          type: 'Bootstrap Prototype',
          description: 'Bootstrap Prototype , Badges, Buttons, Collapse, Popovers, Toasts, Tooltips',
          image: 'demo-bootstrap-prototype.png',
          link: 'bootstrap-prototype'
        }
      ];

  }

  ngOnInit(): void {
    this.titleService.setTitle('Angular MEARN Starter');
    this.meta.addTag({
      name: 'author',
      content: 'Douglas Marques'
    });
    this.meta.updateTag(
      {
        name: 'description',
        content: 'An application developed using Angular version 10.1.3 and bootstrap 5.0.0' +
          ' It applies Routing, Lazy loading, Server side rendering andProgressive Web App (PWA)'
      });
  }
}
