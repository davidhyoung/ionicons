import { Component } from '@stencil/core';


@Component({
  tag: 'footer-bar',
  styleUrl: 'footer-bar.scss'
})
export class FooterBar {

  render() {
    return <footer>
      <nav>
        <ul>
          <li><a href="cheatsheet.html">Cheatsheet</a></li>
          <li><a href="https://ionicframework.com/">Ionic</a></li>
        </ul>
      </nav>
    </footer>
  }

}
