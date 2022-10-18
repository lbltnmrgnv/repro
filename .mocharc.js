module.exports = {
    require: [
        'ts-node/register'
    ],
    spec: '*.spec.ts',
    reporter: 'allure-mocha',
    timeout: 10000,
}