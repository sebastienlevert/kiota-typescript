import {createDeviceManagementTroubleshootingErrorDetailsFromDiscriminatorValue} from './createDeviceManagementTroubleshootingErrorDetailsFromDiscriminatorValue';
import {DeviceManagementTroubleshootingErrorDetails} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** History Item contained in the Mobile App Troubleshooting Event. */
export class MobileAppTroubleshootingHistoryItem implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Time when the history item occurred. */
    private _occurrenceDateTime?: Date | undefined;
    /** Object containing detailed information about the error and its remediation. */
    private _troubleshootingErrorDetails?: DeviceManagementTroubleshootingErrorDetails | undefined;
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
     * Instantiates a new mobileAppTroubleshootingHistoryItem and sets the default values.
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
            "occurrenceDateTime": n => { this.occurrenceDateTime = n.getDateValue(); },
            "troubleshootingErrorDetails": n => { this.troubleshootingErrorDetails = n.getObjectValue<DeviceManagementTroubleshootingErrorDetails>(createDeviceManagementTroubleshootingErrorDetailsFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the occurrenceDateTime property value. Time when the history item occurred.
     * @returns a Date
     */
    public get occurrenceDateTime() {
        return this._occurrenceDateTime;
    };
    /**
     * Sets the occurrenceDateTime property value. Time when the history item occurred.
     * @param value Value to set for the occurrenceDateTime property.
     */
    public set occurrenceDateTime(value: Date | undefined) {
        this._occurrenceDateTime = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeDateValue("occurrenceDateTime", this.occurrenceDateTime);
        writer.writeObjectValue<DeviceManagementTroubleshootingErrorDetails>("troubleshootingErrorDetails", this.troubleshootingErrorDetails);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the troubleshootingErrorDetails property value. Object containing detailed information about the error and its remediation.
     * @returns a deviceManagementTroubleshootingErrorDetails
     */
    public get troubleshootingErrorDetails() {
        return this._troubleshootingErrorDetails;
    };
    /**
     * Sets the troubleshootingErrorDetails property value. Object containing detailed information about the error and its remediation.
     * @param value Value to set for the troubleshootingErrorDetails property.
     */
    public set troubleshootingErrorDetails(value: DeviceManagementTroubleshootingErrorDetails | undefined) {
        this._troubleshootingErrorDetails = value;
    };
}
