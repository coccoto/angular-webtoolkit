export interface ViewMenuInterface {
    system_name: string,
    screen_name: string,
    origin: string,
    path: string,
}
export const initializeViewMenu = ():ViewMenuInterface => {
    return {
        system_name: '',
        screen_name: '',
        origin: '',
        path: '',
    }
}