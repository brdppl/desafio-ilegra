const proxy = [
    {
        context: '/api',
        target: 'https://swapi.co/api',
        pathRewrite: {'^/api' : ''}
    }
]

  module.exports = proxy