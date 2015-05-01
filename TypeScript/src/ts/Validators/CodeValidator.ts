var codeRegexp = /^([0-9]|[a-z]){5}-([0-9]|[a-z]){5}-([0-9]|[a-z]){5}$/ig;
class CodeValidator implements StringValidator {
    isAcceptable(s: string) {
        return codeRegexp.test(s);
    }
}