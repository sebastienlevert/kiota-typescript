import {Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Represents device registration records for Bring-Your-Own-Device(BYOD) Windows devices. */
export class WindowsInformationProtectionDeviceRegistration extends Entity implements Parsable {
    /** Device Mac address. */
    private _deviceMacAddress?: string | undefined;
    /** Device name. */
    private _deviceName?: string | undefined;
    /** Device identifier for this device registration record. */
    private _deviceRegistrationId?: string | undefined;
    /** Device type, for example, Windows laptop VS Windows phone. */
    private _deviceType?: string | undefined;
    /** Last checkin time of the device. */
    private _lastCheckInDateTime?: Date | undefined;
    /** UserId associated with this device registration record. */
    private _userId?: string | undefined;
    /**
     * Instantiates a new windowsInformationProtectionDeviceRegistration and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the deviceMacAddress property value. Device Mac address.
     * @returns a string
     */
    public get deviceMacAddress() {
        return this._deviceMacAddress;
    };
    /**
     * Sets the deviceMacAddress property value. Device Mac address.
     * @param value Value to set for the deviceMacAddress property.
     */
    public set deviceMacAddress(value: string | undefined) {
        this._deviceMacAddress = value;
    };
    /**
     * Gets the deviceName property value. Device name.
     * @returns a string
     */
    public get deviceName() {
        return this._deviceName;
    };
    /**
     * Sets the deviceName property value. Device name.
     * @param value Value to set for the deviceName property.
     */
    public set deviceName(value: string | undefined) {
        this._deviceName = value;
    };
    /**
     * Gets the deviceRegistrationId property value. Device identifier for this device registration record.
     * @returns a string
     */
    public get deviceRegistrationId() {
        return this._deviceRegistrationId;
    };
    /**
     * Sets the deviceRegistrationId property value. Device identifier for this device registration record.
     * @param value Value to set for the deviceRegistrationId property.
     */
    public set deviceRegistrationId(value: string | undefined) {
        this._deviceRegistrationId = value;
    };
    /**
     * Gets the deviceType property value. Device type, for example, Windows laptop VS Windows phone.
     * @returns a string
     */
    public get deviceType() {
        return this._deviceType;
    };
    /**
     * Sets the deviceType property value. Device type, for example, Windows laptop VS Windows phone.
     * @param value Value to set for the deviceType property.
     */
    public set deviceType(value: string | undefined) {
        this._deviceType = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "deviceMacAddress": n => { this.deviceMacAddress = n.getStringValue(); },
            "deviceName": n => { this.deviceName = n.getStringValue(); },
            "deviceRegistrationId": n => { this.deviceRegistrationId = n.getStringValue(); },
            "deviceType": n => { this.deviceType = n.getStringValue(); },
            "lastCheckInDateTime": n => { this.lastCheckInDateTime = n.getDateValue(); },
            "userId": n => { this.userId = n.getStringValue(); },
        };
    };
    /**
     * Gets the lastCheckInDateTime property value. Last checkin time of the device.
     * @returns a Date
     */
    public get lastCheckInDateTime() {
        return this._lastCheckInDateTime;
    };
    /**
     * Sets the lastCheckInDateTime property value. Last checkin time of the device.
     * @param value Value to set for the lastCheckInDateTime property.
     */
    public set lastCheckInDateTime(value: Date | undefined) {
        this._lastCheckInDateTime = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("deviceMacAddress", this.deviceMacAddress);
        writer.writeStringValue("deviceName", this.deviceName);
        writer.writeStringValue("deviceRegistrationId", this.deviceRegistrationId);
        writer.writeStringValue("deviceType", this.deviceType);
        writer.writeDateValue("lastCheckInDateTime", this.lastCheckInDateTime);
        writer.writeStringValue("userId", this.userId);
    };
    /**
     * Gets the userId property value. UserId associated with this device registration record.
     * @returns a string
     */
    public get userId() {
        return this._userId;
    };
    /**
     * Sets the userId property value. UserId associated with this device registration record.
     * @param value Value to set for the userId property.
     */
    public set userId(value: string | undefined) {
        this._userId = value;
    };
}
