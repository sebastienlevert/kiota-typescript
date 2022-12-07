import {CloudPcConnectivityEventResult} from './cloudPcConnectivityEventResult';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CloudPcHealthCheckItem implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Additional message for this health check. */
    private _additionalDetails?: string | undefined;
    /** The connectivity health check item name. */
    private _displayName?: string | undefined;
    /** Timestamp when the last check occurs. The timestamp is shown in ISO 8601 format and Coordinated Universal Time (UTC). For example, midnight UTC on Jan 1, 2014 appears as 2014-01-01T00:00:00Z. */
    private _lastHealthCheckDateTime?: Date | undefined;
    /** The result property */
    private _result?: CloudPcConnectivityEventResult | undefined;
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
     * Gets the additionalDetails property value. Additional message for this health check.
     * @returns a string
     */
    public get additionalDetails() {
        return this._additionalDetails;
    };
    /**
     * Sets the additionalDetails property value. Additional message for this health check.
     * @param value Value to set for the additionalDetails property.
     */
    public set additionalDetails(value: string | undefined) {
        this._additionalDetails = value;
    };
    /**
     * Instantiates a new cloudPcHealthCheckItem and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the displayName property value. The connectivity health check item name.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The connectivity health check item name.
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
        return {
            "additionalDetails": n => { this.additionalDetails = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "lastHealthCheckDateTime": n => { this.lastHealthCheckDateTime = n.getDateValue(); },
            "result": n => { this.result = n.getEnumValue<CloudPcConnectivityEventResult>(CloudPcConnectivityEventResult); },
        };
    };
    /**
     * Gets the lastHealthCheckDateTime property value. Timestamp when the last check occurs. The timestamp is shown in ISO 8601 format and Coordinated Universal Time (UTC). For example, midnight UTC on Jan 1, 2014 appears as 2014-01-01T00:00:00Z.
     * @returns a Date
     */
    public get lastHealthCheckDateTime() {
        return this._lastHealthCheckDateTime;
    };
    /**
     * Sets the lastHealthCheckDateTime property value. Timestamp when the last check occurs. The timestamp is shown in ISO 8601 format and Coordinated Universal Time (UTC). For example, midnight UTC on Jan 1, 2014 appears as 2014-01-01T00:00:00Z.
     * @param value Value to set for the lastHealthCheckDateTime property.
     */
    public set lastHealthCheckDateTime(value: Date | undefined) {
        this._lastHealthCheckDateTime = value;
    };
    /**
     * Gets the result property value. The result property
     * @returns a cloudPcConnectivityEventResult
     */
    public get result() {
        return this._result;
    };
    /**
     * Sets the result property value. The result property
     * @param value Value to set for the result property.
     */
    public set result(value: CloudPcConnectivityEventResult | undefined) {
        this._result = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("additionalDetails", this.additionalDetails);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeDateValue("lastHealthCheckDateTime", this.lastHealthCheckDateTime);
        writer.writeEnumValue<CloudPcConnectivityEventResult>("result", this.result);
        writer.writeAdditionalData(this.additionalData);
    };
}
