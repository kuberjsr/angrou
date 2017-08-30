import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  brand='Hello';
  menuLinks={link1:'home',link2:'about-us',link3:'contact-us'};
  menu={label1:'Home',label2:'About Us',label3:'Contact Us'};
}
