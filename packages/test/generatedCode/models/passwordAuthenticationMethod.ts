import {AuthenticationMethod} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PasswordAuthenticationMethod extends AuthenticationMethod implements Parsable {
    /** The date and time when this password was last updated. This property is currently not populated. Read-only. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. */
    private _createdDateTime?: Date | undefined;
    /** The creationDateTime property */
    private _creationDateTime?: Date | undefined;
    /** For security, the password is always returned as null from a LIST or GET operation. */
    private _password?: string | undefined;
    /**
     * Instantiates a new passwordAuthenticationMethod and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdDateTime property value. The date and time when this password was last updated. This property is currently not populated. Read-only. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. The date and time when this password was last updated. This property is currently not populated. Read-only. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * Gets the creationDateTime property value. The creationDateTime property
     * @returns a Date
     */
    public get creationDateTime() {
        return this._creationDateTime;
    };
    /**
     * Sets the creationDateTime property value. The creationDateTime property
     * @param value Value to set for the creationDateTime property.
     */
    public set creationDateTime(value: Date | undefined) {
        this._creationDateTime = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "creationDateTime": n => { this.creationDateTime = n.getDateValue(); },
            "password": n => { this.password = n.getStringValue(); },
        };
    };
    /**
     * Gets the password property value. For security, the password is always returned as null from a LIST or GET operation.
     * @returns a string
     */
    public get password() {
        return this._password;
    };
    /**
     * Sets the password property value. For security, the password is always returned as null from a LIST or GET operation.
     * @param value Value to set for the password property.
     */
    public set password(value: string | undefined) {
        this._password = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeDateValue("creationDateTime", this.creationDateTime);
        writer.writeStringValue("password", this.password);
    };
}
