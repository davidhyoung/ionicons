import { Component, Listen, State } from '@stencil/core';


@Component({
  tag: 'icon-search',
  styleUrl: 'icon-search.scss',
  scoped: true
})
export class LandingPage {

  @State() hasFocus = false;

  @State() icons: any[] = [];

  @Listen('keyup')
  keyup(ev: KeyboardEvent) {
    console.log('keyup', ev);
  }

  @Listen('focusin')
  focusin() {
    this.hasFocus = true;
  }

  @Listen('focusout')
  focusout() {
    this.hasFocus = false;
  }

  componentWillLoad() {
    return Promise.resolve().then(() => {
      this.icons = ['star', 'home'];
    });
  }

  render() {
    return <div class="icon-search">

      <div class="search">
        <input type="search" placeholder="Search Icons"/>
      </div>

      <div class="results">

        {this.icons.map(icon => {
          return <div class="icon">
            <ion-icon name={icon}/>
          </div>
        })}

      </div>

    </div>
  }

}