import {ActionState} from './actionState';
import {createCloudPcStatusDetailsFromDiscriminatorValue} from './createCloudPcStatusDetailsFromDiscriminatorValue';
import {CloudPcStatusDetails} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CloudPcRemoteActionResult implements AdditionalDataHolder, Parsable {
    /** The specified action. Supported values in the Microsoft Endpoint Manager portal are: Reprovision, Resize, Restore. Supported values in enterprise Cloud PC devices are: Reboot, Rename, Reprovision, Troubleshoot. */
    private _actionName?: string | undefined;
    /** The actionState property */
    private _actionState?: ActionState | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The ID of the Cloud PC device on which the remote action is performed. Read-only. */
    private _cloudPcId?: string | undefined;
    /** Last update time for action. The Timestamp is shown in ISO 8601 format and Coordinated Universal Time (UTC). For example, midnight UTC on Jan 1, 2014 appears as '2014-01-01T00:00:00Z'. */
    private _lastUpdatedDateTime?: Date | undefined;
    /** The ID of the Intune managed device on which the remote action is performed. Read-only. */
    private _managedDeviceId?: string | undefined;
    /** Time the action was initiated. The Timestamp is shown in ISO 8601 format and Coordinated Universal Time (UTC). For example, midnight UTC on Jan 1, 2014 appears as '2014-01-01T00:00:00Z'. */
    private _startDateTime?: Date | undefined;
    /** The statusDetails property */
    private _statusDetails?: CloudPcStatusDetails | undefined;
    /**
     * Gets the actionName property value. The specified action. Supported values in the Microsoft Endpoint Manager portal are: Reprovision, Resize, Restore. Supported values in enterprise Cloud PC devices are: Reboot, Rename, Reprovision, Troubleshoot.
     * @returns a string
     */
    public get actionName() {
        return this._actionName;
    };
    /**
     * Sets the actionName property value. The specified action. Supported values in the Microsoft Endpoint Manager portal are: Reprovision, Resize, Restore. Supported values in enterprise Cloud PC devices are: Reboot, Rename, Reprovision, Troubleshoot.
     * @param value Value to set for the actionName property.
     */
    public set actionName(value: string | undefined) {
        this._actionName = value;
    };
    /**
     * Gets the actionState property value. The actionState property
     * @returns a actionState
     */
    public get actionState() {
        return this._actionState;
    };
    /**
     * Sets the actionState property value. The actionState property
     * @param value Value to set for the actionState property.
     */
    public set actionState(value: ActionState | undefined) {
        this._actionState = value;
    };
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
     * Gets the cloudPcId property value. The ID of the Cloud PC device on which the remote action is performed. Read-only.
     * @returns a string
     */
    public get cloudPcId() {
        return this._cloudPcId;
    };
    /**
     * Sets the cloudPcId property value. The ID of the Cloud PC device on which the remote action is performed. Read-only.
     * @param value Value to set for the cloudPcId property.
     */
    public set cloudPcId(value: string | undefined) {
        this._cloudPcId = value;
    };
    /**
     * Instantiates a new cloudPcRemoteActionResult and sets the default values.
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
            "actionName": n => { this.actionName = n.getStringValue(); },
            "actionState": n => { this.actionState = n.getEnumValue<ActionState>(ActionState); },
            "cloudPcId": n => { this.cloudPcId = n.getStringValue(); },
            "lastUpdatedDateTime": n => { this.lastUpdatedDateTime = n.getDateValue(); },
            "managedDeviceId": n => { this.managedDeviceId = n.getStringValue(); },
            "startDateTime": n => { this.startDateTime = n.getDateValue(); },
            "statusDetails": n => { this.statusDetails = n.getObjectValue<CloudPcStatusDetails>(createCloudPcStatusDetailsFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the lastUpdatedDateTime property value. Last update time for action. The Timestamp is shown in ISO 8601 format and Coordinated Universal Time (UTC). For example, midnight UTC on Jan 1, 2014 appears as '2014-01-01T00:00:00Z'.
     * @returns a Date
     */
    public get lastUpdatedDateTime() {
        return this._lastUpdatedDateTime;
    };
    /**
     * Sets the lastUpdatedDateTime property value. Last update time for action. The Timestamp is shown in ISO 8601 format and Coordinated Universal Time (UTC). For example, midnight UTC on Jan 1, 2014 appears as '2014-01-01T00:00:00Z'.
     * @param value Value to set for the lastUpdatedDateTime property.
     */
    public set lastUpdatedDateTime(value: Date | undefined) {
        this._lastUpdatedDateTime = value;
    };
    /**
     * Gets the managedDeviceId property value. The ID of the Intune managed device on which the remote action is performed. Read-only.
     * @returns a string
     */
    public get managedDeviceId() {
        return this._managedDeviceId;
    };
    /**
     * Sets the managedDeviceId property value. The ID of the Intune managed device on which the remote action is performed. Read-only.
     * @param value Value to set for the managedDeviceId property.
     */
    public set managedDeviceId(value: string | undefined) {
        this._managedDeviceId = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("actionName", this.actionName);
        writer.writeEnumValue<ActionState>("actionState", this.actionState);
        writer.writeStringValue("cloudPcId", this.cloudPcId);
        writer.writeDateValue("lastUpdatedDateTime", this.lastUpdatedDateTime);
        writer.writeStringValue("managedDeviceId", this.managedDeviceId);
        writer.writeDateValue("startDateTime", this.startDateTime);
        writer.writeObjectValue<CloudPcStatusDetails>("statusDetails", this.statusDetails);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the startDateTime property value. Time the action was initiated. The Timestamp is shown in ISO 8601 format and Coordinated Universal Time (UTC). For example, midnight UTC on Jan 1, 2014 appears as '2014-01-01T00:00:00Z'.
     * @returns a Date
     */
    public get startDateTime() {
        return this._startDateTime;
    };
    /**
     * Sets the startDateTime property value. Time the action was initiated. The Timestamp is shown in ISO 8601 format and Coordinated Universal Time (UTC). For example, midnight UTC on Jan 1, 2014 appears as '2014-01-01T00:00:00Z'.
     * @param value Value to set for the startDateTime property.
     */
    public set startDateTime(value: Date | undefined) {
        this._startDateTime = value;
    };
    /**
     * Gets the statusDetails property value. The statusDetails property
     * @returns a cloudPcStatusDetails
     */
    public get statusDetails() {
        return this._statusDetails;
    };
    /**
     * Sets the statusDetails property value. The statusDetails property
     * @param value Value to set for the statusDetails property.
     */
    public set statusDetails(value: CloudPcStatusDetails | undefined) {
        this._statusDetails = value;
    };
}
