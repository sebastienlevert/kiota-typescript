import {createMobileAppIntentAndStateDetailFromDiscriminatorValue} from './createMobileAppIntentAndStateDetailFromDiscriminatorValue';
import {Entity, MobileAppIntentAndStateDetail} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** MobileApp Intent and Install State for a given device. */
export class MobileAppIntentAndState extends Entity implements Parsable {
    /** Device identifier created or collected by Intune. */
    private _managedDeviceIdentifier?: string | undefined;
    /** The list of payload intents and states for the tenant. */
    private _mobileAppList?: MobileAppIntentAndStateDetail[] | undefined;
    /** Identifier for the user that tried to enroll the device. */
    private _userId?: string | undefined;
    /**
     * Instantiates a new mobileAppIntentAndState and sets the default values.
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
            "managedDeviceIdentifier": n => { this.managedDeviceIdentifier = n.getStringValue(); },
            "mobileAppList": n => { this.mobileAppList = n.getCollectionOfObjectValues<MobileAppIntentAndStateDetail>(createMobileAppIntentAndStateDetailFromDiscriminatorValue); },
            "userId": n => { this.userId = n.getStringValue(); },
        };
    };
    /**
     * Gets the managedDeviceIdentifier property value. Device identifier created or collected by Intune.
     * @returns a string
     */
    public get managedDeviceIdentifier() {
        return this._managedDeviceIdentifier;
    };
    /**
     * Sets the managedDeviceIdentifier property value. Device identifier created or collected by Intune.
     * @param value Value to set for the managedDeviceIdentifier property.
     */
    public set managedDeviceIdentifier(value: string | undefined) {
        this._managedDeviceIdentifier = value;
    };
    /**
     * Gets the mobileAppList property value. The list of payload intents and states for the tenant.
     * @returns a mobileAppIntentAndStateDetail
     */
    public get mobileAppList() {
        return this._mobileAppList;
    };
    /**
     * Sets the mobileAppList property value. The list of payload intents and states for the tenant.
     * @param value Value to set for the mobileAppList property.
     */
    public set mobileAppList(value: MobileAppIntentAndStateDetail[] | undefined) {
        this._mobileAppList = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("managedDeviceIdentifier", this.managedDeviceIdentifier);
        writer.writeCollectionOfObjectValues<MobileAppIntentAndStateDetail>("mobileAppList", this.mobileAppList);
        writer.writeStringValue("userId", this.userId);
    };
    /**
     * Gets the userId property value. Identifier for the user that tried to enroll the device.
     * @returns a string
     */
    public get userId() {
        return this._userId;
    };
    /**
     * Sets the userId property value. Identifier for the user that tried to enroll the device.
     * @param value Value to set for the userId property.
     */
    public set userId(value: string | undefined) {
        this._userId = value;
    };
}
