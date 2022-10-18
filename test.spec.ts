import { allure } from "allure-mocha/dist/MochaAllureReporter"

describe('Test suite', () => {

    before('Suite set up', () => {
        allure.createStep('before hook step', () => { })()
    })

    beforeEach('Set up', () => {
        allure.createStep('beforeEach hook step', () => { })()
    })

    afterEach('Tear down', () => {
        allure.createStep('afterEach hook step', () => { })()
    })

    after('Suite tear down', () => {
        allure.createStep('after hook step', () => { })()
    })

    it('first it', () => {
        allure.createStep('first it step', () => { })()
    })

    it('second it', () => {
        allure.createStep('second it step', () => { })()
    })

    it('third it', () => {
        allure.createStep('second it step', () => { })()
    })
})