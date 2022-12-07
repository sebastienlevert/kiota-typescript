import {AuthenticationMethodKeyStrength} from './authenticationMethodKeyStrength';
import {createDeviceFromDiscriminatorValue} from './createDeviceFromDiscriminatorValue';
import {AuthenticationMethod, Device} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WindowsHelloForBusinessAuthenticationMethod extends AuthenticationMethod implements Parsable {
    /** The date and time that this Windows Hello for Business key was registered. */
    private _createdDateTime?: Date | undefined;
    /** The device property */
    private _device?: Device | undefined;
    /** The name of the device on which Windows Hello for Business is registered */
    private _displayName?: string | undefined;
    /** The keyStrength property */
    private _keyStrength?: AuthenticationMethodKeyStrength | undefined;
    /**
     * Instantiates a new windowsHelloForBusinessAuthenticationMethod and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdDateTime property value. The date and time that this Windows Hello for Business key was registered.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. The date and time that this Windows Hello for Business key was registered.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
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
     * Gets the displayName property value. The name of the device on which Windows Hello for Business is registered
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The name of the device on which Windows Hello for Business is registered
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
            "device": n => { this.device = n.getObjectValue<Device>(createDeviceFromDiscriminatorValue); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "keyStrength": n => { this.keyStrength = n.getEnumValue<AuthenticationMethodKeyStrength>(AuthenticationMethodKeyStrength); },
        };
    };
    /**
     * Gets the keyStrength property value. The keyStrength property
     * @returns a authenticationMethodKeyStrength
     */
    public get keyStrength() {
        return this._keyStrength;
    };
    /**
     * Sets the keyStrength property value. The keyStrength property
     * @param value Value to set for the keyStrength property.
     */
    public set keyStrength(value: AuthenticationMethodKeyStrength | undefined) {
        this._keyStrength = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeObjectValue<Device>("device", this.device);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeEnumValue<AuthenticationMethodKeyStrength>("keyStrength", this.keyStrength);
    };
}
