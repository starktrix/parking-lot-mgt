// ValueObject

interface IAuthDetails {
    email: string
    password: string
}

export class AuthDetails {
    private props: IAuthDetails
    constructor(private email: string, private password: string) {
        this.props = {} as IAuthDetails
        this.props.email = email
        this.props.password = password
    }

    getValue() {
        return this.props
    }
}