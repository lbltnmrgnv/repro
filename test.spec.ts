import { allure } from "allure-mocha/dist/MochaAllureReporter"

describe('Test suite', () => {

    beforeEach('Set up', () => {
        allure.createStep('beforeEach hook step', () => { })()
    })

    afterEach('Tear down', () => {
        allure.createStep('afterEach hook step', () => { })()
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