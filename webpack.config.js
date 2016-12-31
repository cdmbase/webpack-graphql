var weight = 500;

function dependencies(settings) {
  return {
    devDependencies: {
      'graphql-tag' : '^1.1.2'
    }
  };
}

function config() {
  return {
    loaders: [{ test: /\.(graphql|gql)$/, loader: 'graphql-tag/loader' }],
    extensions: ['.graphql']
  };
}
