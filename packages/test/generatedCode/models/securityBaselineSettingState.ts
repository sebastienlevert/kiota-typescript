import {createSecurityBaselineContributingPolicyFromDiscriminatorValue} from './createSecurityBaselineContributingPolicyFromDiscriminatorValue';
import {createSettingSourceFromDiscriminatorValue} from './createSettingSourceFromDiscriminatorValue';
import {Entity, SecurityBaselineContributingPolicy, SettingSource} from './index';
import {SecurityBaselineComplianceState} from './securityBaselineComplianceState';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** The security baseline compliance state of a setting for a device */
export class SecurityBaselineSettingState extends Entity implements Parsable {
    /** The policies that contribute to this setting instance */
    private _contributingPolicies?: SecurityBaselineContributingPolicy[] | undefined;
    /** The error code if the setting is in error state */
    private _errorCode?: string | undefined;
    /** The setting category id which this setting belongs to */
    private _settingCategoryId?: string | undefined;
    /** The setting category name which this setting belongs to */
    private _settingCategoryName?: string | undefined;
    /** The setting id guid */
    private _settingId?: string | undefined;
    /** The setting name that is being reported */
    private _settingName?: string | undefined;
    /** The policies that contribute to this setting instance */
    private _sourcePolicies?: SettingSource[] | undefined;
    /** Security Baseline Compliance State */
    private _state?: SecurityBaselineComplianceState | undefined;
    /**
     * Instantiates a new securityBaselineSettingState and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the contributingPolicies property value. The policies that contribute to this setting instance
     * @returns a securityBaselineContributingPolicy
     */
    public get contributingPolicies() {
        return this._contributingPolicies;
    };
    /**
     * Sets the contributingPolicies property value. The policies that contribute to this setting instance
     * @param value Value to set for the contributingPolicies property.
     */
    public set contributingPolicies(value: SecurityBaselineContributingPolicy[] | undefined) {
        this._contributingPolicies = value;
    };
    /**
     * Gets the errorCode property value. The error code if the setting is in error state
     * @returns a string
     */
    public get errorCode() {
        return this._errorCode;
    };
    /**
     * Sets the errorCode property value. The error code if the setting is in error state
     * @param value Value to set for the errorCode property.
     */
    public set errorCode(value: string | undefined) {
        this._errorCode = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "contributingPolicies": n => { this.contributingPolicies = n.getCollectionOfObjectValues<SecurityBaselineContributingPolicy>(createSecurityBaselineContributingPolicyFromDiscriminatorValue); },
            "errorCode": n => { this.errorCode = n.getStringValue(); },
            "settingCategoryId": n => { this.settingCategoryId = n.getStringValue(); },
            "settingCategoryName": n => { this.settingCategoryName = n.getStringValue(); },
            "settingId": n => { this.settingId = n.getStringValue(); },
            "settingName": n => { this.settingName = n.getStringValue(); },
            "sourcePolicies": n => { this.sourcePolicies = n.getCollectionOfObjectValues<SettingSource>(createSettingSourceFromDiscriminatorValue); },
            "state": n => { this.state = n.getEnumValue<SecurityBaselineComplianceState>(SecurityBaselineComplianceState); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<SecurityBaselineContributingPolicy>("contributingPolicies", this.contributingPolicies);
        writer.writeStringValue("errorCode", this.errorCode);
        writer.writeStringValue("settingCategoryId", this.settingCategoryId);
        writer.writeStringValue("settingCategoryName", this.settingCategoryName);
        writer.writeStringValue("settingId", this.settingId);
        writer.writeStringValue("settingName", this.settingName);
        writer.writeCollectionOfObjectValues<SettingSource>("sourcePolicies", this.sourcePolicies);
        writer.writeEnumValue<SecurityBaselineComplianceState>("state", this.state);
    };
    /**
     * Gets the settingCategoryId property value. The setting category id which this setting belongs to
     * @returns a string
     */
    public get settingCategoryId() {
        return this._settingCategoryId;
    };
    /**
     * Sets the settingCategoryId property value. The setting category id which this setting belongs to
     * @param value Value to set for the settingCategoryId property.
     */
    public set settingCategoryId(value: string | undefined) {
        this._settingCategoryId = value;
    };
    /**
     * Gets the settingCategoryName property value. The setting category name which this setting belongs to
     * @returns a string
     */
    public get settingCategoryName() {
        return this._settingCategoryName;
    };
    /**
     * Sets the settingCategoryName property value. The setting category name which this setting belongs to
     * @param value Value to set for the settingCategoryName property.
     */
    public set settingCategoryName(value: string | undefined) {
        this._settingCategoryName = value;
    };
    /**
     * Gets the settingId property value. The setting id guid
     * @returns a string
     */
    public get settingId() {
        return this._settingId;
    };
    /**
     * Sets the settingId property value. The setting id guid
     * @param value Value to set for the settingId property.
     */
    public set settingId(value: string | undefined) {
        this._settingId = value;
    };
    /**
     * Gets the settingName property value. The setting name that is being reported
     * @returns a string
     */
    public get settingName() {
        return this._settingName;
    };
    /**
     * Sets the settingName property value. The setting name that is being reported
     * @param value Value to set for the settingName property.
     */
    public set settingName(value: string | undefined) {
        this._settingName = value;
    };
    /**
     * Gets the sourcePolicies property value. The policies that contribute to this setting instance
     * @returns a settingSource
     */
    public get sourcePolicies() {
        return this._sourcePolicies;
    };
    /**
     * Sets the sourcePolicies property value. The policies that contribute to this setting instance
     * @param value Value to set for the sourcePolicies property.
     */
    public set sourcePolicies(value: SettingSource[] | undefined) {
        this._sourcePolicies = value;
    };
    /**
     * Gets the state property value. Security Baseline Compliance State
     * @returns a securityBaselineComplianceState
     */
    public get state() {
        return this._state;
    };
    /**
     * Sets the state property value. Security Baseline Compliance State
     * @param value Value to set for the state property.
     */
    public set state(value: SecurityBaselineComplianceState | undefined) {
        this._state = value;
    };
}
