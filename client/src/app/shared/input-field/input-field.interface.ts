export interface InputFieldResultInterface {
    elemName: string,
    inputValue: string,
}
export const initInputFieldResult = ():InputFieldResultInterface => {
    return {
        elemName: '',
        inputValue: '',
    }
}