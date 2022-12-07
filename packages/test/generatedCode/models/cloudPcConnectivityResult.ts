import {CloudPcConnectivityStatus} from './cloudPcConnectivityStatus';
import {createCloudPcHealthCheckItemFromDiscriminatorValue} from './createCloudPcHealthCheckItemFromDiscriminatorValue';
import {CloudPcHealthCheckItem} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CloudPcConnectivityResult implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** A list of failed health check items. If the status property is available, this property will be empty. */
    private _failedHealthCheckItems?: CloudPcHealthCheckItem[] | undefined;
    /** The status property */
    private _status?: CloudPcConnectivityStatus | undefined;
    /** Datetime when the status was updated. The timestamp is shown in ISO 8601 format and Coordinated Universal Time (UTC). For example, midnight UTC on Jan 1, 2014 appears as 2014-01-01T00:00:00Z. */
    private _updatedDateTime?: Date | undefined;
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
     * Instantiates a new cloudPcConnectivityResult and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the failedHealthCheckItems property value. A list of failed health check items. If the status property is available, this property will be empty.
     * @returns a cloudPcHealthCheckItem
     */
    public get failedHealthCheckItems() {
        return this._failedHealthCheckItems;
    };
    /**
     * Sets the failedHealthCheckItems property value. A list of failed health check items. If the status property is available, this property will be empty.
     * @param value Value to set for the failedHealthCheckItems property.
     */
    public set failedHealthCheckItems(value: CloudPcHealthCheckItem[] | undefined) {
        this._failedHealthCheckItems = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "failedHealthCheckItems": n => { this.failedHealthCheckItems = n.getCollectionOfObjectValues<CloudPcHealthCheckItem>(createCloudPcHealthCheckItemFromDiscriminatorValue); },
            "status": n => { this.status = n.getEnumValue<CloudPcConnectivityStatus>(CloudPcConnectivityStatus); },
            "updatedDateTime": n => { this.updatedDateTime = n.getDateValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfObjectValues<CloudPcHealthCheckItem>("failedHealthCheckItems", this.failedHealthCheckItems);
        writer.writeEnumValue<CloudPcConnectivityStatus>("status", this.status);
        writer.writeDateValue("updatedDateTime", this.updatedDateTime);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the status property value. The status property
     * @returns a cloudPcConnectivityStatus
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. The status property
     * @param value Value to set for the status property.
     */
    public set status(value: CloudPcConnectivityStatus | undefined) {
        this._status = value;
    };
    /**
     * Gets the updatedDateTime property value. Datetime when the status was updated. The timestamp is shown in ISO 8601 format and Coordinated Universal Time (UTC). For example, midnight UTC on Jan 1, 2014 appears as 2014-01-01T00:00:00Z.
     * @returns a Date
     */
    public get updatedDateTime() {
        return this._updatedDateTime;
    };
    /**
     * Sets the updatedDateTime property value. Datetime when the status was updated. The timestamp is shown in ISO 8601 format and Coordinated Universal Time (UTC). For example, midnight UTC on Jan 1, 2014 appears as 2014-01-01T00:00:00Z.
     * @param value Value to set for the updatedDateTime property.
     */
    public set updatedDateTime(value: Date | undefined) {
        this._updatedDateTime = value;
    };
}
