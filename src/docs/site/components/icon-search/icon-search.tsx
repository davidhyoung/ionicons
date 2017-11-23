import { Component, Listen, State } from '@stencil/core';


@Component({
  tag: 'icon-search',
  styleUrl: 'icon-search.scss',
  scoped: true
})
export class LandingPage {

  @State() data: IconData[] = [];

  @State() search: string = '';

  @Listen('keyup')
  keyup(ev: KeyboardEvent) {
    this.search = (ev.target as HTMLInputElement).value;
  }

  componentWillLoad() {
    return fetch('/build/data.json').then(rsp => {
      rsp.json().then(d => this.data = d.icons);
    });
  }

  filterIcons() {
    const search = this.search.trim().toLowerCase();
    const icons: string[] = [];

    this.data.forEach(iconData => {
      if (search === '' || iconData.tags.some(t => t.indexOf(search) > -1)) {
        iconData.icons.forEach(iconName => {
          icons.push(iconName);
        });
      }
    });

    return icons;
  }

  render() {
    return <div class="icon-search">

      <div class="search">
        <input type="search" placeholder="Search Icons"/>
      </div>

      <div class="results">

        {this.filterIcons().map(icon => {
          return <div class="icon">
            <ion-icon name={icon}/>
          </div>
        })}

      </div>

    </div>
  }

}


interface IconData {
  icons: string[];
  tags: string[];
}
