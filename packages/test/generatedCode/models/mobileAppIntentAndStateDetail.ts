import {createMobileAppSupportedDeviceTypeFromDiscriminatorValue} from './createMobileAppSupportedDeviceTypeFromDiscriminatorValue';
import {MobileAppSupportedDeviceType} from './index';
import {MobileAppIntent} from './mobileAppIntent';
import {ResultantAppState} from './resultantAppState';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Mobile App Intent and Install State for a given device. */
export class MobileAppIntentAndStateDetail implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** MobieApp identifier. */
    private _applicationId?: string | undefined;
    /** The admin provided or imported title of the app. */
    private _displayName?: string | undefined;
    /** Human readable version of the application */
    private _displayVersion?: string | undefined;
    /** A list of possible states for application status on an individual device. When devices contact the Intune service and find targeted application enforcement intent, the status of the enforcement is recorded and becomes accessible in the Graph API. Since the application status is identified during device interaction with the Intune service, status records do not immediately appear upon application group assignment; it is created only after the assignment is evaluated in the service and devices start receiving the policy during check-ins. */
    private _installState?: ResultantAppState | undefined;
    /** Indicates the status of the mobile app on the device. */
    private _mobileAppIntent?: MobileAppIntent | undefined;
    /** The supported platforms for the app. */
    private _supportedDeviceTypes?: MobileAppSupportedDeviceType[] | undefined;
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
     * Gets the applicationId property value. MobieApp identifier.
     * @returns a string
     */
    public get applicationId() {
        return this._applicationId;
    };
    /**
     * Sets the applicationId property value. MobieApp identifier.
     * @param value Value to set for the applicationId property.
     */
    public set applicationId(value: string | undefined) {
        this._applicationId = value;
    };
    /**
     * Instantiates a new mobileAppIntentAndStateDetail and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the displayName property value. The admin provided or imported title of the app.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The admin provided or imported title of the app.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Gets the displayVersion property value. Human readable version of the application
     * @returns a string
     */
    public get displayVersion() {
        return this._displayVersion;
    };
    /**
     * Sets the displayVersion property value. Human readable version of the application
     * @param value Value to set for the displayVersion property.
     */
    public set displayVersion(value: string | undefined) {
        this._displayVersion = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "applicationId": n => { this.applicationId = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "displayVersion": n => { this.displayVersion = n.getStringValue(); },
            "installState": n => { this.installState = n.getEnumValue<ResultantAppState>(ResultantAppState); },
            "mobileAppIntent": n => { this.mobileAppIntent = n.getEnumValue<MobileAppIntent>(MobileAppIntent); },
            "supportedDeviceTypes": n => { this.supportedDeviceTypes = n.getCollectionOfObjectValues<MobileAppSupportedDeviceType>(createMobileAppSupportedDeviceTypeFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the installState property value. A list of possible states for application status on an individual device. When devices contact the Intune service and find targeted application enforcement intent, the status of the enforcement is recorded and becomes accessible in the Graph API. Since the application status is identified during device interaction with the Intune service, status records do not immediately appear upon application group assignment; it is created only after the assignment is evaluated in the service and devices start receiving the policy during check-ins.
     * @returns a resultantAppState
     */
    public get installState() {
        return this._installState;
    };
    /**
     * Sets the installState property value. A list of possible states for application status on an individual device. When devices contact the Intune service and find targeted application enforcement intent, the status of the enforcement is recorded and becomes accessible in the Graph API. Since the application status is identified during device interaction with the Intune service, status records do not immediately appear upon application group assignment; it is created only after the assignment is evaluated in the service and devices start receiving the policy during check-ins.
     * @param value Value to set for the installState property.
     */
    public set installState(value: ResultantAppState | undefined) {
        this._installState = value;
    };
    /**
     * Gets the mobileAppIntent property value. Indicates the status of the mobile app on the device.
     * @returns a mobileAppIntent
     */
    public get mobileAppIntent() {
        return this._mobileAppIntent;
    };
    /**
     * Sets the mobileAppIntent property value. Indicates the status of the mobile app on the device.
     * @param value Value to set for the mobileAppIntent property.
     */
    public set mobileAppIntent(value: MobileAppIntent | undefined) {
        this._mobileAppIntent = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("applicationId", this.applicationId);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("displayVersion", this.displayVersion);
        writer.writeEnumValue<ResultantAppState>("installState", this.installState);
        writer.writeEnumValue<MobileAppIntent>("mobileAppIntent", this.mobileAppIntent);
        writer.writeCollectionOfObjectValues<MobileAppSupportedDeviceType>("supportedDeviceTypes", this.supportedDeviceTypes);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the supportedDeviceTypes property value. The supported platforms for the app.
     * @returns a mobileAppSupportedDeviceType
     */
    public get supportedDeviceTypes() {
        return this._supportedDeviceTypes;
    };
    /**
     * Sets the supportedDeviceTypes property value. The supported platforms for the app.
     * @param value Value to set for the supportedDeviceTypes property.
     */
    public set supportedDeviceTypes(value: MobileAppSupportedDeviceType[] | undefined) {
        this._supportedDeviceTypes = value;
    };
}
