exports.config = {
  namespace: 'ionicons',
  generateDistribution: true,
  generateWWW: false,
  distDir: 'dist/',
  srcDir: 'src/components/',
  emptyDistDir: false
};

exports.devServer = {
  root: 'docs',
  watchGlob: '**/**'
};
