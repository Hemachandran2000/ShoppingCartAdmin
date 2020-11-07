import { Component, OnInit } from '@angular/core';
import {
  faSearch, faBell, faChalkboard,
  faUser, faChevronDown, faUserCircle,
  faSignOutAlt, faChevronLeft, IconDefinition,
  faClipboard, faBusinessTime, faTachometerAlt
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faSearch = faSearch;
  faUser = faUser;
  faBell = faBell;
  faChalkboard = faChalkboard;
  faUserCircle = faUserCircle;
  faSignOutAlt = faSignOutAlt;
  faChevronDown = faChevronDown;
  faChevronLeft = faChevronLeft;
  faClipboard = faClipboard;
  faTachometerAlt = faTachometerAlt;
  faBusinessTime = faBusinessTime;

  _arrow: boolean = false;
  _icon: IconDefinition = faChevronLeft;

  constructor() {

  }

  ngOnInit(): void {
    this._icon = faChevronLeft;
  }

  toggle(): void {

    this._arrow = !this._arrow;
    this._icon = (this._arrow) ? faChevronDown : faChevronLeft;
  }
}
