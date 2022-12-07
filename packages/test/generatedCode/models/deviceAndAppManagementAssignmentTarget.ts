import {DeviceAndAppManagementAssignmentFilterType} from './deviceAndAppManagementAssignmentFilterType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Base type for assignment targets. */
export class DeviceAndAppManagementAssignmentTarget implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The Id of the filter for the target assignment. */
    private _deviceAndAppManagementAssignmentFilterId?: string | undefined;
    /** Represents type of the assignment filter. */
    private _deviceAndAppManagementAssignmentFilterType?: DeviceAndAppManagementAssignmentFilterType | undefined;
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
     * Instantiates a new deviceAndAppManagementAssignmentTarget and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the deviceAndAppManagementAssignmentFilterId property value. The Id of the filter for the target assignment.
     * @returns a string
     */
    public get deviceAndAppManagementAssignmentFilterId() {
        return this._deviceAndAppManagementAssignmentFilterId;
    };
    /**
     * Sets the deviceAndAppManagementAssignmentFilterId property value. The Id of the filter for the target assignment.
     * @param value Value to set for the deviceAndAppManagementAssignmentFilterId property.
     */
    public set deviceAndAppManagementAssignmentFilterId(value: string | undefined) {
        this._deviceAndAppManagementAssignmentFilterId = value;
    };
    /**
     * Gets the deviceAndAppManagementAssignmentFilterType property value. Represents type of the assignment filter.
     * @returns a deviceAndAppManagementAssignmentFilterType
     */
    public get deviceAndAppManagementAssignmentFilterType() {
        return this._deviceAndAppManagementAssignmentFilterType;
    };
    /**
     * Sets the deviceAndAppManagementAssignmentFilterType property value. Represents type of the assignment filter.
     * @param value Value to set for the deviceAndAppManagementAssignmentFilterType property.
     */
    public set deviceAndAppManagementAssignmentFilterType(value: DeviceAndAppManagementAssignmentFilterType | undefined) {
        this._deviceAndAppManagementAssignmentFilterType = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "deviceAndAppManagementAssignmentFilterId": n => { this.deviceAndAppManagementAssignmentFilterId = n.getStringValue(); },
            "deviceAndAppManagementAssignmentFilterType": n => { this.deviceAndAppManagementAssignmentFilterType = n.getEnumValue<DeviceAndAppManagementAssignmentFilterType>(DeviceAndAppManagementAssignmentFilterType); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("deviceAndAppManagementAssignmentFilterId", this.deviceAndAppManagementAssignmentFilterId);
        writer.writeEnumValue<DeviceAndAppManagementAssignmentFilterType>("deviceAndAppManagementAssignmentFilterType", this.deviceAndAppManagementAssignmentFilterType);
        writer.writeAdditionalData(this.additionalData);
    };
}
