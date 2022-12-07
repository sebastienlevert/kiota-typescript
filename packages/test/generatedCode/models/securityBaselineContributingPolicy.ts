import {SecurityBaselinePolicySourceType} from './securityBaselinePolicySourceType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** The security baseline compliance state of a setting for a device */
export class SecurityBaselineContributingPolicy implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Name of the policy */
    private _displayName?: string | undefined;
    /** Unique identifier of the policy */
    private _sourceId?: string | undefined;
    /** Authoring source of a policy */
    private _sourceType?: SecurityBaselinePolicySourceType | undefined;
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
     * Instantiates a new securityBaselineContributingPolicy and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the displayName property value. Name of the policy
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Name of the policy
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
            "displayName": n => { this.displayName = n.getStringValue(); },
            "sourceId": n => { this.sourceId = n.getStringValue(); },
            "sourceType": n => { this.sourceType = n.getEnumValue<SecurityBaselinePolicySourceType>(SecurityBaselinePolicySourceType); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("sourceId", this.sourceId);
        writer.writeEnumValue<SecurityBaselinePolicySourceType>("sourceType", this.sourceType);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the sourceId property value. Unique identifier of the policy
     * @returns a string
     */
    public get sourceId() {
        return this._sourceId;
    };
    /**
     * Sets the sourceId property value. Unique identifier of the policy
     * @param value Value to set for the sourceId property.
     */
    public set sourceId(value: string | undefined) {
        this._sourceId = value;
    };
    /**
     * Gets the sourceType property value. Authoring source of a policy
     * @returns a securityBaselinePolicySourceType
     */
    public get sourceType() {
        return this._sourceType;
    };
    /**
     * Sets the sourceType property value. Authoring source of a policy
     * @param value Value to set for the sourceType property.
     */
    public set sourceType(value: SecurityBaselinePolicySourceType | undefined) {
        this._sourceType = value;
    };
}
