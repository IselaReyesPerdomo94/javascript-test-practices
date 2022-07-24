const revertTheWord = require('../src/revert-word')

describe('revertTheWord', () => {
    it('should return ana', () => {
        expect(revertTheWord('ana')).toBe('ana')
    });

    it('should return tpircSavaJ', () => {
        expect(revertTheWord('JavaScript')).toBe('tpircSavaJ')
    });

    it('should return sever la nóicaro anu se atsE', () => {
        expect(revertTheWord('Esta es una oración al reves')).toBe('sever la nóicaro anu se atsE')
    });

    it('should return warning if not text was passed', () => {
        expect(revertTheWord('')).toBe('Por favor ingresa un texto')
    });
});