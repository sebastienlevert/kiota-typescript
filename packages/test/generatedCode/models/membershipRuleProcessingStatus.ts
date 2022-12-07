import {MembershipRuleProcessingStatusDetails} from './membershipRuleProcessingStatusDetails';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MembershipRuleProcessingStatus implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Detailed error message if dynamic group processing ran into an error.  Optional. Read-only. */
    private _errorMessage?: string | undefined;
    /** Most recent date and time when membership of a dynamic group was updated.  Optional. Read-only. */
    private _lastMembershipUpdated?: Date | undefined;
    /** The status property */
    private _status?: MembershipRuleProcessingStatusDetails | undefined;
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
     * Instantiates a new membershipRuleProcessingStatus and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the errorMessage property value. Detailed error message if dynamic group processing ran into an error.  Optional. Read-only.
     * @returns a string
     */
    public get errorMessage() {
        return this._errorMessage;
    };
    /**
     * Sets the errorMessage property value. Detailed error message if dynamic group processing ran into an error.  Optional. Read-only.
     * @param value Value to set for the errorMessage property.
     */
    public set errorMessage(value: string | undefined) {
        this._errorMessage = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "errorMessage": n => { this.errorMessage = n.getStringValue(); },
            "lastMembershipUpdated": n => { this.lastMembershipUpdated = n.getDateValue(); },
            "status": n => { this.status = n.getEnumValue<MembershipRuleProcessingStatusDetails>(MembershipRuleProcessingStatusDetails); },
        };
    };
    /**
     * Gets the lastMembershipUpdated property value. Most recent date and time when membership of a dynamic group was updated.  Optional. Read-only.
     * @returns a Date
     */
    public get lastMembershipUpdated() {
        return this._lastMembershipUpdated;
    };
    /**
     * Sets the lastMembershipUpdated property value. Most recent date and time when membership of a dynamic group was updated.  Optional. Read-only.
     * @param value Value to set for the lastMembershipUpdated property.
     */
    public set lastMembershipUpdated(value: Date | undefined) {
        this._lastMembershipUpdated = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("errorMessage", this.errorMessage);
        writer.writeDateValue("lastMembershipUpdated", this.lastMembershipUpdated);
        writer.writeEnumValue<MembershipRuleProcessingStatusDetails>("status", this.status);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the status property value. The status property
     * @returns a MembershipRuleProcessingStatusDetails
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. The status property
     * @param value Value to set for the status property.
     */
    public set status(value: MembershipRuleProcessingStatusDetails | undefined) {
        this._status = value;
    };
}
