export interface BaseInputFormInterface {
    binary: string;
    octal: string;
    decimal: string;
    hexadecimal: string;
}
export const initBaseInputForm = ():BaseInputFormInterface => {
    return {
        binary: '',
        octal: '',
        decimal: '',
        hexadecimal: '',
    }
}