import {createDeviceFromDiscriminatorValue} from './createDeviceFromDiscriminatorValue';
import {AuthenticationMethod, Device} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PasswordlessMicrosoftAuthenticatorAuthenticationMethod extends AuthenticationMethod implements Parsable {
    /** The createdDateTime property */
    private _createdDateTime?: Date | undefined;
    /** The timestamp when this method was registered to the user. */
    private _creationDateTime?: Date | undefined;
    /** The device property */
    private _device?: Device | undefined;
    /** The display name of the mobile device as given by the user. */
    private _displayName?: string | undefined;
    /**
     * Instantiates a new passwordlessMicrosoftAuthenticatorAuthenticationMethod and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdDateTime property value. The createdDateTime property
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. The createdDateTime property
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * Gets the creationDateTime property value. The timestamp when this method was registered to the user.
     * @returns a Date
     */
    public get creationDateTime() {
        return this._creationDateTime;
    };
    /**
     * Sets the creationDateTime property value. The timestamp when this method was registered to the user.
     * @param value Value to set for the creationDateTime property.
     */
    public set creationDateTime(value: Date | undefined) {
        this._creationDateTime = value;
    };
    /**
     * Gets the device property value. The device property
     * @returns a device
     */
    public get device() {
        return this._device;
    };
    /**
     * Sets the device property value. The device property
     * @param value Value to set for the device property.
     */
    public set device(value: Device | undefined) {
        this._device = value;
    };
    /**
     * Gets the displayName property value. The display name of the mobile device as given by the user.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The display name of the mobile device as given by the user.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "creationDateTime": n => { this.creationDateTime = n.getDateValue(); },
            "device": n => { this.device = n.getObjectValue<Device>(createDeviceFromDiscriminatorValue); },
            "displayName": n => { this.displayName = n.getStringValue(); },
        };
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
        writer.writeObjectValue<Device>("device", this.device);
        writer.writeStringValue("displayName", this.displayName);
    };
}
