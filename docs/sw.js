importScripts('workbox-sw.prod.v2.1.1.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "assets/favicon.ico",
    "revision": "7aa40cf9dba1fd293fc8bd890106acce"
  },
  {
    "url": "build/data.json",
    "revision": "661f2bada0cc38ded351c9cd4692d079"
  },
  {
    "url": "build/docssite.js",
    "revision": "8f1271f4be5619baaa74e8871aa2a5d8"
  },
  {
    "url": "build/docssite/docssite.3ohs8qkj.js",
    "revision": "3d768a83d5bc4dfb4005d15f6d25a3e4"
  },
  {
    "url": "build/docssite/docssite.9qasde7u.js",
    "revision": "0ecd649ff1b8df931c461cac30ad3949"
  },
  {
    "url": "build/docssite/docssite.e926bixn.js",
    "revision": "44d2484c72ccd30c128b9769cd18dda2"
  },
  {
    "url": "build/docssite/docssite.registry.json",
    "revision": "c4fd06a64b89ea80af4243118d55d36e"
  },
  {
    "url": "build/docssite/k43zacyc.js",
    "revision": "2bcfacc0cab3279019a0c7e6a6f8970d"
  },
  {
    "url": "build/docssite/kkji7jdg.js",
    "revision": "7f847eda536ca3a179d49c320b859a26"
  },
  {
    "url": "build/docssite/owcp4xz7.js",
    "revision": "dfc58e3169ba2a292b7b6075e8414c49"
  },
  {
    "url": "build/docssite/qlkdaov7.js",
    "revision": "b66833671cf2a1db94859c8b549295a8"
  },
  {
    "url": "build/docssite/r8tgxnhs.js",
    "revision": "4a32e8e531cafcc61b6af4eeaa8f5550"
  },
  {
    "url": "build/docssite/uehmi4ed.js",
    "revision": "b9bd5ab6ef7ad56f54a41444b73cf870"
  },
  {
    "url": "build/docssite/uydchyoc.js",
    "revision": "002a98e2f996fa59306285791f2ce64e"
  },
  {
    "url": "build/docssite/v0gnp8pw.js",
    "revision": "084c6105c348233791765c987d568996"
  },
  {
    "url": "build/ionicons.js",
    "revision": "75227460b2e87ac387a75c26b09d336c"
  },
  {
    "url": "build/ionicons/ionicons.0nygxack.js",
    "revision": "7b09c2ccb9b84b10391e2837be02c03b"
  },
  {
    "url": "build/ionicons/ionicons.sknrgdyl.js",
    "revision": "b3c0bd3837666b0f484c47fedec0e480"
  },
  {
    "url": "build/ionicons/ionicons.ub0qcfpx.js",
    "revision": "9223fa2d9bd6145315b35ecca4a140cb"
  },
  {
    "url": "build/ionicons/iufqx8rh.js",
    "revision": "64f70035b44bb6740502528f5302dc17"
  },
  {
    "url": "build/ionicons/svg/ios-add-circle-outline.js",
    "revision": "255aacffa1c4dfe08c3c9f7dccf198b6"
  },
  {
    "url": "build/ionicons/svg/ios-add-circle.js",
    "revision": "0561960f8ea2b7ddca7521f6216bdcf5"
  },
  {
    "url": "build/ionicons/svg/ios-add.js",
    "revision": "8744656f975317f7fb3cf36130e50a49"
  },
  {
    "url": "build/ionicons/svg/ios-alarm.js",
    "revision": "f66b3a3d881e41f25e6b95d85b0ceada"
  },
  {
    "url": "build/ionicons/svg/ios-albums.js",
    "revision": "a7fc9b915f6eb8fa974e3f644ad93da9"
  },
  {
    "url": "build/ionicons/svg/ios-alert.js",
    "revision": "46084ae24e7a3f40a654bbf74a4c8141"
  },
  {
    "url": "build/ionicons/svg/ios-american-football.js",
    "revision": "88ae1ccdaf8543be7aa7bf8bcab08580"
  },
  {
    "url": "build/ionicons/svg/ios-analytics.js",
    "revision": "71341b734de28192b007b15293f38d72"
  },
  {
    "url": "build/ionicons/svg/ios-aperture.js",
    "revision": "e0f1bb4d9c3847ae891e34f5f662808c"
  },
  {
    "url": "build/ionicons/svg/ios-apps.js",
    "revision": "52741e5ff7f4e53e9f6881850b4b089b"
  },
  {
    "url": "build/ionicons/svg/ios-appstore.js",
    "revision": "134016446a5bfdd1803135ca19d37628"
  },
  {
    "url": "build/ionicons/svg/ios-archive.js",
    "revision": "c44a9e140e05d199644e5659df7b2b37"
  },
  {
    "url": "build/ionicons/svg/ios-arrow-back.js",
    "revision": "328ee92de690430f1827d0d6c9efcae5"
  },
  {
    "url": "build/ionicons/svg/ios-arrow-down.js",
    "revision": "5bf21f4570772cbcc62d8587f6140abb"
  },
  {
    "url": "build/ionicons/svg/ios-arrow-dropdown.js",
    "revision": "74058bf163d66da08848d1acb293d2a1"
  },
  {
    "url": "build/ionicons/svg/ios-arrow-dropleft.js",
    "revision": "8954f0fe7ce64b8614af074cffb9b5ee"
  },
  {
    "url": "build/ionicons/svg/ios-arrow-dropright.js",
    "revision": "237873637eabbf183ecaa5c42e811e11"
  },
  {
    "url": "build/ionicons/svg/ios-arrow-dropup.js",
    "revision": "164e180ad3d9197380fa275cb3788426"
  },
  {
    "url": "build/ionicons/svg/ios-arrow-forward.js",
    "revision": "1f4b5fbb6f8ccc307ffcf62e66fe5e66"
  },
  {
    "url": "build/ionicons/svg/ios-arrow-round-back.js",
    "revision": "5ac02856c3c500ff429299a1c5e60c34"
  },
  {
    "url": "build/ionicons/svg/ios-arrow-round-down.js",
    "revision": "629c86b217d62077df1bee9bb590a43e"
  },
  {
    "url": "build/ionicons/svg/ios-arrow-round-forward.js",
    "revision": "4c9869128e70c228f0acfa9f0d65cdf3"
  },
  {
    "url": "build/ionicons/svg/ios-arrow-round-up.js",
    "revision": "b563866d299e329e81aedcb6ce005b21"
  },
  {
    "url": "build/ionicons/svg/ios-arrow-up.js",
    "revision": "389c061036744d1b4a72b749b7feace2"
  },
  {
    "url": "build/ionicons/svg/ios-at.js",
    "revision": "49f3f3741c18778b38f008fc67dde51b"
  },
  {
    "url": "build/ionicons/svg/ios-attach.js",
    "revision": "1cd7e86266887374bce81acd3b43cf5a"
  },
  {
    "url": "build/ionicons/svg/ios-backspace.js",
    "revision": "9fc8008de4077fa475ba5159b66b3751"
  },
  {
    "url": "build/ionicons/svg/ios-barcode.js",
    "revision": "6cc16548e86fea9cb5f708c6f7d044b8"
  },
  {
    "url": "build/ionicons/svg/ios-baseball.js",
    "revision": "e482140adbefbf5afc9513fe9520caae"
  },
  {
    "url": "build/ionicons/svg/ios-basket.js",
    "revision": "7fcc0d3319a80f6ee1eb7ad4e8ca8c76"
  },
  {
    "url": "build/ionicons/svg/ios-basketball.js",
    "revision": "00889f6b01e2a8a3f33c981d824f3d98"
  },
  {
    "url": "build/ionicons/svg/ios-battery-charging.js",
    "revision": "8753bbe49dccd123bbc0441ef2217fb0"
  },
  {
    "url": "build/ionicons/svg/ios-battery-dead.js",
    "revision": "e8519c6ad90d16fed011a8641a194cf5"
  },
  {
    "url": "build/ionicons/svg/ios-battery-full.js",
    "revision": "4d586e575e48e0a3ce9de3d2ba2d382c"
  },
  {
    "url": "build/ionicons/svg/ios-beaker.js",
    "revision": "c0f9e60b9507251fd83cfc19fb948043"
  },
  {
    "url": "build/ionicons/svg/ios-beer.js",
    "revision": "9b841d8124fc2a3421813e2d1e159273"
  },
  {
    "url": "build/ionicons/svg/ios-bicycle.js",
    "revision": "8d3a7ba7d71e86d839522be1fde0e140"
  },
  {
    "url": "build/ionicons/svg/ios-bluetooth.js",
    "revision": "72923ed1dffe6cddc8c39108a4b7dae0"
  },
  {
    "url": "build/ionicons/svg/ios-boat.js",
    "revision": "7d11a462778192e0f0ed9dfff7f180b8"
  },
  {
    "url": "build/ionicons/svg/ios-body.js",
    "revision": "3baded60e0faa742eddeb4ab14da32dc"
  },
  {
    "url": "build/ionicons/svg/ios-bonfire.js",
    "revision": "1106983cb4f748b9c078373a842e586a"
  },
  {
    "url": "build/ionicons/svg/ios-book.js",
    "revision": "7b6d74414fd90ea8f030f92585a7793d"
  },
  {
    "url": "build/ionicons/svg/ios-bookmark.js",
    "revision": "c62d3088ad861c8b1ae938fa58c123a1"
  },
  {
    "url": "build/ionicons/svg/ios-bookmarks.js",
    "revision": "0ea1c7137874b4e68124502ae46a4da5"
  },
  {
    "url": "build/ionicons/svg/ios-bowtie.js",
    "revision": "d26997230923324649e238e6733b4abc"
  },
  {
    "url": "build/ionicons/svg/ios-briefcase.js",
    "revision": "1650112e998bfdcf141ac69070c8c769"
  },
  {
    "url": "build/ionicons/svg/ios-browsers.js",
    "revision": "bc64576ace776a5040dfd5c35b19ee00"
  },
  {
    "url": "build/ionicons/svg/ios-brush.js",
    "revision": "4b7db21a65126e9b768b8ed1c21cb5f3"
  },
  {
    "url": "build/ionicons/svg/ios-bug.js",
    "revision": "506ddc80751cdab948e319fd11f20c45"
  },
  {
    "url": "build/ionicons/svg/ios-build.js",
    "revision": "ba494b6eb776a5ca1bfcab933a4c0052"
  },
  {
    "url": "build/ionicons/svg/ios-bulb.js",
    "revision": "9ad2bf73a75427e2327cc6fd9c4cbc8b"
  },
  {
    "url": "build/ionicons/svg/ios-bus.js",
    "revision": "749f6a86fa243c593d959d7f1ab9cf6b"
  },
  {
    "url": "build/ionicons/svg/ios-cafe.js",
    "revision": "b93af8a4441402e97d121f1586ea5ec5"
  },
  {
    "url": "build/ionicons/svg/ios-calculator.js",
    "revision": "c76d518a85d1a07279973339e9f11652"
  },
  {
    "url": "build/ionicons/svg/ios-calendar.js",
    "revision": "8fa5d60a1a2cd102a9017845fccc1888"
  },
  {
    "url": "build/ionicons/svg/ios-call.js",
    "revision": "0cda905657ee7b5556f5dced64cc6033"
  },
  {
    "url": "build/ionicons/svg/ios-camera.js",
    "revision": "4989ea4adfcd4755ccb3343658fcfabc"
  },
  {
    "url": "build/ionicons/svg/ios-car.js",
    "revision": "e42998e918d5072109b72248363f03e6"
  },
  {
    "url": "build/ionicons/svg/ios-card.js",
    "revision": "d813ea13802a9c8b1f07bd77c386138f"
  },
  {
    "url": "build/ionicons/svg/ios-cart.js",
    "revision": "9ef458ba3159f0f4fa3832344fb26e5d"
  },
  {
    "url": "build/ionicons/svg/ios-cash.js",
    "revision": "bef1edffce40fe029a7bda97d3ff44d3"
  },
  {
    "url": "build/ionicons/svg/ios-chatboxes.js",
    "revision": "da570037c326709e4373298064e6304c"
  },
  {
    "url": "build/ionicons/svg/ios-chatbubbles.js",
    "revision": "48a86c9b21c815f652e421e460283f82"
  },
  {
    "url": "build/ionicons/svg/ios-checkbox-outline.js",
    "revision": "e5e8c8fe4c9b5585181bff6824d1d993"
  },
  {
    "url": "build/ionicons/svg/ios-checkbox.js",
    "revision": "ce5ebc8fe5359f1fcd261166296ef0dd"
  },
  {
    "url": "build/ionicons/svg/ios-checkmark-circle-outline.js",
    "revision": "d9942efdf5dce61f6f180137651befe2"
  },
  {
    "url": "build/ionicons/svg/ios-checkmark-circle.js",
    "revision": "111705b02a16593700018967994eede9"
  },
  {
    "url": "build/ionicons/svg/ios-checkmark.js",
    "revision": "8a815c1518eb9b1712499afb5e234196"
  },
  {
    "url": "build/ionicons/svg/ios-clipboard.js",
    "revision": "b160cf325ae5dab5701bd27df3016719"
  },
  {
    "url": "build/ionicons/svg/ios-clock.js",
    "revision": "a719aab918857342f75a8233317c8f2e"
  },
  {
    "url": "build/ionicons/svg/ios-close-circle-outline.js",
    "revision": "4775424c7d7c8b5a8e4a938a31becb78"
  },
  {
    "url": "build/ionicons/svg/ios-close-circle.js",
    "revision": "47b60f0b50d408cd5d4eac68393148b4"
  },
  {
    "url": "build/ionicons/svg/ios-close.js",
    "revision": "26628794d1d61b3af1e0b0c7f8058c48"
  },
  {
    "url": "build/ionicons/svg/ios-cloud-circle.js",
    "revision": "7ab22493665c4e594cfa26d642528884"
  },
  {
    "url": "build/ionicons/svg/ios-cloud-done.js",
    "revision": "a2c6aeb622a2dc148c486216d6e23d5e"
  },
  {
    "url": "build/ionicons/svg/ios-cloud-download.js",
    "revision": "4dcf6dd5b34a7f7cbadcef579578f77c"
  },
  {
    "url": "build/ionicons/svg/ios-cloud-outline.js",
    "revision": "bb3d996cdc983f165f41f971c9378a5e"
  },
  {
    "url": "build/ionicons/svg/ios-cloud-upload.js",
    "revision": "41685816964bead36c0c01fb78cbda95"
  },
  {
    "url": "build/ionicons/svg/ios-cloud.js",
    "revision": "bb399f459cee8d321b3c487a4c40c2e7"
  },
  {
    "url": "build/ionicons/svg/ios-cloudy-night.js",
    "revision": "0a4b497e049ef75bea3d2ebcd3ef7f27"
  },
  {
    "url": "build/ionicons/svg/ios-cloudy.js",
    "revision": "9152c679b8f91943eb66b140f80c7ec1"
  },
  {
    "url": "build/ionicons/svg/ios-code-download.js",
    "revision": "74cc6926cc3999a9bb9faace289315ca"
  },
  {
    "url": "build/ionicons/svg/ios-code-working.js",
    "revision": "1f03242395de07539ca79cc942f3d1a1"
  },
  {
    "url": "build/ionicons/svg/ios-code.js",
    "revision": "0b6626ca1d13711dcace05cb5c5776f2"
  },
  {
    "url": "build/ionicons/svg/ios-cog.js",
    "revision": "b189752c61238d06db17560234da4680"
  },
  {
    "url": "build/ionicons/svg/ios-color-fill.js",
    "revision": "1c394e713cbdb150f7fb93084f01f743"
  },
  {
    "url": "build/ionicons/svg/ios-color-filter.js",
    "revision": "6aafa45bb85096a564bd7841397ae7f4"
  },
  {
    "url": "build/ionicons/svg/ios-color-palette.js",
    "revision": "58cba733ba312e28a5f33f88fe0a86c9"
  },
  {
    "url": "build/ionicons/svg/ios-color-wand.js",
    "revision": "14fcef789a7612536502cec9a169bd38"
  },
  {
    "url": "build/ionicons/svg/ios-compass.js",
    "revision": "8adf384eebbb02fba0294e696403329a"
  },
  {
    "url": "build/ionicons/svg/ios-construct.js",
    "revision": "f69876e2a1c894b71d093bb3c457a88d"
  },
  {
    "url": "build/ionicons/svg/ios-contact.js",
    "revision": "71710d2e83f0337fdf0def5613b209a1"
  },
  {
    "url": "build/ionicons/svg/ios-contacts.js",
    "revision": "c5e2762e3c03221d7f0347de4a6d18e9"
  },
  {
    "url": "build/ionicons/svg/ios-contract.js",
    "revision": "9c9778c6ea0697ab53996cd083633407"
  },
  {
    "url": "build/ionicons/svg/ios-contrast.js",
    "revision": "d9e6d38b4869116ee52b7a5ef308fecf"
  },
  {
    "url": "build/ionicons/svg/ios-copy.js",
    "revision": "95b90423b875da943910513738d15249"
  },
  {
    "url": "build/ionicons/svg/ios-create.js",
    "revision": "37ba305b8e0d8f2a46dac09bcd0105b2"
  },
  {
    "url": "build/ionicons/svg/ios-crop.js",
    "revision": "4084f7c7a71bdcfe93e3a5360cb328e9"
  },
  {
    "url": "build/ionicons/svg/ios-cube.js",
    "revision": "5247fe88ba65166ee453671c2ea69e5e"
  },
  {
    "url": "build/ionicons/svg/ios-cut.js",
    "revision": "25488d41b2a15412c9091663c47ff90f"
  },
  {
    "url": "build/ionicons/svg/ios-desktop.js",
    "revision": "82ac24c646acbfb56c6c7aca059f6c94"
  },
  {
    "url": "build/ionicons/svg/ios-disc.js",
    "revision": "892afc9bbc2933e4c45e2589d56a7f59"
  },
  {
    "url": "build/ionicons/svg/ios-document.js",
    "revision": "442f9c03462deb8ac614261b1400520b"
  },
  {
    "url": "build/ionicons/svg/ios-done-all.js",
    "revision": "959c5c97943c1659f367bf1ea2478789"
  },
  {
    "url": "build/ionicons/svg/ios-download.js",
    "revision": "566e95cdf8af420a678ec98313bf273d"
  },
  {
    "url": "build/ionicons/svg/ios-easel.js",
    "revision": "aab7cd1a790afcccd7eb0125a0c78dd9"
  },
  {
    "url": "build/ionicons/svg/ios-egg.js",
    "revision": "c2757dbcf138bae3d3df5da6b99e43fc"
  },
  {
    "url": "build/ionicons/svg/ios-exit.js",
    "revision": "2559b2bc71e0f5216cae116970250d39"
  },
  {
    "url": "build/ionicons/svg/ios-expand.js",
    "revision": "21e51a21f8af2d35a87a63039055fe5b"
  },
  {
    "url": "build/ionicons/svg/ios-eye-off.js",
    "revision": "92c504849a10f007906ed4990194a767"
  },
  {
    "url": "build/ionicons/svg/ios-eye.js",
    "revision": "9d0f827969cded5e5019a56bac267ca1"
  },
  {
    "url": "build/ionicons/svg/ios-fastforward.js",
    "revision": "02d6cc2f3569e34cfcb4abc0eff706a6"
  },
  {
    "url": "build/ionicons/svg/ios-female.js",
    "revision": "1d1ceba3140ba17c7e97aba5592418f2"
  },
  {
    "url": "build/ionicons/svg/ios-filing.js",
    "revision": "fb4a38d64a8c3c3f74ee91f11b907fc5"
  },
  {
    "url": "build/ionicons/svg/ios-film.js",
    "revision": "c31d0da80e7814a6f0bf26a068d9e0e4"
  },
  {
    "url": "build/ionicons/svg/ios-finger-print.js",
    "revision": "2d85757bb5eccbdacf9acd45bb1be4f3"
  },
  {
    "url": "build/ionicons/svg/ios-flag.js",
    "revision": "bd23bffbea23cf934bfe725623acc957"
  },
  {
    "url": "build/ionicons/svg/ios-flame.js",
    "revision": "c1c530383827226ac14bb341a2d7375e"
  },
  {
    "url": "build/ionicons/svg/ios-flash.js",
    "revision": "61954e6afb045c9358308299bd95b4dd"
  },
  {
    "url": "build/ionicons/svg/ios-flask.js",
    "revision": "5a008370db897e2028f67e0cf8acffac"
  },
  {
    "url": "build/ionicons/svg/ios-flower.js",
    "revision": "95fa9f6fae1fcb6f66cc14f2a19c65ca"
  },
  {
    "url": "build/ionicons/svg/ios-folder-open.js",
    "revision": "8238e27a26e2e8389d715b4c7f15a160"
  },
  {
    "url": "build/ionicons/svg/ios-folder.js",
    "revision": "4fde930ed22d7bf613a21c7770764767"
  },
  {
    "url": "build/ionicons/svg/ios-football.js",
    "revision": "fa48f790e6457a9cd537af3b0fb28e01"
  },
  {
    "url": "build/ionicons/svg/ios-funnel.js",
    "revision": "d2fef0035198117135906a35ea592f61"
  },
  {
    "url": "build/ionicons/svg/ios-game-controller-a.js",
    "revision": "3c181222687ab85ab6afc242a91fce56"
  },
  {
    "url": "build/ionicons/svg/ios-game-controller-b.js",
    "revision": "f7832685bfe136c372c6794c24ba71e1"
  },
  {
    "url": "build/ionicons/svg/ios-git-branch.js",
    "revision": "a6a12920c736b3a35ac72fbd75189b40"
  },
  {
    "url": "build/ionicons/svg/ios-git-commit.js",
    "revision": "e27db91910ee5a8665381292999fd365"
  },
  {
    "url": "build/ionicons/svg/ios-git-compare.js",
    "revision": "41c9bba40b9bd27156691d402f3e02ef"
  },
  {
    "url": "build/ionicons/svg/ios-git-merge.js",
    "revision": "b479d1befb717f4f1c2748176973db03"
  },
  {
    "url": "build/ionicons/svg/ios-git-network.js",
    "revision": "e81fd9022a46fbe96b4a3427d0b5941f"
  },
  {
    "url": "build/ionicons/svg/ios-git-pull-request.js",
    "revision": "f95d08d466d39aa01ef21ddc3a0e4de3"
  },
  {
    "url": "build/ionicons/svg/ios-glasses.js",
    "revision": "34409c345bcb990772dd40f5cd38e8d9"
  },
  {
    "url": "build/ionicons/svg/ios-globe.js",
    "revision": "e6c04801f5492fe9ee35d6848d2a1381"
  },
  {
    "url": "build/ionicons/svg/ios-grid.js",
    "revision": "189cb35a8e52510298d45f36cc53e880"
  },
  {
    "url": "build/ionicons/svg/ios-hammer.js",
    "revision": "4aa946f3ee66aaf907eba08759fb5dfa"
  },
  {
    "url": "build/ionicons/svg/ios-hand.js",
    "revision": "db5c04c25bd9514a23985f07e27254d8"
  },
  {
    "url": "build/ionicons/svg/ios-happy.js",
    "revision": "07b3982af830b8520d52127eb47c3278"
  },
  {
    "url": "build/ionicons/svg/ios-headset.js",
    "revision": "96a3f59c47ea7c8907257f9736671744"
  },
  {
    "url": "build/ionicons/svg/ios-heart.js",
    "revision": "621369fb0c27bfd2a855e24e123ceef2"
  },
  {
    "url": "build/ionicons/svg/ios-help-buoy.js",
    "revision": "542ea53f56b840bc6f1b7546d1c8e4ad"
  },
  {
    "url": "build/ionicons/svg/ios-help-circle-outline.js",
    "revision": "0b3a8d70d1e7fad92f1f6c8c01c89b8f"
  },
  {
    "url": "build/ionicons/svg/ios-help-circle.js",
    "revision": "0adc999b23a0b36d967c61aed9d9acd9"
  },
  {
    "url": "build/ionicons/svg/ios-help.js",
    "revision": "bd7348256ec740965e0f46bfdbd125bc"
  },
  {
    "url": "build/ionicons/svg/ios-home.js",
    "revision": "e622aff3ae79a69ea13751b8e3f89a13"
  },
  {
    "url": "build/ionicons/svg/ios-hourglass.js",
    "revision": "8c8d81bc594be2e3929ec377fc5e8e65"
  },
  {
    "url": "build/ionicons/svg/ios-ice-cream.js",
    "revision": "740b795d24c5b497871db9b76e81d8f0"
  },
  {
    "url": "build/ionicons/svg/ios-image.js",
    "revision": "4980dded1c3994ba05be4a1b71c8bd30"
  },
  {
    "url": "build/ionicons/svg/ios-images.js",
    "revision": "4acae6862b2248b67e963aebdad2e59a"
  },
  {
    "url": "build/ionicons/svg/ios-infinite.js",
    "revision": "8b06dc90d5619997d41bd78e21db06ea"
  },
  {
    "url": "build/ionicons/svg/ios-information-circle-outline.js",
    "revision": "ae68135e56edf477d603e1b3d047bc63"
  },
  {
    "url": "build/ionicons/svg/ios-information-circle.js",
    "revision": "8bddd8f4f14cc4d14f3d8c29ce13f567"
  },
  {
    "url": "build/ionicons/svg/ios-information.js",
    "revision": "3f7835aa9683fed6df655e9c18643546"
  },
  {
    "url": "build/ionicons/svg/ios-ionic.js",
    "revision": "1fb186caf2fc1c54ac9fc23deca468d7"
  },
  {
    "url": "build/ionicons/svg/ios-ionitron.js",
    "revision": "1423d0f871ffd7a7b17736b2067098c8"
  },
  {
    "url": "build/ionicons/svg/ios-jet.js",
    "revision": "25da7985e0c932eb75579cf60b9c137b"
  },
  {
    "url": "build/ionicons/svg/ios-key.js",
    "revision": "c9af36852a661257ede3b5ff82b94157"
  },
  {
    "url": "build/ionicons/svg/ios-keypad.js",
    "revision": "7d879e9dc4ff99fedb8aed821dfa55e4"
  },
  {
    "url": "build/ionicons/svg/ios-laptop.js",
    "revision": "8bb7a094baac2e7c7b856892a357f2bf"
  },
  {
    "url": "build/ionicons/svg/ios-leaf.js",
    "revision": "364a86f3673de69f7941e035538a86ee"
  },
  {
    "url": "build/ionicons/svg/ios-link.js",
    "revision": "0d976c27230b915b68bcb87679cdde37"
  },
  {
    "url": "build/ionicons/svg/ios-list.js",
    "revision": "179eed0c07680e76871c67f361da00fe"
  },
  {
    "url": "build/ionicons/svg/ios-locate.js",
    "revision": "0e290064b9cd4daa9f07d66b2c8f1636"
  },
  {
    "url": "build/ionicons/svg/ios-lock.js",
    "revision": "060e5d58fe437dce0f76a05b0bd445f8"
  },
  {
    "url": "build/ionicons/svg/ios-log-in.js",
    "revision": "3e7bc8f3d156c0b4f491943acc89dae7"
  },
  {
    "url": "build/ionicons/svg/ios-log-out.js",
    "revision": "aaec6131d1f390ce71454e02e614625d"
  },
  {
    "url": "build/ionicons/svg/ios-magnet.js",
    "revision": "049d308e9067028d5350c09219dc2b4f"
  },
  {
    "url": "build/ionicons/svg/ios-mail-open.js",
    "revision": "e9a4ecca7e55374b7272691707252a45"
  },
  {
    "url": "build/ionicons/svg/ios-mail.js",
    "revision": "fd9536c6b92c36c55484c7868e3acccc"
  },
  {
    "url": "build/ionicons/svg/ios-male.js",
    "revision": "3fc24da6144d9792ddd74587eca9d41b"
  },
  {
    "url": "build/ionicons/svg/ios-man.js",
    "revision": "06569a56c6466128f817f64710770ff1"
  },
  {
    "url": "build/ionicons/svg/ios-map.js",
    "revision": "d6fb583fe3e08155106d6aa458f045cd"
  },
  {
    "url": "build/ionicons/svg/ios-medal.js",
    "revision": "875b8ed3f2ddb937682d0aac218e561a"
  },
  {
    "url": "build/ionicons/svg/ios-medical.js",
    "revision": "1838646267f82db080a456038bd80374"
  },
  {
    "url": "build/ionicons/svg/ios-medkit.js",
    "revision": "02e76a85a39786c2be8d52233d02d280"
  },
  {
    "url": "build/ionicons/svg/ios-megaphone.js",
    "revision": "bdd909b5e3da0218dd5ab130de8ab57d"
  },
  {
    "url": "build/ionicons/svg/ios-menu.js",
    "revision": "224cd28579b169871a601c6c75849b60"
  },
  {
    "url": "build/ionicons/svg/ios-mic-off.js",
    "revision": "f2603e697bd64b06aed2c141c579d485"
  },
  {
    "url": "build/ionicons/svg/ios-mic.js",
    "revision": "5f704c2a53867215d1a7c660d108a25e"
  },
  {
    "url": "build/ionicons/svg/ios-microphone.js",
    "revision": "bdd885ded1c9f20eff63902609b5b0cd"
  },
  {
    "url": "build/ionicons/svg/ios-moon.js",
    "revision": "5ac9b736666f63106d8e6f31b0e1ee3c"
  },
  {
    "url": "build/ionicons/svg/ios-more.js",
    "revision": "a66bdd9f1664573aed063e1973ae21d0"
  },
  {
    "url": "build/ionicons/svg/ios-move.js",
    "revision": "e8bfb04be3e717d26faeb068e822c193"
  },
  {
    "url": "build/ionicons/svg/ios-musical-note.js",
    "revision": "63171ea763fd44f10c95c7c14779eb2b"
  },
  {
    "url": "build/ionicons/svg/ios-musical-notes.js",
    "revision": "3b2c0d06cc8e7623dc817f9c6465e568"
  },
  {
    "url": "build/ionicons/svg/ios-navigate.js",
    "revision": "caade81a8b63ca6ae03b5083c21582d9"
  },
  {
    "url": "build/ionicons/svg/ios-notifications-off.js",
    "revision": "4f3bb1c017523437d9589877ab65db18"
  },
  {
    "url": "build/ionicons/svg/ios-notifications.js",
    "revision": "4e2cf4f2c947c0d60af78b3eda013a8b"
  },
  {
    "url": "build/ionicons/svg/ios-nuclear.js",
    "revision": "19e3fea829221fed4f8a49d5ff69afda"
  },
  {
    "url": "build/ionicons/svg/ios-nutrition.js",
    "revision": "ceff249d49f32670f84007cd961e2b66"
  },
  {
    "url": "build/ionicons/svg/ios-open.js",
    "revision": "632265a7e4cda1c3992e09dd9cf29f66"
  },
  {
    "url": "build/ionicons/svg/ios-options.js",
    "revision": "6e45acafa734c26fbf5c3483a48bf340"
  },
  {
    "url": "build/ionicons/svg/ios-outlet.js",
    "revision": "a10c6bdd19348ae9a404687ea9c78afa"
  },
  {
    "url": "build/ionicons/svg/ios-paper-plane.js",
    "revision": "c9c4956e9b21e4339f57a88ec1263b9f"
  },
  {
    "url": "build/ionicons/svg/ios-paper.js",
    "revision": "bae4f0fa2066bcf12e58dd78111a02f9"
  },
  {
    "url": "build/ionicons/svg/ios-partly-sunny.js",
    "revision": "80e5aff7023ceaeca1040ac3da2e4f10"
  },
  {
    "url": "build/ionicons/svg/ios-pause.js",
    "revision": "44a0158ee105d5bfb95954bb8f308270"
  },
  {
    "url": "build/ionicons/svg/ios-paw.js",
    "revision": "5d050173997f2d4fdc2f857901c20891"
  },
  {
    "url": "build/ionicons/svg/ios-people.js",
    "revision": "e957f38d1a04d1f9bb95c7d7ac3f72e0"
  },
  {
    "url": "build/ionicons/svg/ios-person-add.js",
    "revision": "7a7ee9a331025a77d03dda3be8c3b36f"
  },
  {
    "url": "build/ionicons/svg/ios-person.js",
    "revision": "ec44010ab6fa1f5ddd290e527ef3e7bc"
  },
  {
    "url": "build/ionicons/svg/ios-phone-landscape.js",
    "revision": "8326efc83afa381e52803baf0cd44106"
  },
  {
    "url": "build/ionicons/svg/ios-phone-portrait.js",
    "revision": "e0131f1d92eb8afa081222a1e2ec678c"
  },
  {
    "url": "build/ionicons/svg/ios-photos-outline.js",
    "revision": "72c15dc5219b349b0f41fca5f9b917d7"
  },
  {
    "url": "build/ionicons/svg/ios-photos.js",
    "revision": "e3ddf8865ee3945e32849c95e5600600"
  },
  {
    "url": "build/ionicons/svg/ios-pie.js",
    "revision": "333c83aed43757b2d8a0d796c6ecf933"
  },
  {
    "url": "build/ionicons/svg/ios-pin.js",
    "revision": "d2629a0fa4f57aac2ac91c0fd447aeb0"
  },
  {
    "url": "build/ionicons/svg/ios-pint.js",
    "revision": "863dfdc1ba83f29e1c5a14c955f76074"
  },
  {
    "url": "build/ionicons/svg/ios-pizza.js",
    "revision": "dedd1cc20b5a03da149586f081e1299d"
  },
  {
    "url": "build/ionicons/svg/ios-plane.js",
    "revision": "e8d6fb96f29523fe517a895920db2610"
  },
  {
    "url": "build/ionicons/svg/ios-planet.js",
    "revision": "53da0b6a46162d362a7a43ab43225e03"
  },
  {
    "url": "build/ionicons/svg/ios-play-circle.js",
    "revision": "85846743864507cccc13c0cb294a8788"
  },
  {
    "url": "build/ionicons/svg/ios-play.js",
    "revision": "e9b184ed541c8a8c1c6924c38cf1f1cd"
  },
  {
    "url": "build/ionicons/svg/ios-podium.js",
    "revision": "5a5bbd88bfddcca7ef1cee2cf625ac81"
  },
  {
    "url": "build/ionicons/svg/ios-power.js",
    "revision": "2e1cb899b401d903cf9e9e9938eefb44"
  },
  {
    "url": "build/ionicons/svg/ios-pricetag.js",
    "revision": "95ddf202db66a904995e611a07320ec3"
  },
  {
    "url": "build/ionicons/svg/ios-pricetags.js",
    "revision": "79a4d740a08ff781a2864f89b6355f6d"
  },
  {
    "url": "build/ionicons/svg/ios-print.js",
    "revision": "678728ca144c6c88ae0c24c36dc970cf"
  },
  {
    "url": "build/ionicons/svg/ios-pulse.js",
    "revision": "4b97bb139452c5a80026d5a7ff58fc5b"
  },
  {
    "url": "build/ionicons/svg/ios-qr-scanner.js",
    "revision": "968893bdfc29e9e7c6994e6842ba9b13"
  },
  {
    "url": "build/ionicons/svg/ios-quote.js",
    "revision": "cdad6aa697159c18853fc5e3d619ab06"
  },
  {
    "url": "build/ionicons/svg/ios-radio-button-off.js",
    "revision": "ea1f8a645f17ecbc95e6e7080db7e0a5"
  },
  {
    "url": "build/ionicons/svg/ios-radio-button-on.js",
    "revision": "04dafaaa2964db7a0b754d334d921e42"
  },
  {
    "url": "build/ionicons/svg/ios-radio.js",
    "revision": "8c9baabb0e2be07ea9822f0aeb1a90d8"
  },
  {
    "url": "build/ionicons/svg/ios-rainy.js",
    "revision": "8f84237180359117f937b719d45585c9"
  },
  {
    "url": "build/ionicons/svg/ios-recording.js",
    "revision": "3506b90b14f54cf0e6efa6dbde43e6a0"
  },
  {
    "url": "build/ionicons/svg/ios-redo.js",
    "revision": "54cc349c2dc427c1cabb57667bd80112"
  },
  {
    "url": "build/ionicons/svg/ios-refresh.js",
    "revision": "94c2f5bf96be4c2d9f01ab7a543e3608"
  },
  {
    "url": "build/ionicons/svg/ios-remove-circle-outline.js",
    "revision": "8fbf701f7b6be662185e8501104d5530"
  },
  {
    "url": "build/ionicons/svg/ios-remove-circle.js",
    "revision": "fe596a51f0ecbc6a515e66af1927e13e"
  },
  {
    "url": "build/ionicons/svg/ios-remove.js",
    "revision": "1be8086b0f33b86f7d508a9ce4e1f533"
  },
  {
    "url": "build/ionicons/svg/ios-reorder.js",
    "revision": "be58621df2886300b28ccab33ec4f850"
  },
  {
    "url": "build/ionicons/svg/ios-repeat.js",
    "revision": "bf66a0a0415f2777a6bbdfe28bf53556"
  },
  {
    "url": "build/ionicons/svg/ios-resize.js",
    "revision": "e37757008586b401caea99c52d7207ac"
  },
  {
    "url": "build/ionicons/svg/ios-restaurant.js",
    "revision": "f1aed29c542ae0bec920c1cb3d227e1d"
  },
  {
    "url": "build/ionicons/svg/ios-return-left.js",
    "revision": "0247288e964a38623c895977c5629a60"
  },
  {
    "url": "build/ionicons/svg/ios-return-right.js",
    "revision": "649cdfdc1bc6e00c94bfe18851fa3842"
  },
  {
    "url": "build/ionicons/svg/ios-reverse-camera.js",
    "revision": "cabc4a2dec47f57803e76ff26d92b5a1"
  },
  {
    "url": "build/ionicons/svg/ios-rewind.js",
    "revision": "1f94662295a66e0dbe4811db888dedb8"
  },
  {
    "url": "build/ionicons/svg/ios-ribbon.js",
    "revision": "df04c2cc41bcc8590e220af42efb0a8e"
  },
  {
    "url": "build/ionicons/svg/ios-rose.js",
    "revision": "75b32989b1cdc161644dcdde7ee8f471"
  },
  {
    "url": "build/ionicons/svg/ios-sad.js",
    "revision": "348544e5d3c184112565cbddd42f20f2"
  },
  {
    "url": "build/ionicons/svg/ios-school.js",
    "revision": "9fbb5f0bd883198ec01713a12e015683"
  },
  {
    "url": "build/ionicons/svg/ios-search.js",
    "revision": "7710971ffae95cd4bb8db25790705fb0"
  },
  {
    "url": "build/ionicons/svg/ios-send.js",
    "revision": "b075130463f69f13b8e9ff5b292da920"
  },
  {
    "url": "build/ionicons/svg/ios-settings.js",
    "revision": "22d7ddf2c586cbed7db9673bbadeaa3f"
  },
  {
    "url": "build/ionicons/svg/ios-share-alt.js",
    "revision": "97b6508db90eb3593049817c6f73a6f7"
  },
  {
    "url": "build/ionicons/svg/ios-share.js",
    "revision": "f9295a5f97a4ffb35582d5ee50ae652e"
  },
  {
    "url": "build/ionicons/svg/ios-shirt.js",
    "revision": "235509f97ca08a173057ea590c6ea8bf"
  },
  {
    "url": "build/ionicons/svg/ios-shuffle.js",
    "revision": "e5c998adea6e08012395858fe911207b"
  },
  {
    "url": "build/ionicons/svg/ios-skip-backward.js",
    "revision": "cd6fb1911ffd0c58b865a3a26e04a41b"
  },
  {
    "url": "build/ionicons/svg/ios-skip-forward.js",
    "revision": "cc0a3b63c109128580e5f711e3fd9a4b"
  },
  {
    "url": "build/ionicons/svg/ios-snow.js",
    "revision": "49b83d896443b4c0fe992b2ebbfbf4ac"
  },
  {
    "url": "build/ionicons/svg/ios-speedometer.js",
    "revision": "09dcb84816e54eda158afd495f87c4b0"
  },
  {
    "url": "build/ionicons/svg/ios-square.js",
    "revision": "e4006ece142ae240e944a7d55d7e74fd"
  },
  {
    "url": "build/ionicons/svg/ios-star-half.js",
    "revision": "4f9e0f4aad156dab87c44795bb7b32e1"
  },
  {
    "url": "build/ionicons/svg/ios-star-outline.js",
    "revision": "bedd9244184cba5d0cda57dbbb8b68ae"
  },
  {
    "url": "build/ionicons/svg/ios-star.js",
    "revision": "1436911e5aa44697966497c0c34a66f9"
  },
  {
    "url": "build/ionicons/svg/ios-stats.js",
    "revision": "293ab3b9870ec7147c8b5b15c1e3654b"
  },
  {
    "url": "build/ionicons/svg/ios-stopwatch.js",
    "revision": "048527bed8bae0c30ff7a3a074baa455"
  },
  {
    "url": "build/ionicons/svg/ios-subway.js",
    "revision": "042409a765c332514d90e83859f10f12"
  },
  {
    "url": "build/ionicons/svg/ios-sunny.js",
    "revision": "4bd4c38ec9ac3dcc33e9c5cc6ac33e08"
  },
  {
    "url": "build/ionicons/svg/ios-swap.js",
    "revision": "ea35f32a16186da94079fd7c248ab8a1"
  },
  {
    "url": "build/ionicons/svg/ios-switch.js",
    "revision": "5c06b6fdb88577e3ec13f9743d2393fd"
  },
  {
    "url": "build/ionicons/svg/ios-sync.js",
    "revision": "59a60eeb9a7bdde8fca07bf3118061c0"
  },
  {
    "url": "build/ionicons/svg/ios-tablet-landscape.js",
    "revision": "42228e055587abee0c8ce822845fb24d"
  },
  {
    "url": "build/ionicons/svg/ios-tablet-portrait.js",
    "revision": "6edcfe7dd5a4556eee7a65014402398c"
  },
  {
    "url": "build/ionicons/svg/ios-tennisball.js",
    "revision": "4d45ed4981c5922d6ff7d6a3737445e3"
  },
  {
    "url": "build/ionicons/svg/ios-text.js",
    "revision": "ec81e49de6412d9b4e0ea01753c4f418"
  },
  {
    "url": "build/ionicons/svg/ios-thermometer.js",
    "revision": "a5e01dc98c000dbc3f32146a382901da"
  },
  {
    "url": "build/ionicons/svg/ios-thumbs-down.js",
    "revision": "2fd26423f9b726d3b6002f4ef42a528d"
  },
  {
    "url": "build/ionicons/svg/ios-thumbs-up.js",
    "revision": "ae88bb8b18f3923801ebc68aaa5d4147"
  },
  {
    "url": "build/ionicons/svg/ios-thunderstorm.js",
    "revision": "49066dafdee223743e806b57ed408934"
  },
  {
    "url": "build/ionicons/svg/ios-time.js",
    "revision": "b1a1871793f665e8f15f1923165e2725"
  },
  {
    "url": "build/ionicons/svg/ios-timer.js",
    "revision": "9202dfbe1e65e7277a79416827a64eea"
  },
  {
    "url": "build/ionicons/svg/ios-train.js",
    "revision": "d95a08bc38fbe6ebfff8b223144424b0"
  },
  {
    "url": "build/ionicons/svg/ios-transgender.js",
    "revision": "9ef708b8ff93e5b9d14dacd53532843c"
  },
  {
    "url": "build/ionicons/svg/ios-trash.js",
    "revision": "75bcd7ab546ccd0c7238bd2a709fbf2a"
  },
  {
    "url": "build/ionicons/svg/ios-trending-down.js",
    "revision": "5e7a0cedf99dde487b947929bd47d2d7"
  },
  {
    "url": "build/ionicons/svg/ios-trending-up.js",
    "revision": "48ddf9975487a5948b4cf2061576e9f2"
  },
  {
    "url": "build/ionicons/svg/ios-trophy.js",
    "revision": "41d2e106cf730f6c0415781aef5fa71e"
  },
  {
    "url": "build/ionicons/svg/ios-tv.js",
    "revision": "47dd8fc31161bf58c756c207ce72d6e7"
  },
  {
    "url": "build/ionicons/svg/ios-umbrella.js",
    "revision": "79a95ddcf0c0c8b80d1ce891015e5f7c"
  },
  {
    "url": "build/ionicons/svg/ios-undo.js",
    "revision": "845258f9726f8a7f89310f615d63f48c"
  },
  {
    "url": "build/ionicons/svg/ios-unlock.js",
    "revision": "d50ad88a8d34013339ce7b176568dc6b"
  },
  {
    "url": "build/ionicons/svg/ios-videocam.js",
    "revision": "755ff86a3b948d20d6b237dc3dd82e62"
  },
  {
    "url": "build/ionicons/svg/ios-volume-down.js",
    "revision": "498081f3787f5d0cbf9576453dcfea3e"
  },
  {
    "url": "build/ionicons/svg/ios-volume-high.js",
    "revision": "2cdbfe760c998e149643b2196d82a8ad"
  },
  {
    "url": "build/ionicons/svg/ios-volume-low.js",
    "revision": "ad160cbe842e7594789b2c815fc24879"
  },
  {
    "url": "build/ionicons/svg/ios-volume-med.js",
    "revision": "8752652dd1520e79de03d898a9ff4e3d"
  },
  {
    "url": "build/ionicons/svg/ios-volume-mute.js",
    "revision": "869ce83fb7fdaba308b6ab89b4e069e1"
  },
  {
    "url": "build/ionicons/svg/ios-volume-off.js",
    "revision": "104c0943d7203686817cd3e1c383cfb4"
  },
  {
    "url": "build/ionicons/svg/ios-volume-up.js",
    "revision": "0ffbae8255fcd255878372da0e89d829"
  },
  {
    "url": "build/ionicons/svg/ios-walk.js",
    "revision": "899a0b0806773221f92da12427ca7e4c"
  },
  {
    "url": "build/ionicons/svg/ios-warning.js",
    "revision": "a80aa283de341919cf82194ee94fb6ba"
  },
  {
    "url": "build/ionicons/svg/ios-watch.js",
    "revision": "ff2534eedb55d4ff6432b20c5bce182c"
  },
  {
    "url": "build/ionicons/svg/ios-water.js",
    "revision": "b3b4ca329eac4248d6013b66262f59d3"
  },
  {
    "url": "build/ionicons/svg/ios-wifi.js",
    "revision": "25bba085fc5d098071259f4bf25cfdf6"
  },
  {
    "url": "build/ionicons/svg/ios-wine.js",
    "revision": "6ba4cfdf3654c02568b2e4c065e71a33"
  },
  {
    "url": "build/ionicons/svg/ios-woman.js",
    "revision": "6f9d1d565d86b82f7c7361b661129fba"
  },
  {
    "url": "build/ionicons/svg/logo-android.js",
    "revision": "d285912e6337514fda16588bf4608408"
  },
  {
    "url": "build/ionicons/svg/logo-angular.js",
    "revision": "1031f1fbab88146b9078e50c64c66a00"
  },
  {
    "url": "build/ionicons/svg/logo-apple.js",
    "revision": "5b17e3bebf1795291a342cb7312e88a8"
  },
  {
    "url": "build/ionicons/svg/logo-bitcoin.js",
    "revision": "dd5b8d89a7428b4f7610fce466897cfb"
  },
  {
    "url": "build/ionicons/svg/logo-buffer.js",
    "revision": "a6c367cbabb790ea06ef9c7ab1573c68"
  },
  {
    "url": "build/ionicons/svg/logo-chrome.js",
    "revision": "2e0b3ced14e9f857385fcd57eb9ae409"
  },
  {
    "url": "build/ionicons/svg/logo-closed-captioning.js",
    "revision": "9dfd5df987f3547d574e38d962513c7c"
  },
  {
    "url": "build/ionicons/svg/logo-codepen.js",
    "revision": "3a39daf18f3a8e7ea0e7256425431eab"
  },
  {
    "url": "build/ionicons/svg/logo-css3.js",
    "revision": "cee2339599a53fda384461d8fe5ce320"
  },
  {
    "url": "build/ionicons/svg/logo-designernews.js",
    "revision": "3efa0c6882f5e2bcc7e85b22ca8701a6"
  },
  {
    "url": "build/ionicons/svg/logo-dribbble.js",
    "revision": "3e52c6e6e2d486a42180b10c24da97e6"
  },
  {
    "url": "build/ionicons/svg/logo-dropbox.js",
    "revision": "bc27ec7fc9c3212e3ecd478285c3ff36"
  },
  {
    "url": "build/ionicons/svg/logo-euro.js",
    "revision": "3a3068a501a7e17d597e17af1ea38095"
  },
  {
    "url": "build/ionicons/svg/logo-facebook.js",
    "revision": "0f21088e13a235d44dcdf559d6a8083f"
  },
  {
    "url": "build/ionicons/svg/logo-flickr.js",
    "revision": "1bf8dc4f70567ef6abc85cc92f6215b2"
  },
  {
    "url": "build/ionicons/svg/logo-foursquare.js",
    "revision": "a86e60581695c29aed40242880b48411"
  },
  {
    "url": "build/ionicons/svg/logo-freebsd-devil.js",
    "revision": "198d0fdae7fe06f70d76d2346a550c23"
  },
  {
    "url": "build/ionicons/svg/logo-github.js",
    "revision": "b730f772076bbff3c1480d6cb06532e1"
  },
  {
    "url": "build/ionicons/svg/logo-google.js",
    "revision": "9b85c40ff01d557d556a5c78ef6459ce"
  },
  {
    "url": "build/ionicons/svg/logo-googleplus.js",
    "revision": "d99f3883a97162303b162c94c52e226e"
  },
  {
    "url": "build/ionicons/svg/logo-hackernews.js",
    "revision": "978699c6a7d90704dd6ae988ea10972d"
  },
  {
    "url": "build/ionicons/svg/logo-html5.js",
    "revision": "c22872414c1129a3a1a24fef62f52469"
  },
  {
    "url": "build/ionicons/svg/logo-instagram.js",
    "revision": "bff944e3d32bffdc952a78a7d41cee4a"
  },
  {
    "url": "build/ionicons/svg/logo-javascript.js",
    "revision": "a6c075ef33a68262878789b93b847613"
  },
  {
    "url": "build/ionicons/svg/logo-linkedin.js",
    "revision": "31dfa2bc7127a5367123a15ae94e3ff1"
  },
  {
    "url": "build/ionicons/svg/logo-markdown.js",
    "revision": "32e6a549be2aecc46fe97e3eb9f6b642"
  },
  {
    "url": "build/ionicons/svg/logo-no-smoking.js",
    "revision": "176fece51d8c642e3d4507b9472aecfe"
  },
  {
    "url": "build/ionicons/svg/logo-nodejs.js",
    "revision": "f1c3e9b5e68df25f1d558d6348ed8018"
  },
  {
    "url": "build/ionicons/svg/logo-octocat.js",
    "revision": "69989d1590914cfe294ef835e2335f03"
  },
  {
    "url": "build/ionicons/svg/logo-pinterest.js",
    "revision": "ef8a6f06af271e3498495ca259fcc811"
  },
  {
    "url": "build/ionicons/svg/logo-playstation.js",
    "revision": "9962390bcc5af9a54d9f4d28da16a093"
  },
  {
    "url": "build/ionicons/svg/logo-python.js",
    "revision": "57e572d7e341f7e955bddec82dd909f5"
  },
  {
    "url": "build/ionicons/svg/logo-reddit.js",
    "revision": "18c6f832a3d90d563e2a0dd92ff40029"
  },
  {
    "url": "build/ionicons/svg/logo-rss.js",
    "revision": "bdce250b4dc18aa93db3dd7a029cf82a"
  },
  {
    "url": "build/ionicons/svg/logo-sass.js",
    "revision": "2ffea434d27a8edbcc54eb467b799170"
  },
  {
    "url": "build/ionicons/svg/logo-skype.js",
    "revision": "a31661497a86894b9ba6f7a35497c8b5"
  },
  {
    "url": "build/ionicons/svg/logo-slack.js",
    "revision": "4fb9602602dd0c99dd1d20f0df3db8dc"
  },
  {
    "url": "build/ionicons/svg/logo-snapchat.js",
    "revision": "0ea00167416345a34717f7aae99dc708"
  },
  {
    "url": "build/ionicons/svg/logo-steam.js",
    "revision": "77e7308a4c5607ad9e759c59179b4361"
  },
  {
    "url": "build/ionicons/svg/logo-tumblr.js",
    "revision": "382745d4b8015d4b0440d036bcbf24df"
  },
  {
    "url": "build/ionicons/svg/logo-tux.js",
    "revision": "6483415db84852e305d0819c153e8b7a"
  },
  {
    "url": "build/ionicons/svg/logo-twitch.js",
    "revision": "1de0398cb71279599d6015d6a9328a4a"
  },
  {
    "url": "build/ionicons/svg/logo-twitter.js",
    "revision": "e24130fdc5be366afc7753762926427a"
  },
  {
    "url": "build/ionicons/svg/logo-usd.js",
    "revision": "f2e3a4eb855c78fbc2bf615d34421abd"
  },
  {
    "url": "build/ionicons/svg/logo-vimeo.js",
    "revision": "0b4d82498618035b9144c17c72f3800a"
  },
  {
    "url": "build/ionicons/svg/logo-vk.js",
    "revision": "b8d6f04260c6c351e252192dc373e152"
  },
  {
    "url": "build/ionicons/svg/logo-whatsapp.js",
    "revision": "dac4b507fdd994ebc174fce48647dbf3"
  },
  {
    "url": "build/ionicons/svg/logo-windows.js",
    "revision": "608b8483cd67ea9e8b81bec5262911d7"
  },
  {
    "url": "build/ionicons/svg/logo-wordpress.js",
    "revision": "402ab19650a4be224f88a6eec82a521f"
  },
  {
    "url": "build/ionicons/svg/logo-xbox.js",
    "revision": "299b2bb40795bcaed24145b8521bdd03"
  },
  {
    "url": "build/ionicons/svg/logo-xing.js",
    "revision": "184a609fbeacacbde719f055ac4af441"
  },
  {
    "url": "build/ionicons/svg/logo-yahoo.js",
    "revision": "53f160f4dcb607897b3a03fb8ca6ff5a"
  },
  {
    "url": "build/ionicons/svg/logo-yen.js",
    "revision": "40f372aaa017c5a8328355d8a1ce52f1"
  },
  {
    "url": "build/ionicons/svg/logo-youtube.js",
    "revision": "51050be04b4622be87f6a538334f5f9f"
  },
  {
    "url": "build/ionicons/svg/md-add-circle.js",
    "revision": "9c4a27c10abb871e04469ee54b737595"
  },
  {
    "url": "build/ionicons/svg/md-add.js",
    "revision": "79fc1496a7fc9a9dcdd6312c9772cc48"
  },
  {
    "url": "build/ionicons/svg/md-alarm.js",
    "revision": "39cb8346235b77ec817f5cb60238a2cf"
  },
  {
    "url": "build/ionicons/svg/md-albums.js",
    "revision": "b4a4f8cd04f67bca7a3621085a502b69"
  },
  {
    "url": "build/ionicons/svg/md-alert.js",
    "revision": "8e8d1866dc3266725aa2f908b02b16cb"
  },
  {
    "url": "build/ionicons/svg/md-american-football.js",
    "revision": "565cd6f0954830ef1af70ed7a56f5245"
  },
  {
    "url": "build/ionicons/svg/md-analytics.js",
    "revision": "7bf82e4abfbefaa6f6d2c5ed22ee88d4"
  },
  {
    "url": "build/ionicons/svg/md-aperture.js",
    "revision": "6017f9a194f0a2d11ca4c92c69af81b5"
  },
  {
    "url": "build/ionicons/svg/md-apps.js",
    "revision": "4083e58b6a09440c693e923c60251cde"
  },
  {
    "url": "build/ionicons/svg/md-appstore.js",
    "revision": "a99c450361fa3da92d518cc88387f373"
  },
  {
    "url": "build/ionicons/svg/md-archive.js",
    "revision": "49038fa97184e73dbefa6d89d21fe5aa"
  },
  {
    "url": "build/ionicons/svg/md-arrow-back.js",
    "revision": "a4cb9e15b6446fc1c3f15a4419da5f42"
  },
  {
    "url": "build/ionicons/svg/md-arrow-down.js",
    "revision": "42d1bb3475947ae23febcc3faedefdaf"
  },
  {
    "url": "build/ionicons/svg/md-arrow-dropdown-circle.js",
    "revision": "614997041bb4e20b30308d88217f87d7"
  },
  {
    "url": "build/ionicons/svg/md-arrow-dropdown.js",
    "revision": "13f0efb9ae4e672c70a8a5448af63921"
  },
  {
    "url": "build/ionicons/svg/md-arrow-dropleft-circle.js",
    "revision": "51f7a2f7c4fb18482b07ace2bd4886d8"
  },
  {
    "url": "build/ionicons/svg/md-arrow-dropleft.js",
    "revision": "167dc77cc4c725cc2be856305954f847"
  },
  {
    "url": "build/ionicons/svg/md-arrow-dropright-circle.js",
    "revision": "8ff5cee6a934caecb1a5d9a05fa7ff91"
  },
  {
    "url": "build/ionicons/svg/md-arrow-dropright.js",
    "revision": "9e76591b2a7bf95e69a017edabb2bc5c"
  },
  {
    "url": "build/ionicons/svg/md-arrow-dropup-circle.js",
    "revision": "6f75c097586e000841dc5618334f1682"
  },
  {
    "url": "build/ionicons/svg/md-arrow-dropup.js",
    "revision": "19795ad124a47445f04e974141e8a95a"
  },
  {
    "url": "build/ionicons/svg/md-arrow-forward.js",
    "revision": "563a0509428c142fde39d64872b54ef1"
  },
  {
    "url": "build/ionicons/svg/md-arrow-round-back.js",
    "revision": "c9c787ffb9a74ec3181e1bfb441b8d74"
  },
  {
    "url": "build/ionicons/svg/md-arrow-round-down.js",
    "revision": "ad5e737ff96af4e96042a0b642ca2a75"
  },
  {
    "url": "build/ionicons/svg/md-arrow-round-forward.js",
    "revision": "319960af13503b70181060311d25f93f"
  },
  {
    "url": "build/ionicons/svg/md-arrow-round-up.js",
    "revision": "798c6007a188f738a908b3818e808b9b"
  },
  {
    "url": "build/ionicons/svg/md-arrow-up.js",
    "revision": "135e771e4577ce1b55315b7adc5b8ba8"
  },
  {
    "url": "build/ionicons/svg/md-at.js",
    "revision": "43b4a4a3e1916da11cb95683048193b0"
  },
  {
    "url": "build/ionicons/svg/md-attach.js",
    "revision": "1c51a834beb82e173f83504cdf6d483e"
  },
  {
    "url": "build/ionicons/svg/md-backspace.js",
    "revision": "e0c75496e4df9425113f199cad454ce3"
  },
  {
    "url": "build/ionicons/svg/md-barcode.js",
    "revision": "60a02d5ddfd1329413ab165d9e539826"
  },
  {
    "url": "build/ionicons/svg/md-baseball.js",
    "revision": "b33fbb4084954c6d769b39e93a50f672"
  },
  {
    "url": "build/ionicons/svg/md-basket.js",
    "revision": "9f3f5df4dce70426acd349a95771389b"
  },
  {
    "url": "build/ionicons/svg/md-basketball.js",
    "revision": "42971895710aac2ca3c28a891b2948cb"
  },
  {
    "url": "build/ionicons/svg/md-battery-charging.js",
    "revision": "2f4b35804578fa6c6aa25746d6f912c7"
  },
  {
    "url": "build/ionicons/svg/md-battery-dead.js",
    "revision": "2b5d24084d8350510c1df4230d0e6b07"
  },
  {
    "url": "build/ionicons/svg/md-battery-full.js",
    "revision": "db1c2cd9463c80cd689fb4b70eeffd65"
  },
  {
    "url": "build/ionicons/svg/md-beaker.js",
    "revision": "3dc3064a0b523849d96d339fa4744b00"
  },
  {
    "url": "build/ionicons/svg/md-beer.js",
    "revision": "e1407d28fd4efab29c62937210ce4093"
  },
  {
    "url": "build/ionicons/svg/md-bicycle.js",
    "revision": "cc98e813528a138949af210beb99c0f4"
  },
  {
    "url": "build/ionicons/svg/md-bluetooth.js",
    "revision": "75a50b40771f666dbecb3efc6563838b"
  },
  {
    "url": "build/ionicons/svg/md-boat.js",
    "revision": "a2c0cfc3c2efd3c8562ec442b025e307"
  },
  {
    "url": "build/ionicons/svg/md-body.js",
    "revision": "0236d9c4ad0903a2858de7b331cbc24d"
  },
  {
    "url": "build/ionicons/svg/md-bonfire.js",
    "revision": "04994f46b2e2635a7024592501bbb5b7"
  },
  {
    "url": "build/ionicons/svg/md-book.js",
    "revision": "012243ffd8878de8f09fe88c8d2fb556"
  },
  {
    "url": "build/ionicons/svg/md-bookmark.js",
    "revision": "ae7a393153bfd44b26be1c6955c866fb"
  },
  {
    "url": "build/ionicons/svg/md-bookmarks.js",
    "revision": "e8637b79234569aa1eb00945bba4ae8e"
  },
  {
    "url": "build/ionicons/svg/md-bowtie.js",
    "revision": "34d991c76e6a66e8e005a8812a3c1878"
  },
  {
    "url": "build/ionicons/svg/md-briefcase.js",
    "revision": "04c1b820731d79a17795670320263b32"
  },
  {
    "url": "build/ionicons/svg/md-browsers.js",
    "revision": "f8cf5b90bbbe83ef25d2c04c5b6a1d64"
  },
  {
    "url": "build/ionicons/svg/md-brush.js",
    "revision": "12beb676c10c4017f53072116f89a02d"
  },
  {
    "url": "build/ionicons/svg/md-bug.js",
    "revision": "2bc923669c9e164c28079eb0981b2827"
  },
  {
    "url": "build/ionicons/svg/md-build.js",
    "revision": "df186f3a2f5fd6a0ecc3ca5f3cfe4bdc"
  },
  {
    "url": "build/ionicons/svg/md-bulb.js",
    "revision": "400f3961bf21553115e8cf99e29d72dc"
  },
  {
    "url": "build/ionicons/svg/md-bus.js",
    "revision": "bbf0c5152202f0567dc14e4157247afe"
  },
  {
    "url": "build/ionicons/svg/md-cafe.js",
    "revision": "58b45df591dac43f45dc7f2f9246ee52"
  },
  {
    "url": "build/ionicons/svg/md-calculator.js",
    "revision": "942d5c6ff570545d34a646db8466e885"
  },
  {
    "url": "build/ionicons/svg/md-calendar.js",
    "revision": "71a783e37d12ea9a8a67d14ad0fb6e56"
  },
  {
    "url": "build/ionicons/svg/md-call.js",
    "revision": "9eb50f5fbef0caf25e0294de5de51859"
  },
  {
    "url": "build/ionicons/svg/md-camera.js",
    "revision": "71ba2fd047b473b94053e8e1de81af80"
  },
  {
    "url": "build/ionicons/svg/md-car.js",
    "revision": "23f46e046401970e143f24c0a4415490"
  },
  {
    "url": "build/ionicons/svg/md-card.js",
    "revision": "1312e8cadc5f8cda5ba3a9a4fa078f09"
  },
  {
    "url": "build/ionicons/svg/md-cart.js",
    "revision": "701687f68ee08372f3f8c7af505098f0"
  },
  {
    "url": "build/ionicons/svg/md-cash.js",
    "revision": "c7f6724c7b5f0d747309c383fdd616cf"
  },
  {
    "url": "build/ionicons/svg/md-chatboxes.js",
    "revision": "67a807db9f9f4ba2b607a12438707769"
  },
  {
    "url": "build/ionicons/svg/md-chatbubbles.js",
    "revision": "586bdbb1ea05206eb70082854b3778b0"
  },
  {
    "url": "build/ionicons/svg/md-checkbox-outline.js",
    "revision": "93e523591b1088d2651c00c7fc34c8e8"
  },
  {
    "url": "build/ionicons/svg/md-checkbox.js",
    "revision": "3566ecca3ddfaf59fdaac59aa24e4e03"
  },
  {
    "url": "build/ionicons/svg/md-checkmark-circle-outline.js",
    "revision": "b22c8a76969046f542d9550153e4816d"
  },
  {
    "url": "build/ionicons/svg/md-checkmark-circle.js",
    "revision": "c1383250cd1a85ef729f0d3a8b1e7af9"
  },
  {
    "url": "build/ionicons/svg/md-checkmark.js",
    "revision": "9d701e55e65a080ccf7da93999ff0a12"
  },
  {
    "url": "build/ionicons/svg/md-clipboard.js",
    "revision": "f2bddbb3de637255ef98f9f78542c35f"
  },
  {
    "url": "build/ionicons/svg/md-clock.js",
    "revision": "2c6d87d15c6faa286299de8aaf8a2f20"
  },
  {
    "url": "build/ionicons/svg/md-close-circle.js",
    "revision": "a20a94978d93d4603df9591f05fc3082"
  },
  {
    "url": "build/ionicons/svg/md-close.js",
    "revision": "ccf25f498bfd3c4d46ff3512d0e4bff8"
  },
  {
    "url": "build/ionicons/svg/md-cloud-circle.js",
    "revision": "54c022dab6128f63761dd8611147438e"
  },
  {
    "url": "build/ionicons/svg/md-cloud-done.js",
    "revision": "95642c2f2485886e049f865ad52f38df"
  },
  {
    "url": "build/ionicons/svg/md-cloud-download.js",
    "revision": "eed470772524860060f9f9c61d6c1d73"
  },
  {
    "url": "build/ionicons/svg/md-cloud-outline.js",
    "revision": "71b11c534e326b5122aaca2b506062f8"
  },
  {
    "url": "build/ionicons/svg/md-cloud-upload.js",
    "revision": "a7efab92b6edbccc9b9bc9ed0bf2165d"
  },
  {
    "url": "build/ionicons/svg/md-cloud.js",
    "revision": "b99b0a4ea2781d5ea5d0d9aabf7cb5d5"
  },
  {
    "url": "build/ionicons/svg/md-cloudy-night.js",
    "revision": "da8274a04d5ac9b3c8c4992d6c50d882"
  },
  {
    "url": "build/ionicons/svg/md-cloudy.js",
    "revision": "bffe0b6b2645490063190aa3b17c5e86"
  },
  {
    "url": "build/ionicons/svg/md-code-download.js",
    "revision": "2a7d087d98d54e9d0fef6475acec70bd"
  },
  {
    "url": "build/ionicons/svg/md-code-working.js",
    "revision": "973db59392e4af211bf85646ef28d31d"
  },
  {
    "url": "build/ionicons/svg/md-code.js",
    "revision": "680361f5ee755573931b3cb9ceeb23e2"
  },
  {
    "url": "build/ionicons/svg/md-cog.js",
    "revision": "c3a2aa2b23f1857333f0f60f86149f0e"
  },
  {
    "url": "build/ionicons/svg/md-color-fill.js",
    "revision": "dac5f6d160db2c58159b8545fe38145a"
  },
  {
    "url": "build/ionicons/svg/md-color-filter.js",
    "revision": "5efb10d831383a5e5f7f7d077e4fbbd7"
  },
  {
    "url": "build/ionicons/svg/md-color-palette.js",
    "revision": "03abedbe5255964a7a151e7efcd5d4d9"
  },
  {
    "url": "build/ionicons/svg/md-color-wand.js",
    "revision": "64027e143099a102df8e192e40ee7af1"
  },
  {
    "url": "build/ionicons/svg/md-compass.js",
    "revision": "da22eb24ccf6726472573e08d4785aaf"
  },
  {
    "url": "build/ionicons/svg/md-construct.js",
    "revision": "9bd1038c7e81caaed14ae6858d6c80a2"
  },
  {
    "url": "build/ionicons/svg/md-contact.js",
    "revision": "d93e24164593dcb0c4e1d0986496b121"
  },
  {
    "url": "build/ionicons/svg/md-contacts.js",
    "revision": "4b590d5858958e89e89f06f6e9070ee1"
  },
  {
    "url": "build/ionicons/svg/md-contract.js",
    "revision": "191a5836bde704e5d6f4c499714bbfe6"
  },
  {
    "url": "build/ionicons/svg/md-contrast.js",
    "revision": "f4ad0666658245ba0109fb3ea688d832"
  },
  {
    "url": "build/ionicons/svg/md-copy.js",
    "revision": "c0cc645671a56ff8ecb48cbc8cd89c96"
  },
  {
    "url": "build/ionicons/svg/md-create.js",
    "revision": "60f9f5138e5bf2956b1f0abe319630e9"
  },
  {
    "url": "build/ionicons/svg/md-crop.js",
    "revision": "4df6314c2adf096971133201bc0dd1db"
  },
  {
    "url": "build/ionicons/svg/md-cube.js",
    "revision": "6f480362c650ae848a223ae7518524c9"
  },
  {
    "url": "build/ionicons/svg/md-cut.js",
    "revision": "95926676c5ef2bfb8e0d959225467979"
  },
  {
    "url": "build/ionicons/svg/md-desktop.js",
    "revision": "4fc0e2ee04cc279132f4896de1c8bd34"
  },
  {
    "url": "build/ionicons/svg/md-disc.js",
    "revision": "0165afe2ce19c337892be97fea4b8330"
  },
  {
    "url": "build/ionicons/svg/md-document.js",
    "revision": "f41498484377e51d3125ef5b5bef5059"
  },
  {
    "url": "build/ionicons/svg/md-done-all.js",
    "revision": "8d63783036950d11ab580a0fbdec1bd9"
  },
  {
    "url": "build/ionicons/svg/md-download.js",
    "revision": "0d1ec5566befe90bd25c63f12c93d745"
  },
  {
    "url": "build/ionicons/svg/md-easel.js",
    "revision": "deffc4ae239952ce3e7f6c03fa062fae"
  },
  {
    "url": "build/ionicons/svg/md-egg.js",
    "revision": "64e890585ce2738d6a77064b2cc1e478"
  },
  {
    "url": "build/ionicons/svg/md-exit.js",
    "revision": "36347cdd02030338689db14a1eeda957"
  },
  {
    "url": "build/ionicons/svg/md-expand.js",
    "revision": "b1ef26e2304e01cf1643917906ed5b4b"
  },
  {
    "url": "build/ionicons/svg/md-eye-off.js",
    "revision": "a40bef2ab8287ec8311a539f24b2700b"
  },
  {
    "url": "build/ionicons/svg/md-eye.js",
    "revision": "52d82f878f26f38234b91135aeb16031"
  },
  {
    "url": "build/ionicons/svg/md-fastforward.js",
    "revision": "8bb7dd33c93215bc2faac69da7d6d3b9"
  },
  {
    "url": "build/ionicons/svg/md-female.js",
    "revision": "318eeb77fa2b20f4dfc8296f4fc7a430"
  },
  {
    "url": "build/ionicons/svg/md-filing.js",
    "revision": "5bb2b4fc43a02665e288fd187df716ed"
  },
  {
    "url": "build/ionicons/svg/md-film.js",
    "revision": "1723e52136f36c6303b06a3978a15445"
  },
  {
    "url": "build/ionicons/svg/md-finger-print.js",
    "revision": "11abf1a33257aa1351d63687244ea642"
  },
  {
    "url": "build/ionicons/svg/md-flag.js",
    "revision": "412e1648e60db359802badc2e97b5a0b"
  },
  {
    "url": "build/ionicons/svg/md-flame.js",
    "revision": "8563d44b3aa1c52bd01fb08a6ec952a3"
  },
  {
    "url": "build/ionicons/svg/md-flash.js",
    "revision": "34f4e1c3ee86f864862492dbb4f1480f"
  },
  {
    "url": "build/ionicons/svg/md-flask.js",
    "revision": "e965098be878cdc434f1494349d420d9"
  },
  {
    "url": "build/ionicons/svg/md-flower.js",
    "revision": "e501e61165306c5bb4ecd336b672d746"
  },
  {
    "url": "build/ionicons/svg/md-folder-open.js",
    "revision": "e29e43d94496a5a3d9c77acbe24fc7dc"
  },
  {
    "url": "build/ionicons/svg/md-folder.js",
    "revision": "ec178e253ff7cd8b3bda8a0edc425e13"
  },
  {
    "url": "build/ionicons/svg/md-football.js",
    "revision": "aa17ae3af83e4a35daa9518bc4c9172d"
  },
  {
    "url": "build/ionicons/svg/md-funnel.js",
    "revision": "7b59e2b296440f8da7b1ae7e493273e3"
  },
  {
    "url": "build/ionicons/svg/md-game-controller-a.js",
    "revision": "64ceb047097a74e89f05084cfabbc111"
  },
  {
    "url": "build/ionicons/svg/md-game-controller-b.js",
    "revision": "0b751361eadf91682f99dab7f7809901"
  },
  {
    "url": "build/ionicons/svg/md-git-branch.js",
    "revision": "6a287a8611e8c07405af6de5a0986181"
  },
  {
    "url": "build/ionicons/svg/md-git-commit.js",
    "revision": "139dcaf32827c3e8df6e7c867787385d"
  },
  {
    "url": "build/ionicons/svg/md-git-compare.js",
    "revision": "cf100960bd756296d15d1d3df2c0300f"
  },
  {
    "url": "build/ionicons/svg/md-git-merge.js",
    "revision": "4e9bc5cd165e434ed4ccb30b88655390"
  },
  {
    "url": "build/ionicons/svg/md-git-network.js",
    "revision": "b4176a116b8d6e14c7a1fd4a6f94b1fa"
  },
  {
    "url": "build/ionicons/svg/md-git-pull-request.js",
    "revision": "3a9546ad7a15e040c87078a27fcb4474"
  },
  {
    "url": "build/ionicons/svg/md-glasses.js",
    "revision": "fdf0beb7258ff2ff7a02ec1eaf7035fa"
  },
  {
    "url": "build/ionicons/svg/md-globe.js",
    "revision": "fa6454fa3a3b0cd94072036e6f4d8908"
  },
  {
    "url": "build/ionicons/svg/md-grid.js",
    "revision": "0a25b71140a5e2113e858cc3033f833a"
  },
  {
    "url": "build/ionicons/svg/md-hammer.js",
    "revision": "f0cf6fb38a86366a74a349538d699d6d"
  },
  {
    "url": "build/ionicons/svg/md-hand.js",
    "revision": "664fe9d6b3d317a1a7d8c869806d4b02"
  },
  {
    "url": "build/ionicons/svg/md-happy.js",
    "revision": "f20839db132b0bc65faa20e0484bb7fb"
  },
  {
    "url": "build/ionicons/svg/md-headset.js",
    "revision": "1dc4b337fe16568c9acdfded0da42bc0"
  },
  {
    "url": "build/ionicons/svg/md-heart-outline.js",
    "revision": "511b3b025165296c929f15aa889e9985"
  },
  {
    "url": "build/ionicons/svg/md-heart.js",
    "revision": "e3e35367b1a8459fed498605ffb973ab"
  },
  {
    "url": "build/ionicons/svg/md-help-buoy.js",
    "revision": "45494e16d0259a37aabc616c4c40b744"
  },
  {
    "url": "build/ionicons/svg/md-help-circle.js",
    "revision": "c0231cd315a29f637c921c5faf303f8e"
  },
  {
    "url": "build/ionicons/svg/md-help.js",
    "revision": "9457e30d548fd3341ee164f0f14bdf6c"
  },
  {
    "url": "build/ionicons/svg/md-home.js",
    "revision": "0677d2ed1aa69c2368f5915551e0c2dd"
  },
  {
    "url": "build/ionicons/svg/md-hourglass.js",
    "revision": "dcdbbd1678b8cf1af46f7b526eb150a3"
  },
  {
    "url": "build/ionicons/svg/md-ice-cream.js",
    "revision": "74bd709ec3987f4b42aa927a97bd45f6"
  },
  {
    "url": "build/ionicons/svg/md-image.js",
    "revision": "db62fa5b032630cfd6581de68428a959"
  },
  {
    "url": "build/ionicons/svg/md-images.js",
    "revision": "2e056816357936632e9d647ba9cd64ee"
  },
  {
    "url": "build/ionicons/svg/md-infinite.js",
    "revision": "2d4b69153f19f8b844ce4241e78a6c1c"
  },
  {
    "url": "build/ionicons/svg/md-information-circle.js",
    "revision": "cb56c8d8356bf692a2318deb184617fd"
  },
  {
    "url": "build/ionicons/svg/md-information.js",
    "revision": "626f2471b712ccbabfc21b4a5ff1c645"
  },
  {
    "url": "build/ionicons/svg/md-ionic.js",
    "revision": "0677014403c159164a45e8851c3bdbbd"
  },
  {
    "url": "build/ionicons/svg/md-ionitron.js",
    "revision": "098b9cd32bd9f2fc2384d5512bb17095"
  },
  {
    "url": "build/ionicons/svg/md-jet.js",
    "revision": "e80597e0275238ccfd98cc40c3da3656"
  },
  {
    "url": "build/ionicons/svg/md-key.js",
    "revision": "6f39be208ba4be5f8cf487ee6b7464ab"
  },
  {
    "url": "build/ionicons/svg/md-keypad.js",
    "revision": "ce25a0557e2321862da06b2d519257e7"
  },
  {
    "url": "build/ionicons/svg/md-laptop.js",
    "revision": "f385775cc31a5f3006e1eaf501ab6eb0"
  },
  {
    "url": "build/ionicons/svg/md-leaf.js",
    "revision": "9a751bca508eb913b88a62341dc4c69e"
  },
  {
    "url": "build/ionicons/svg/md-link.js",
    "revision": "fbcf2e6721f39f2e355c8427c5441f59"
  },
  {
    "url": "build/ionicons/svg/md-list-box.js",
    "revision": "28e3ccc04fbc7d2bd8762a0626db11c4"
  },
  {
    "url": "build/ionicons/svg/md-list.js",
    "revision": "cf4f8d93ab329c889b36e326e85f5102"
  },
  {
    "url": "build/ionicons/svg/md-locate.js",
    "revision": "8950979c275b3155a6b5c7fc1c38464c"
  },
  {
    "url": "build/ionicons/svg/md-lock.js",
    "revision": "5c1c4bdc7f0398a5c5e9fdfddae3daed"
  },
  {
    "url": "build/ionicons/svg/md-log-in.js",
    "revision": "0a39482f0cbb12a06ed569083e4fd4b0"
  },
  {
    "url": "build/ionicons/svg/md-log-out.js",
    "revision": "357316fd25231c2f1a5164607d0f739c"
  },
  {
    "url": "build/ionicons/svg/md-magnet.js",
    "revision": "2bf7b7baf91a974b124dd7e15f029699"
  },
  {
    "url": "build/ionicons/svg/md-mail-open.js",
    "revision": "7775bb42e4ad12107142df7091a98a0a"
  },
  {
    "url": "build/ionicons/svg/md-mail.js",
    "revision": "4c92021c4f6c763f0bf6918d67148560"
  },
  {
    "url": "build/ionicons/svg/md-male.js",
    "revision": "4f252828b816679fe663b14aa33dce7c"
  },
  {
    "url": "build/ionicons/svg/md-man.js",
    "revision": "1fb9b375de6842b2a178658a214197f7"
  },
  {
    "url": "build/ionicons/svg/md-map.js",
    "revision": "d39aabff22f2c93696ec3d8dff7ca68c"
  },
  {
    "url": "build/ionicons/svg/md-medal.js",
    "revision": "14deef1fbc111026301570cd98a76921"
  },
  {
    "url": "build/ionicons/svg/md-medical.js",
    "revision": "1f0a2485fd66f32b0054a3fbc434d505"
  },
  {
    "url": "build/ionicons/svg/md-medkit.js",
    "revision": "28f303ed1fd33066f50bf3ac33edb5cd"
  },
  {
    "url": "build/ionicons/svg/md-megaphone.js",
    "revision": "9b646ffac4159f897afb579c1c7bdd12"
  },
  {
    "url": "build/ionicons/svg/md-menu.js",
    "revision": "43ae41de8870579fdc32b65cdc4d5a9f"
  },
  {
    "url": "build/ionicons/svg/md-mic-off.js",
    "revision": "dd7bf566b3c993c0d3059c397ba697d8"
  },
  {
    "url": "build/ionicons/svg/md-mic.js",
    "revision": "12d236d2c036f07afa4b5e5a1546a10f"
  },
  {
    "url": "build/ionicons/svg/md-microphone.js",
    "revision": "f95d19062efcc1e5f5e31d0184b73e20"
  },
  {
    "url": "build/ionicons/svg/md-moon.js",
    "revision": "936a54382e28a0f9a8c00cee70de78d1"
  },
  {
    "url": "build/ionicons/svg/md-more.js",
    "revision": "5a0c7932e347594520cabcb0a0d94a30"
  },
  {
    "url": "build/ionicons/svg/md-move.js",
    "revision": "b2e438c5db657381702542dfbf5b6c31"
  },
  {
    "url": "build/ionicons/svg/md-musical-note.js",
    "revision": "7388f3643d76ae3d9405c8f6f62056d6"
  },
  {
    "url": "build/ionicons/svg/md-musical-notes.js",
    "revision": "76d267cf28214ff5aa160bfda3b29884"
  },
  {
    "url": "build/ionicons/svg/md-navigate.js",
    "revision": "e3fd16bbb62723aee23073c1a9b635d6"
  },
  {
    "url": "build/ionicons/svg/md-notifications-off.js",
    "revision": "bb9dd4e9f18898e0bb849cf0c09c9701"
  },
  {
    "url": "build/ionicons/svg/md-notifications-outline.js",
    "revision": "143de8c0de32a427a7843420ea8848da"
  },
  {
    "url": "build/ionicons/svg/md-notifications.js",
    "revision": "1ec3d2216515be60e56b3cdcbdaa6032"
  },
  {
    "url": "build/ionicons/svg/md-nuclear.js",
    "revision": "23bad5fa8dbc79f76a0dda7097c2a1ab"
  },
  {
    "url": "build/ionicons/svg/md-nutrition.js",
    "revision": "f887ac165b27cbb51b2f1a75782de210"
  },
  {
    "url": "build/ionicons/svg/md-open.js",
    "revision": "0eab4fed1cb1cbc9eda3051f03fe3d5d"
  },
  {
    "url": "build/ionicons/svg/md-options.js",
    "revision": "d0caf2fea8082e08d29b4db863a03e24"
  },
  {
    "url": "build/ionicons/svg/md-outlet.js",
    "revision": "97a41452c6f3fbb7a1bc0b38e76e54bf"
  },
  {
    "url": "build/ionicons/svg/md-paper-plane.js",
    "revision": "c8cae1bde476e5a8755d08a20aa303be"
  },
  {
    "url": "build/ionicons/svg/md-paper.js",
    "revision": "318e195b42dfc7470b7fc87334eb6749"
  },
  {
    "url": "build/ionicons/svg/md-partly-sunny.js",
    "revision": "726cab751008dfa6c3beefb74b7442b8"
  },
  {
    "url": "build/ionicons/svg/md-pause.js",
    "revision": "4a7601522002a1357bf7c3c3b766ffe1"
  },
  {
    "url": "build/ionicons/svg/md-paw.js",
    "revision": "8645ec18c20b0a43056003fca25ae832"
  },
  {
    "url": "build/ionicons/svg/md-people.js",
    "revision": "e573a6964839efd7b45b904654b54ec2"
  },
  {
    "url": "build/ionicons/svg/md-person-add.js",
    "revision": "bc600e9991d903a50f37b4ac15b61d62"
  },
  {
    "url": "build/ionicons/svg/md-person.js",
    "revision": "be8fc7c81766bfb3660a5efdbdcbbae1"
  },
  {
    "url": "build/ionicons/svg/md-phone-landscape.js",
    "revision": "1b9f7948272f6d72d081aee2e779a5e5"
  },
  {
    "url": "build/ionicons/svg/md-phone-portrait.js",
    "revision": "f980a5bf93bc1af01207274eadaa3d6c"
  },
  {
    "url": "build/ionicons/svg/md-photos.js",
    "revision": "02875e0b22259e1c03157a5d42571418"
  },
  {
    "url": "build/ionicons/svg/md-pie.js",
    "revision": "7abed8d6d997ec9fac9661d5d7d0043a"
  },
  {
    "url": "build/ionicons/svg/md-pin.js",
    "revision": "ead93795225ce8cfa0940924e826906c"
  },
  {
    "url": "build/ionicons/svg/md-pint.js",
    "revision": "ee77b17fd6dd4b46e2b98ef1da14b8e8"
  },
  {
    "url": "build/ionicons/svg/md-pizza.js",
    "revision": "fc2e40f180e60b7d4998d4e5cf467df5"
  },
  {
    "url": "build/ionicons/svg/md-plane.js",
    "revision": "bf185bfe435670647f48e1ce1273b3b4"
  },
  {
    "url": "build/ionicons/svg/md-planet.js",
    "revision": "bc141af22f9490991887717311220f56"
  },
  {
    "url": "build/ionicons/svg/md-play.js",
    "revision": "a13c341bfdec1c017226112971e2207f"
  },
  {
    "url": "build/ionicons/svg/md-podium.js",
    "revision": "3deb190631a4d918576c6875881298f4"
  },
  {
    "url": "build/ionicons/svg/md-power.js",
    "revision": "31f1ea6459eb334a9ba8672936f6884b"
  },
  {
    "url": "build/ionicons/svg/md-pricetag.js",
    "revision": "e50cad7d5767b15a4b3b5aa47caf9c11"
  },
  {
    "url": "build/ionicons/svg/md-pricetags.js",
    "revision": "33d2b60221e6c1bbda00a30e1aca471f"
  },
  {
    "url": "build/ionicons/svg/md-print.js",
    "revision": "1b61d573b289db7ea8cd169b9a549f1e"
  },
  {
    "url": "build/ionicons/svg/md-pulse.js",
    "revision": "ef86345d1ebcb5befc2835820b595a5b"
  },
  {
    "url": "build/ionicons/svg/md-qr-scanner.js",
    "revision": "1691197c19517d5cdbcac7b466e37d25"
  },
  {
    "url": "build/ionicons/svg/md-quote.js",
    "revision": "b0e380dba6cdf7d53ead7e1065385e77"
  },
  {
    "url": "build/ionicons/svg/md-radio-button-off.js",
    "revision": "b9a016250026fe2e82b860600056ef16"
  },
  {
    "url": "build/ionicons/svg/md-radio-button-on.js",
    "revision": "91f7752fab791b1707ad237639f09427"
  },
  {
    "url": "build/ionicons/svg/md-radio.js",
    "revision": "4b7be95d82b737ef9b8232ee2be69c66"
  },
  {
    "url": "build/ionicons/svg/md-rainy.js",
    "revision": "c67774fafc3209aca1df98799ee8ac7f"
  },
  {
    "url": "build/ionicons/svg/md-recording.js",
    "revision": "61eb33c2c05a7ac91c1b774d1bfc3610"
  },
  {
    "url": "build/ionicons/svg/md-redo.js",
    "revision": "6b8d103d60ec9581dc3d45453b890ff6"
  },
  {
    "url": "build/ionicons/svg/md-refresh-circle.js",
    "revision": "01d7cf535334f8d3bfd7a8e97310abae"
  },
  {
    "url": "build/ionicons/svg/md-refresh.js",
    "revision": "90a7bdc8fff58886c9d3e7b4a253b65d"
  },
  {
    "url": "build/ionicons/svg/md-remove-circle.js",
    "revision": "f371bae3b0835ed65f981be59e810b88"
  },
  {
    "url": "build/ionicons/svg/md-remove.js",
    "revision": "6d3d66a0b248aadcfdae967149a0832e"
  },
  {
    "url": "build/ionicons/svg/md-reorder.js",
    "revision": "9696ae37b592a01b923b5b23a10fb61d"
  },
  {
    "url": "build/ionicons/svg/md-repeat.js",
    "revision": "94d4d72b364792d376040404b33b453e"
  },
  {
    "url": "build/ionicons/svg/md-resize.js",
    "revision": "483628c3bdfecf6940ed9edc96014823"
  },
  {
    "url": "build/ionicons/svg/md-restaurant.js",
    "revision": "6e0d259c0f3184a3f2cfa4ddf0108894"
  },
  {
    "url": "build/ionicons/svg/md-return-left.js",
    "revision": "eda77a720988aaa87d82c64adf41df50"
  },
  {
    "url": "build/ionicons/svg/md-return-right.js",
    "revision": "de38145b0120346dc7cbc1f6e5240c4b"
  },
  {
    "url": "build/ionicons/svg/md-reverse-camera.js",
    "revision": "cca0640284cd88eddca3cd53311ec018"
  },
  {
    "url": "build/ionicons/svg/md-rewind.js",
    "revision": "a029c737a0c94cf239bd57ba9e36c954"
  },
  {
    "url": "build/ionicons/svg/md-ribbon.js",
    "revision": "1cc07bc602e23c21dd856185bee26bb4"
  },
  {
    "url": "build/ionicons/svg/md-rose.js",
    "revision": "95081bf8e9fd51123f28c6c9ea127fd0"
  },
  {
    "url": "build/ionicons/svg/md-sad.js",
    "revision": "659f85a7d24eb5c581fb0485fe927304"
  },
  {
    "url": "build/ionicons/svg/md-school.js",
    "revision": "1e68e312b761c5be3e64b469c0becff6"
  },
  {
    "url": "build/ionicons/svg/md-search.js",
    "revision": "fca940177c739d5ce52fa0c36d838762"
  },
  {
    "url": "build/ionicons/svg/md-send.js",
    "revision": "52cab5ce6b21e18fd63ad14a512e4e09"
  },
  {
    "url": "build/ionicons/svg/md-settings.js",
    "revision": "5ed7f150fbc921ffd9b3605a701cb8d6"
  },
  {
    "url": "build/ionicons/svg/md-share-alt.js",
    "revision": "8ffe7306ae732b01a9677bcecc49d7c3"
  },
  {
    "url": "build/ionicons/svg/md-share.js",
    "revision": "5a8402de6b3baae8309f0551cdc9014b"
  },
  {
    "url": "build/ionicons/svg/md-shirt.js",
    "revision": "82cc0728ade773b69112edf9a02091e3"
  },
  {
    "url": "build/ionicons/svg/md-shuffle.js",
    "revision": "9e77a3742a02493d6bfa1614726e4733"
  },
  {
    "url": "build/ionicons/svg/md-skip-backward.js",
    "revision": "cec9c468ca3aa6f6a7e9d37692f51a01"
  },
  {
    "url": "build/ionicons/svg/md-skip-forward.js",
    "revision": "cd589fe0569095b38ce57e9e79c145aa"
  },
  {
    "url": "build/ionicons/svg/md-snow.js",
    "revision": "084c036e34e376cd1fd26bba6fd07e63"
  },
  {
    "url": "build/ionicons/svg/md-speedometer.js",
    "revision": "ba373ace3e7498254cbf35da8354a792"
  },
  {
    "url": "build/ionicons/svg/md-square-outline.js",
    "revision": "8d4b6ad54a00cea59c4fb9bfea10f1ab"
  },
  {
    "url": "build/ionicons/svg/md-square.js",
    "revision": "dbf151afaef8552c62434d194830aa99"
  },
  {
    "url": "build/ionicons/svg/md-star-half.js",
    "revision": "256b9f6ff7898214a75db8bd03786533"
  },
  {
    "url": "build/ionicons/svg/md-star-outline.js",
    "revision": "a758144507263798466b40497865b1f0"
  },
  {
    "url": "build/ionicons/svg/md-star.js",
    "revision": "667bb4d09a3e6f291883fc6a95b5f18a"
  },
  {
    "url": "build/ionicons/svg/md-stats.js",
    "revision": "921af4cce55b08b95795025cf1c868a3"
  },
  {
    "url": "build/ionicons/svg/md-stopwatch.js",
    "revision": "87722c98d42a023fc94f6c72bb2b18db"
  },
  {
    "url": "build/ionicons/svg/md-subway.js",
    "revision": "a301d89d5a53aaa3cf8b12caf97f6b0b"
  },
  {
    "url": "build/ionicons/svg/md-sunny.js",
    "revision": "77929b1bc13c3a62e19e068018efc70d"
  },
  {
    "url": "build/ionicons/svg/md-swap.js",
    "revision": "5d4c2c021b498900752e6def73db81cd"
  },
  {
    "url": "build/ionicons/svg/md-switch.js",
    "revision": "20693525640269ca3fcb14c2c75a1e1e"
  },
  {
    "url": "build/ionicons/svg/md-sync.js",
    "revision": "4e46c2f59515f1025de49e432d232446"
  },
  {
    "url": "build/ionicons/svg/md-tablet-landscape.js",
    "revision": "2262682fa18b3f44f06ca42f879efe51"
  },
  {
    "url": "build/ionicons/svg/md-tablet-portrait.js",
    "revision": "09996cf660e663dcd4ba0f3a62137d20"
  },
  {
    "url": "build/ionicons/svg/md-tennisball.js",
    "revision": "1766bc4ce052242805f93d71076cac2b"
  },
  {
    "url": "build/ionicons/svg/md-text.js",
    "revision": "be7397ecd982a9d25e010a214ccc92ca"
  },
  {
    "url": "build/ionicons/svg/md-thermometer.js",
    "revision": "49f6c515fc48a02f85d131d2a2a28cc9"
  },
  {
    "url": "build/ionicons/svg/md-thumbs-down.js",
    "revision": "736d9430aca4c0df85590b53b5cf4930"
  },
  {
    "url": "build/ionicons/svg/md-thumbs-up.js",
    "revision": "bcff6f87b5359d19e0289f744d5fef51"
  },
  {
    "url": "build/ionicons/svg/md-thunderstorm.js",
    "revision": "c9ecd7a3c165308965a7d8af3ff5a795"
  },
  {
    "url": "build/ionicons/svg/md-time.js",
    "revision": "2060cf3007b3cac6dfcb977994eb2f72"
  },
  {
    "url": "build/ionicons/svg/md-timer.js",
    "revision": "3f1b4592ec1353dfa954cf6202c107ee"
  },
  {
    "url": "build/ionicons/svg/md-train.js",
    "revision": "0c28ea142fbd93eff6463a923a0d7433"
  },
  {
    "url": "build/ionicons/svg/md-transgender.js",
    "revision": "d6e2f8df4b9a1c5629661cbe5246a5ad"
  },
  {
    "url": "build/ionicons/svg/md-trash.js",
    "revision": "fcff292dd647871da3bae475a40185e2"
  },
  {
    "url": "build/ionicons/svg/md-trending-down.js",
    "revision": "62fb3b06323e25f5de84b0112121010b"
  },
  {
    "url": "build/ionicons/svg/md-trending-up.js",
    "revision": "84bb355e54c42476b59f856e31dd8aa9"
  },
  {
    "url": "build/ionicons/svg/md-trophy.js",
    "revision": "f204f76e9794a009d04281e51afcc263"
  },
  {
    "url": "build/ionicons/svg/md-umbrella.js",
    "revision": "b18c0e33f7bb791e12aac5d137b73386"
  },
  {
    "url": "build/ionicons/svg/md-undo.js",
    "revision": "48ddc18569f6bd883d403d98324ec5c3"
  },
  {
    "url": "build/ionicons/svg/md-unlock.js",
    "revision": "d1c33f23668d3e5d34a694cb096c9bb7"
  },
  {
    "url": "build/ionicons/svg/md-videocam.js",
    "revision": "10453be79806905c20e23e2e8df79ce7"
  },
  {
    "url": "build/ionicons/svg/md-volume-down.js",
    "revision": "eb06a11139be2ac0149adc8fff36a222"
  },
  {
    "url": "build/ionicons/svg/md-volume-mute.js",
    "revision": "3aeba901c4caee04eabc6debd0ac631d"
  },
  {
    "url": "build/ionicons/svg/md-volume-off.js",
    "revision": "4f82a0ecba37073e7038e0604701e74e"
  },
  {
    "url": "build/ionicons/svg/md-volume-up.js",
    "revision": "f6a3fb86206e0ff0fa9a92e11e2dde58"
  },
  {
    "url": "build/ionicons/svg/md-walk.js",
    "revision": "8d82b0bd3974cf4a8e45456711fb3958"
  },
  {
    "url": "build/ionicons/svg/md-warning.js",
    "revision": "9999b8ca1b72b4d66b4426e55a5b7f67"
  },
  {
    "url": "build/ionicons/svg/md-watch.js",
    "revision": "71ee5f1ccaf01cd99ac1c266b6a92b89"
  },
  {
    "url": "build/ionicons/svg/md-water.js",
    "revision": "59ab4263bcedcb7c9e5ec2f81f1422e6"
  },
  {
    "url": "build/ionicons/svg/md-wifi.js",
    "revision": "b9f40137b30e3e01d75dd97536170e14"
  },
  {
    "url": "build/ionicons/svg/md-wine.js",
    "revision": "88e9aa288ac30f6ba59c109f5b8ec7ed"
  },
  {
    "url": "build/ionicons/svg/md-woman.js",
    "revision": "2bf66be2e1f74a70a5588a41decbc884"
  },
  {
    "url": "build/ionicons/yht1hroz.js",
    "revision": "7463c633ca12ae98dcd3d879c2fd1883"
  },
  {
    "url": "cheatsheet.html",
    "revision": "451c0ded4558db567956f37345dcfea0"
  },
  {
    "url": "index.html",
    "revision": "82ea019c91ee2e53357359d82d1d00ef"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
