import { Component } from '@stencil/core';


@Component({
  tag: 'share-bar',
  styleUrl: 'share-bar.scss'
})
export class ShareBar {

  render() {
    return <div>
      <span class="twitter-share">
        <a href="https://twitter.com/share" class="twitter-share-button" data-via="ionicframework" data-hashtags="icons,webdev,mobile" data-related="benjsperry,maxlynch,adamdbradley,drifty">Tweet</a>
      </span>
      <span class="twitter-follow">
        <a href="https://twitter.com/ionicframework" class="twitter-follow-button">Follow @ionicframework</a>
      </span>
      <span class="github-star">
        <iframe src="http://ghbtns.com/github-btn.html?user=ionic-team&amp;repo=ionicons&amp;type=watch&amp;count=true"
        allowtransparency="true" frameborder="0" scrolling="0" width="110" height="20"></iframe>
      </span>
    </div>
  }

}
