import {createDeviceManagementTroubleshootingErrorDetailsFromDiscriminatorValue} from './createDeviceManagementTroubleshootingErrorDetailsFromDiscriminatorValue';
import {createKeyValuePairFromDiscriminatorValue} from './createKeyValuePairFromDiscriminatorValue';
import {DeviceManagementTroubleshootingErrorDetails, Entity, KeyValuePair} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Event representing an general failure. */
export class DeviceManagementTroubleshootingEvent extends Entity implements Parsable {
    /** A set of string key and string value pairs which provides additional information on the Troubleshooting event */
    private _additionalInformation?: KeyValuePair[] | undefined;
    /** Id used for tracing the failure in the service. */
    private _correlationId?: string | undefined;
    /** Time when the event occurred . */
    private _eventDateTime?: Date | undefined;
    /** Event Name corresponding to the Troubleshooting Event. It is an Optional field */
    private _eventName?: string | undefined;
    /** Object containing detailed information about the error and its remediation. */
    private _troubleshootingErrorDetails?: DeviceManagementTroubleshootingErrorDetails | undefined;
    /**
     * Gets the additionalInformation property value. A set of string key and string value pairs which provides additional information on the Troubleshooting event
     * @returns a keyValuePair
     */
    public get additionalInformation() {
        return this._additionalInformation;
    };
    /**
     * Sets the additionalInformation property value. A set of string key and string value pairs which provides additional information on the Troubleshooting event
     * @param value Value to set for the additionalInformation property.
     */
    public set additionalInformation(value: KeyValuePair[] | undefined) {
        this._additionalInformation = value;
    };
    /**
     * Instantiates a new deviceManagementTroubleshootingEvent and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the correlationId property value. Id used for tracing the failure in the service.
     * @returns a string
     */
    public get correlationId() {
        return this._correlationId;
    };
    /**
     * Sets the correlationId property value. Id used for tracing the failure in the service.
     * @param value Value to set for the correlationId property.
     */
    public set correlationId(value: string | undefined) {
        this._correlationId = value;
    };
    /**
     * Gets the eventDateTime property value. Time when the event occurred .
     * @returns a Date
     */
    public get eventDateTime() {
        return this._eventDateTime;
    };
    /**
     * Sets the eventDateTime property value. Time when the event occurred .
     * @param value Value to set for the eventDateTime property.
     */
    public set eventDateTime(value: Date | undefined) {
        this._eventDateTime = value;
    };
    /**
     * Gets the eventName property value. Event Name corresponding to the Troubleshooting Event. It is an Optional field
     * @returns a string
     */
    public get eventName() {
        return this._eventName;
    };
    /**
     * Sets the eventName property value. Event Name corresponding to the Troubleshooting Event. It is an Optional field
     * @param value Value to set for the eventName property.
     */
    public set eventName(value: string | undefined) {
        this._eventName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "additionalInformation": n => { this.additionalInformation = n.getCollectionOfObjectValues<KeyValuePair>(createKeyValuePairFromDiscriminatorValue); },
            "correlationId": n => { this.correlationId = n.getStringValue(); },
            "eventDateTime": n => { this.eventDateTime = n.getDateValue(); },
            "eventName": n => { this.eventName = n.getStringValue(); },
            "troubleshootingErrorDetails": n => { this.troubleshootingErrorDetails = n.getObjectValue<DeviceManagementTroubleshootingErrorDetails>(createDeviceManagementTroubleshootingErrorDetailsFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<KeyValuePair>("additionalInformation", this.additionalInformation);
        writer.writeStringValue("correlationId", this.correlationId);
        writer.writeDateValue("eventDateTime", this.eventDateTime);
        writer.writeStringValue("eventName", this.eventName);
        writer.writeObjectValue<DeviceManagementTroubleshootingErrorDetails>("troubleshootingErrorDetails", this.troubleshootingErrorDetails);
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
