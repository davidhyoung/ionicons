exports.config = {
  namespace: 'DocsSite',
  srcDir: 'site/',
  wwwDir: '../../docs/',
  copy: [
    { src: '../../../dist/css', dest: 'build/css' },
    { src: '../../../dist/fonts', dest: 'build/fonts' },
    { src: '../../../dist/ionicons/data.json', dest: 'build/data.json' }
  ],
  serviceWorker: false
};
