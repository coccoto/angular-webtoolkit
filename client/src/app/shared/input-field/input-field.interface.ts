export interface InputFieldResultInterface {
    elemName: string,
    inputValue: string,
}
export const initializeInputFieldResult = ():InputFieldResultInterface => {
    return {
        elemName: '',
        inputValue: '',
    }
}