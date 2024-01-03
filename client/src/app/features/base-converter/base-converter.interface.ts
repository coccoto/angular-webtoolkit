export interface BaseInputFormInterface {
    binary: string;
    octal: string;
    decimal: string;
    hexadecimal: string;
  }
  
export const initializeBaseInputForm = ():BaseInputFormInterface => {
    return {
        binary: '',
        octal: '',
        decimal: '',
        hexadecimal: '',
    }
}