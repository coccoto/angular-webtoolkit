export interface ApiResponseInterface<T> {
    result: T[]
    code: string
    message: string
}