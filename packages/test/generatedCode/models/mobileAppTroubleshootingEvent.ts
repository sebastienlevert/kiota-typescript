import {createAppLogCollectionRequestFromDiscriminatorValue} from './createAppLogCollectionRequestFromDiscriminatorValue';
import {createMobileAppTroubleshootingHistoryItemFromDiscriminatorValue} from './createMobileAppTroubleshootingHistoryItemFromDiscriminatorValue';
import {AppLogCollectionRequest, DeviceManagementTroubleshootingEvent, MobileAppTroubleshootingHistoryItem} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Event representing a users device application install status. */
export class MobileAppTroubleshootingEvent extends DeviceManagementTroubleshootingEvent implements Parsable {
    /** Intune application identifier. */
    private _applicationId?: string | undefined;
    /** The collection property of AppLogUploadRequest. */
    private _appLogCollectionRequests?: AppLogCollectionRequest[] | undefined;
    /** Intune Mobile Application Troubleshooting History Item */
    private _history?: MobileAppTroubleshootingHistoryItem[] | undefined;
    /** Device identifier created or collected by Intune. */
    private _managedDeviceIdentifier?: string | undefined;
    /** Identifier for the user that tried to enroll the device. */
    private _userId?: string | undefined;
    /**
     * Gets the applicationId property value. Intune application identifier.
     * @returns a string
     */
    public get applicationId() {
        return this._applicationId;
    };
    /**
     * Sets the applicationId property value. Intune application identifier.
     * @param value Value to set for the applicationId property.
     */
    public set applicationId(value: string | undefined) {
        this._applicationId = value;
    };
    /**
     * Gets the appLogCollectionRequests property value. The collection property of AppLogUploadRequest.
     * @returns a appLogCollectionRequest
     */
    public get appLogCollectionRequests() {
        return this._appLogCollectionRequests;
    };
    /**
     * Sets the appLogCollectionRequests property value. The collection property of AppLogUploadRequest.
     * @param value Value to set for the appLogCollectionRequests property.
     */
    public set appLogCollectionRequests(value: AppLogCollectionRequest[] | undefined) {
        this._appLogCollectionRequests = value;
    };
    /**
     * Instantiates a new mobileAppTroubleshootingEvent and sets the default values.
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
            "applicationId": n => { this.applicationId = n.getStringValue(); },
            "appLogCollectionRequests": n => { this.appLogCollectionRequests = n.getCollectionOfObjectValues<AppLogCollectionRequest>(createAppLogCollectionRequestFromDiscriminatorValue); },
            "history": n => { this.history = n.getCollectionOfObjectValues<MobileAppTroubleshootingHistoryItem>(createMobileAppTroubleshootingHistoryItemFromDiscriminatorValue); },
            "managedDeviceIdentifier": n => { this.managedDeviceIdentifier = n.getStringValue(); },
            "userId": n => { this.userId = n.getStringValue(); },
        };
    };
    /**
     * Gets the history property value. Intune Mobile Application Troubleshooting History Item
     * @returns a mobileAppTroubleshootingHistoryItem
     */
    public get history() {
        return this._history;
    };
    /**
     * Sets the history property value. Intune Mobile Application Troubleshooting History Item
     * @param value Value to set for the history property.
     */
    public set history(value: MobileAppTroubleshootingHistoryItem[] | undefined) {
        this._history = value;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("applicationId", this.applicationId);
        writer.writeCollectionOfObjectValues<AppLogCollectionRequest>("appLogCollectionRequests", this.appLogCollectionRequests);
        writer.writeCollectionOfObjectValues<MobileAppTroubleshootingHistoryItem>("history", this.history);
        writer.writeStringValue("managedDeviceIdentifier", this.managedDeviceIdentifier);
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
