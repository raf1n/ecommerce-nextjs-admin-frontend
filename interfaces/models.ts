//here we will declare our data models interfaces or in easy way type of our all datas in our website

export interface MyFetchInterface {
    res: any,
    err: any
}
export interface IUser {
    _id: string
    email?: string
    avatar: string
    token: string
    tokenType: string
    displayName: string
    password: string
    role: string
    fullName: string
    slug: string
    createdAt?: string
    updatedAt: string
}