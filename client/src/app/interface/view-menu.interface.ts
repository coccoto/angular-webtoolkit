export interface ViewMenuInterface {
    system_name: string,
    screen_name: string,
    origin: string,
    path: string,
    section_no: number,
}
export const initViewMenu = (): ViewMenuInterface => {
    return {
        system_name: '',
        screen_name: '',
        origin: '',
        path: '',
        section_no: 0,
    }
}