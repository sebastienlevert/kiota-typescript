import {EmailType} from './emailType';
import {EmailAddress} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TypedEmailAddress extends EmailAddress implements Parsable {
    /** To specify a custom type of email address, set type to other, and assign otherLabel to a custom string. For example, you may use a specific email address for your volunteer activities. Set type to other, and set otherLabel to a custom string such as Volunteer work. */
    private _otherLabel?: string | undefined;
    /** The type property */
    private _type?: EmailType | undefined;
    /**
     * Instantiates a new TypedEmailAddress and sets the default values.
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
            "otherLabel": n => { this.otherLabel = n.getStringValue(); },
            "type": n => { this.type = n.getEnumValue<EmailType>(EmailType); },
        };
    };
    /**
     * Gets the otherLabel property value. To specify a custom type of email address, set type to other, and assign otherLabel to a custom string. For example, you may use a specific email address for your volunteer activities. Set type to other, and set otherLabel to a custom string such as Volunteer work.
     * @returns a string
     */
    public get otherLabel() {
        return this._otherLabel;
    };
    /**
     * Sets the otherLabel property value. To specify a custom type of email address, set type to other, and assign otherLabel to a custom string. For example, you may use a specific email address for your volunteer activities. Set type to other, and set otherLabel to a custom string such as Volunteer work.
     * @param value Value to set for the otherLabel property.
     */
    public set otherLabel(value: string | undefined) {
        this._otherLabel = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("otherLabel", this.otherLabel);
        writer.writeEnumValue<EmailType>("type", this.type);
    };
    /**
     * Gets the type property value. The type property
     * @returns a emailType
     */
    public get type() {
        return this._type;
    };
    /**
     * Sets the type property value. The type property
     * @param value Value to set for the type property.
     */
    public set type(value: EmailType | undefined) {
        this._type = value;
    };
}
