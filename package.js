Package.describe({
    name: 'webpack:json',
    version: '1.0.1',
    summary: 'Integrate GRAPHQL import with Webpack',
    git: 'https://github.com/cdmbase/webpack-graphql.git',
    documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use('webpack:core-config@1.0.1');
  api.add_files(['webpack.config.js']);
});
