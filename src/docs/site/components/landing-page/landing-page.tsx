import { Component } from '@stencil/core';


@Component({
  tag: 'landing-page',
  styleUrl: 'landing-page.scss'
})
export class LandingPage {

  render() {
    return <main>

      <header>
        <h1>
          The premium icon pack for <a href="http://ionicframework.com/">Ionic Framework</a>.
        </h1>

        <h2>
          100% free and open source. MIT Licensed.
        </h2>

        <share-bar></share-bar>
      </header>

      <icon-search></icon-search>

      <footer-bar></footer-bar>

    </main>
  }

}