import { Component } from '@angular/core';

@Component({
  selector: 'gooey-menu',
    template: `
<nav class="menu">
  <input type="checkbox" href="#" class="menu-open" name="menu-open" id="menu-open"/>
  <label class="menu-open-button" for="menu-open">
    <span class="hamburger hamburger-1"></span>
    <span class="hamburger hamburger-2"></span>
    <span class="hamburger hamburger-3"></span>
  </label>

  <a href="#" class="menu-item"> <i class="fa fa-bar-chart"></i> </a>
  <a href="#" class="menu-item"> <i class="fa fa-plus"></i> </a>
  <a href="#" class="menu-item"> <i class="fa fa-heart"></i> </a>
  <a href="#" class="menu-item"> <i class="fa fa-envelope"></i> </a>
  <a href="#" class="menu-item"> <i class="fa fa-cog"></i> </a>
  <a href="#" class="menu-item"> <i class="fa fa-ellipsis-h"></i> </a>

</nav>
`,
  styleUrls: ['./gooey-menu.component.scss']
})
export class GooeyMenuComponent {
}
