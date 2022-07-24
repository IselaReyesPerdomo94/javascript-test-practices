const palindrome = require('../src/string-practices');

describe('palindrome', () => {
    it('should return true', () => {
        expect(palindrome('race car')).toBeTrue()
    });

    it('should return false', () => {
        expect(palindrome('not a palindrome')).toBeFalse()
    });

    it('should return true', () => {
        expect(palindrome('A man, a plan, a canal. Panama')).toBeTrue()
    });

    it('should return false', () => {
        expect(palindrome('almostomla')).toBeFalse()
    });
})