import {createDeviceManagementTroubleshootingErrorResourceFromDiscriminatorValue} from './createDeviceManagementTroubleshootingErrorResourceFromDiscriminatorValue';
import {DeviceManagementTroubleshootingErrorResource} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Object containing detailed information about the error and its remediation. */
export class DeviceManagementTroubleshootingErrorDetails implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Not yet documented */
    private _context?: string | undefined;
    /** Not yet documented */
    private _failure?: string | undefined;
    /** The detailed description of what went wrong. */
    private _failureDetails?: string | undefined;
    /** The detailed description of how to remediate this issue. */
    private _remediation?: string | undefined;
    /** Links to helpful documentation about this failure. */
    private _resources?: DeviceManagementTroubleshootingErrorResource[] | undefined;
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
     * Instantiates a new deviceManagementTroubleshootingErrorDetails and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the context property value. Not yet documented
     * @returns a string
     */
    public get context() {
        return this._context;
    };
    /**
     * Sets the context property value. Not yet documented
     * @param value Value to set for the context property.
     */
    public set context(value: string | undefined) {
        this._context = value;
    };
    /**
     * Gets the failure property value. Not yet documented
     * @returns a string
     */
    public get failure() {
        return this._failure;
    };
    /**
     * Sets the failure property value. Not yet documented
     * @param value Value to set for the failure property.
     */
    public set failure(value: string | undefined) {
        this._failure = value;
    };
    /**
     * Gets the failureDetails property value. The detailed description of what went wrong.
     * @returns a string
     */
    public get failureDetails() {
        return this._failureDetails;
    };
    /**
     * Sets the failureDetails property value. The detailed description of what went wrong.
     * @param value Value to set for the failureDetails property.
     */
    public set failureDetails(value: string | undefined) {
        this._failureDetails = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "context": n => { this.context = n.getStringValue(); },
            "failure": n => { this.failure = n.getStringValue(); },
            "failureDetails": n => { this.failureDetails = n.getStringValue(); },
            "remediation": n => { this.remediation = n.getStringValue(); },
            "resources": n => { this.resources = n.getCollectionOfObjectValues<DeviceManagementTroubleshootingErrorResource>(createDeviceManagementTroubleshootingErrorResourceFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the remediation property value. The detailed description of how to remediate this issue.
     * @returns a string
     */
    public get remediation() {
        return this._remediation;
    };
    /**
     * Sets the remediation property value. The detailed description of how to remediate this issue.
     * @param value Value to set for the remediation property.
     */
    public set remediation(value: string | undefined) {
        this._remediation = value;
    };
    /**
     * Gets the resources property value. Links to helpful documentation about this failure.
     * @returns a deviceManagementTroubleshootingErrorResource
     */
    public get resources() {
        return this._resources;
    };
    /**
     * Sets the resources property value. Links to helpful documentation about this failure.
     * @param value Value to set for the resources property.
     */
    public set resources(value: DeviceManagementTroubleshootingErrorResource[] | undefined) {
        this._resources = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("context", this.context);
        writer.writeStringValue("failure", this.failure);
        writer.writeStringValue("failureDetails", this.failureDetails);
        writer.writeStringValue("remediation", this.remediation);
        writer.writeCollectionOfObjectValues<DeviceManagementTroubleshootingErrorResource>("resources", this.resources);
        writer.writeAdditionalData(this.additionalData);
    };
}
