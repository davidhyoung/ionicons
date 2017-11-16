exports.config = {
  namespace: 'DocsSite',
  srcDir: 'site/',
  wwwDir: '../../docs/',
  copy: [
    { src: '../../../dist/ionicons', dest: 'ionicons' },
    { src: '../../../dist/ionicons.js', dest: 'ionicons.js' },
  ]
};
