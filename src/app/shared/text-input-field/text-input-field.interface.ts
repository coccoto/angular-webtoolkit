export interface TextInputFieldResultInterface {
    elemName: string,
    inputValue: string,
}
export const initializeTextInputFieldResult = ():TextInputFieldResultInterface => {
    return {
        elemName: '',
        inputValue: '',
    }
}