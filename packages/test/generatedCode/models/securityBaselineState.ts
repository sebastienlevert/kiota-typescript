import {createSecurityBaselineSettingStateFromDiscriminatorValue} from './createSecurityBaselineSettingStateFromDiscriminatorValue';
import {Entity, SecurityBaselineSettingState} from './index';
import {SecurityBaselineComplianceState} from './securityBaselineComplianceState';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SecurityBaselineState extends Entity implements Parsable {
    /** The display name of the security baseline */
    private _displayName?: string | undefined;
    /** The security baseline template id */
    private _securityBaselineTemplateId?: string | undefined;
    /** The security baseline state for different settings for a device */
    private _settingStates?: SecurityBaselineSettingState[] | undefined;
    /** Security Baseline Compliance State */
    private _state?: SecurityBaselineComplianceState | undefined;
    /** User Principal Name */
    private _userPrincipalName?: string | undefined;
    /**
     * Instantiates a new SecurityBaselineState and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the displayName property value. The display name of the security baseline
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The display name of the security baseline
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
        return {...super.getFieldDeserializers(),
            "displayName": n => { this.displayName = n.getStringValue(); },
            "securityBaselineTemplateId": n => { this.securityBaselineTemplateId = n.getStringValue(); },
            "settingStates": n => { this.settingStates = n.getCollectionOfObjectValues<SecurityBaselineSettingState>(createSecurityBaselineSettingStateFromDiscriminatorValue); },
            "state": n => { this.state = n.getEnumValue<SecurityBaselineComplianceState>(SecurityBaselineComplianceState); },
            "userPrincipalName": n => { this.userPrincipalName = n.getStringValue(); },
        };
    };
    /**
     * Gets the securityBaselineTemplateId property value. The security baseline template id
     * @returns a string
     */
    public get securityBaselineTemplateId() {
        return this._securityBaselineTemplateId;
    };
    /**
     * Sets the securityBaselineTemplateId property value. The security baseline template id
     * @param value Value to set for the securityBaselineTemplateId property.
     */
    public set securityBaselineTemplateId(value: string | undefined) {
        this._securityBaselineTemplateId = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("securityBaselineTemplateId", this.securityBaselineTemplateId);
        writer.writeCollectionOfObjectValues<SecurityBaselineSettingState>("settingStates", this.settingStates);
        writer.writeEnumValue<SecurityBaselineComplianceState>("state", this.state);
        writer.writeStringValue("userPrincipalName", this.userPrincipalName);
    };
    /**
     * Gets the settingStates property value. The security baseline state for different settings for a device
     * @returns a securityBaselineSettingState
     */
    public get settingStates() {
        return this._settingStates;
    };
    /**
     * Sets the settingStates property value. The security baseline state for different settings for a device
     * @param value Value to set for the settingStates property.
     */
    public set settingStates(value: SecurityBaselineSettingState[] | undefined) {
        this._settingStates = value;
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
    /**
     * Gets the userPrincipalName property value. User Principal Name
     * @returns a string
     */
    public get userPrincipalName() {
        return this._userPrincipalName;
    };
    /**
     * Sets the userPrincipalName property value. User Principal Name
     * @param value Value to set for the userPrincipalName property.
     */
    public set userPrincipalName(value: string | undefined) {
        this._userPrincipalName = value;
    };
}
