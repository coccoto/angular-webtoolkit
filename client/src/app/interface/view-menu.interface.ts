export interface ViewMenuInterface {
    system_name: string,
    screen_name: string,
    origin: string,
    path: string,
    location_no: number,
}
export const initializeViewMenu = ():ViewMenuInterface => {
    return {
        system_name: '',
        screen_name: '',
        origin: '',
        path: '',
        location_no: 0,
    }
}