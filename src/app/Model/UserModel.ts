
export  class UserModel
{
    public Username: string
    public FirstName:string
    public LastName:string
    public EmailID:string
    public Password:string
    public ResetPassword:string
    public GSTNumber:string
    public Industry:string
    public BuisunessNature:string
    public Address:string
    public Mobile: string
    public LandLine:string
    public IsActive:boolean
    public CompanyName:string
}

export class UserValidationStatus
{
    constructor(defaultValue:boolean)
    {
        this.passwordErr = defaultValue
        this.UserLenghtErr = defaultValue
        this.HttpStatus = defaultValue
        this.MustField = defaultValue
        this.EmailErr = defaultValue
        this.MobileErr = defaultValue
    }
    public passwordErr :boolean
    public UserLenghtErr: boolean
    public HttpStatus:boolean
    public MustField:boolean
    public EmailErr:boolean
    public FormErr:boolean
    public MobileErr:boolean
}

export class HttpRes<T>
{
    public status:boolean
    public Message:string
    public Data:T
}
