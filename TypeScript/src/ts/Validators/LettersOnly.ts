var lettersRegexp = /^[A-Za-z]+$/;
class LettersOnlyValidator implements StringValidator {
    isAcceptable(s: string) {
        return lettersRegexp.test(s);
    }
}
