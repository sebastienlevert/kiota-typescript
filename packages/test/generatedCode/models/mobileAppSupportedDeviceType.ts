import {DeviceType} from './deviceType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Device properties */
export class MobileAppSupportedDeviceType implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Maximum OS version */
    private _maximumOperatingSystemVersion?: string | undefined;
    /** Minimum OS version */
    private _minimumOperatingSystemVersion?: string | undefined;
    /** Device type. */
    private _type?: DeviceType | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Instantiates a new mobileAppSupportedDeviceType and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "maximumOperatingSystemVersion": n => { this.maximumOperatingSystemVersion = n.getStringValue(); },
            "minimumOperatingSystemVersion": n => { this.minimumOperatingSystemVersion = n.getStringValue(); },
            "type": n => { this.type = n.getEnumValue<DeviceType>(DeviceType); },
        };
    };
    /**
     * Gets the maximumOperatingSystemVersion property value. Maximum OS version
     * @returns a string
     */
    public get maximumOperatingSystemVersion() {
        return this._maximumOperatingSystemVersion;
    };
    /**
     * Sets the maximumOperatingSystemVersion property value. Maximum OS version
     * @param value Value to set for the maximumOperatingSystemVersion property.
     */
    public set maximumOperatingSystemVersion(value: string | undefined) {
        this._maximumOperatingSystemVersion = value;
    };
    /**
     * Gets the minimumOperatingSystemVersion property value. Minimum OS version
     * @returns a string
     */
    public get minimumOperatingSystemVersion() {
        return this._minimumOperatingSystemVersion;
    };
    /**
     * Sets the minimumOperatingSystemVersion property value. Minimum OS version
     * @param value Value to set for the minimumOperatingSystemVersion property.
     */
    public set minimumOperatingSystemVersion(value: string | undefined) {
        this._minimumOperatingSystemVersion = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("maximumOperatingSystemVersion", this.maximumOperatingSystemVersion);
        writer.writeStringValue("minimumOperatingSystemVersion", this.minimumOperatingSystemVersion);
        writer.writeEnumValue<DeviceType>("type", this.type);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the type property value. Device type.
     * @returns a deviceType
     */
    public get type() {
        return this._type;
    };
    /**
     * Sets the type property value. Device type.
     * @param value Value to set for the type property.
     */
    public set type(value: DeviceType | undefined) {
        this._type = value;
    };
}
