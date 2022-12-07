import {AuthenticationMethodSignInState} from './authenticationMethodSignInState';
import {AuthenticationPhoneType} from './authenticationPhoneType';
import {AuthenticationMethod} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PhoneAuthenticationMethod extends AuthenticationMethod implements Parsable {
    /** The phone number to text or call for authentication. Phone numbers use the format '+<country code> <number>x<extension>', with extension optional. For example, +1 5555551234 or +1 5555551234x123 are valid. Numbers are rejected when creating/updating if they do not match the required format. */
    private _phoneNumber?: string | undefined;
    /** The phoneType property */
    private _phoneType?: AuthenticationPhoneType | undefined;
    /** The smsSignInState property */
    private _smsSignInState?: AuthenticationMethodSignInState | undefined;
    /**
     * Instantiates a new phoneAuthenticationMethod and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "phoneNumber": n => { this.phoneNumber = n.getStringValue(); },
            "phoneType": n => { this.phoneType = n.getEnumValue<AuthenticationPhoneType>(AuthenticationPhoneType); },
            "smsSignInState": n => { this.smsSignInState = n.getEnumValue<AuthenticationMethodSignInState>(AuthenticationMethodSignInState); },
        };
    };
    /**
     * Gets the phoneNumber property value. The phone number to text or call for authentication. Phone numbers use the format '+<country code> <number>x<extension>', with extension optional. For example, +1 5555551234 or +1 5555551234x123 are valid. Numbers are rejected when creating/updating if they do not match the required format.
     * @returns a string
     */
    public get phoneNumber() {
        return this._phoneNumber;
    };
    /**
     * Sets the phoneNumber property value. The phone number to text or call for authentication. Phone numbers use the format '+<country code> <number>x<extension>', with extension optional. For example, +1 5555551234 or +1 5555551234x123 are valid. Numbers are rejected when creating/updating if they do not match the required format.
     * @param value Value to set for the phoneNumber property.
     */
    public set phoneNumber(value: string | undefined) {
        this._phoneNumber = value;
    };
    /**
     * Gets the phoneType property value. The phoneType property
     * @returns a authenticationPhoneType
     */
    public get phoneType() {
        return this._phoneType;
    };
    /**
     * Sets the phoneType property value. The phoneType property
     * @param value Value to set for the phoneType property.
     */
    public set phoneType(value: AuthenticationPhoneType | undefined) {
        this._phoneType = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("phoneNumber", this.phoneNumber);
        writer.writeEnumValue<AuthenticationPhoneType>("phoneType", this.phoneType);
        writer.writeEnumValue<AuthenticationMethodSignInState>("smsSignInState", this.smsSignInState);
    };
    /**
     * Gets the smsSignInState property value. The smsSignInState property
     * @returns a authenticationMethodSignInState
     */
    public get smsSignInState() {
        return this._smsSignInState;
    };
    /**
     * Sets the smsSignInState property value. The smsSignInState property
     * @param value Value to set for the smsSignInState property.
     */
    public set smsSignInState(value: AuthenticationMethodSignInState | undefined) {
        this._smsSignInState = value;
    };
}
