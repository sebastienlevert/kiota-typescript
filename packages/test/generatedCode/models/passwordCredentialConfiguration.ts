import {AppCredentialRestrictionType} from './appCredentialRestrictionType';
import {AdditionalDataHolder, Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PasswordCredentialConfiguration implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The maxLifetime property */
    private _maxLifetime?: Duration | undefined;
    /** Enforces the policy for an app created on or after the enforcement date. For existing applications, the enforcement date would be backdated. To apply to all applications, this date would be null. */
    private _restrictForAppsCreatedAfterDateTime?: Date | undefined;
    /** The restrictionType property */
    private _restrictionType?: AppCredentialRestrictionType | undefined;
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
     * Instantiates a new passwordCredentialConfiguration and sets the default values.
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
            "maxLifetime": n => { this.maxLifetime = n.getDurationValue(); },
            "restrictForAppsCreatedAfterDateTime": n => { this.restrictForAppsCreatedAfterDateTime = n.getDateValue(); },
            "restrictionType": n => { this.restrictionType = n.getEnumValue<AppCredentialRestrictionType>(AppCredentialRestrictionType); },
        };
    };
    /**
     * Gets the maxLifetime property value. The maxLifetime property
     * @returns a Duration
     */
    public get maxLifetime() {
        return this._maxLifetime;
    };
    /**
     * Sets the maxLifetime property value. The maxLifetime property
     * @param value Value to set for the maxLifetime property.
     */
    public set maxLifetime(value: Duration | undefined) {
        this._maxLifetime = value;
    };
    /**
     * Gets the restrictForAppsCreatedAfterDateTime property value. Enforces the policy for an app created on or after the enforcement date. For existing applications, the enforcement date would be backdated. To apply to all applications, this date would be null.
     * @returns a Date
     */
    public get restrictForAppsCreatedAfterDateTime() {
        return this._restrictForAppsCreatedAfterDateTime;
    };
    /**
     * Sets the restrictForAppsCreatedAfterDateTime property value. Enforces the policy for an app created on or after the enforcement date. For existing applications, the enforcement date would be backdated. To apply to all applications, this date would be null.
     * @param value Value to set for the restrictForAppsCreatedAfterDateTime property.
     */
    public set restrictForAppsCreatedAfterDateTime(value: Date | undefined) {
        this._restrictForAppsCreatedAfterDateTime = value;
    };
    /**
     * Gets the restrictionType property value. The restrictionType property
     * @returns a appCredentialRestrictionType
     */
    public get restrictionType() {
        return this._restrictionType;
    };
    /**
     * Sets the restrictionType property value. The restrictionType property
     * @param value Value to set for the restrictionType property.
     */
    public set restrictionType(value: AppCredentialRestrictionType | undefined) {
        this._restrictionType = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeDurationValue("maxLifetime", this.maxLifetime);
        writer.writeDateValue("restrictForAppsCreatedAfterDateTime", this.restrictForAppsCreatedAfterDateTime);
        writer.writeEnumValue<AppCredentialRestrictionType>("restrictionType", this.restrictionType);
        writer.writeAdditionalData(this.additionalData);
    };
}
