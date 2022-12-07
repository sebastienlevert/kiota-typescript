import {CloudPcDiskEncryptionState} from './cloudPcDiskEncryptionState';
import {CloudPcOperatingSystem} from './cloudPcOperatingSystem';
import {CloudPcProvisioningType} from './cloudPcProvisioningType';
import {CloudPcServicePlanType} from './cloudPcServicePlanType';
import {CloudPcStatus} from './cloudPcStatus';
import {CloudPcUserAccountType} from './cloudPcUserAccountType';
import {createCloudPcConnectivityResultFromDiscriminatorValue} from './createCloudPcConnectivityResultFromDiscriminatorValue';
import {createCloudPcLoginResultFromDiscriminatorValue} from './createCloudPcLoginResultFromDiscriminatorValue';
import {createCloudPcPartnerAgentInstallResultFromDiscriminatorValue} from './createCloudPcPartnerAgentInstallResultFromDiscriminatorValue';
import {createCloudPcRemoteActionResultFromDiscriminatorValue} from './createCloudPcRemoteActionResultFromDiscriminatorValue';
import {createCloudPcStatusDetailsFromDiscriminatorValue} from './createCloudPcStatusDetailsFromDiscriminatorValue';
import {CloudPcConnectivityResult, CloudPcLoginResult, CloudPcPartnerAgentInstallResult, CloudPcRemoteActionResult, CloudPcStatusDetails, Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CloudPC extends Entity implements Parsable {
    /** The Azure Active Directory (Azure AD) device ID of the Cloud PC. */
    private _aadDeviceId?: string | undefined;
    /** The connectivityResult property */
    private _connectivityResult?: CloudPcConnectivityResult | undefined;
    /** The diskEncryptionState property */
    private _diskEncryptionState?: CloudPcDiskEncryptionState | undefined;
    /** The display name of the Cloud PC. */
    private _displayName?: string | undefined;
    /** The date and time when the grace period ends and reprovisioning/deprovisioning happens. Required only if the status is inGracePeriod. The timestamp is shown in ISO 8601 format and Coordinated Universal Time (UTC). For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. */
    private _gracePeriodEndDateTime?: Date | undefined;
    /** Name of the OS image that's on the Cloud PC. */
    private _imageDisplayName?: string | undefined;
    /** The lastLoginResult property */
    private _lastLoginResult?: CloudPcLoginResult | undefined;
    /** The last modified date and time of the Cloud PC. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. */
    private _lastModifiedDateTime?: Date | undefined;
    /** The lastRemoteActionResult property */
    private _lastRemoteActionResult?: CloudPcRemoteActionResult | undefined;
    /** The Intune device ID of the Cloud PC. */
    private _managedDeviceId?: string | undefined;
    /** The Intune device name of the Cloud PC. */
    private _managedDeviceName?: string | undefined;
    /** The Azure network connection that is applied during the provisioning of Cloud PCs. */
    private _onPremisesConnectionName?: string | undefined;
    /** The osVersion property */
    private _osVersion?: CloudPcOperatingSystem | undefined;
    /** The partnerAgentInstallResults property */
    private _partnerAgentInstallResults?: CloudPcPartnerAgentInstallResult[] | undefined;
    /** The provisioning policy ID of the Cloud PC. */
    private _provisioningPolicyId?: string | undefined;
    /** The provisioning policy that is applied during the provisioning of Cloud PCs. */
    private _provisioningPolicyName?: string | undefined;
    /** The provisioningType property */
    private _provisioningType?: CloudPcProvisioningType | undefined;
    /** The service plan ID of the Cloud PC. */
    private _servicePlanId?: string | undefined;
    /** The service plan name of the Cloud PC. */
    private _servicePlanName?: string | undefined;
    /** The servicePlanType property */
    private _servicePlanType?: CloudPcServicePlanType | undefined;
    /** The status property */
    private _status?: CloudPcStatus | undefined;
    /** The statusDetails property */
    private _statusDetails?: CloudPcStatusDetails | undefined;
    /** The userAccountType property */
    private _userAccountType?: CloudPcUserAccountType | undefined;
    /** The user principal name (UPN) of the user assigned to the Cloud PC. */
    private _userPrincipalName?: string | undefined;
    /**
     * Gets the aadDeviceId property value. The Azure Active Directory (Azure AD) device ID of the Cloud PC.
     * @returns a string
     */
    public get aadDeviceId() {
        return this._aadDeviceId;
    };
    /**
     * Sets the aadDeviceId property value. The Azure Active Directory (Azure AD) device ID of the Cloud PC.
     * @param value Value to set for the aadDeviceId property.
     */
    public set aadDeviceId(value: string | undefined) {
        this._aadDeviceId = value;
    };
    /**
     * Gets the connectivityResult property value. The connectivityResult property
     * @returns a cloudPcConnectivityResult
     */
    public get connectivityResult() {
        return this._connectivityResult;
    };
    /**
     * Sets the connectivityResult property value. The connectivityResult property
     * @param value Value to set for the connectivityResult property.
     */
    public set connectivityResult(value: CloudPcConnectivityResult | undefined) {
        this._connectivityResult = value;
    };
    /**
     * Instantiates a new cloudPC and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the diskEncryptionState property value. The diskEncryptionState property
     * @returns a cloudPcDiskEncryptionState
     */
    public get diskEncryptionState() {
        return this._diskEncryptionState;
    };
    /**
     * Sets the diskEncryptionState property value. The diskEncryptionState property
     * @param value Value to set for the diskEncryptionState property.
     */
    public set diskEncryptionState(value: CloudPcDiskEncryptionState | undefined) {
        this._diskEncryptionState = value;
    };
    /**
     * Gets the displayName property value. The display name of the Cloud PC.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The display name of the Cloud PC.
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
            "aadDeviceId": n => { this.aadDeviceId = n.getStringValue(); },
            "connectivityResult": n => { this.connectivityResult = n.getObjectValue<CloudPcConnectivityResult>(createCloudPcConnectivityResultFromDiscriminatorValue); },
            "diskEncryptionState": n => { this.diskEncryptionState = n.getEnumValue<CloudPcDiskEncryptionState>(CloudPcDiskEncryptionState); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "gracePeriodEndDateTime": n => { this.gracePeriodEndDateTime = n.getDateValue(); },
            "imageDisplayName": n => { this.imageDisplayName = n.getStringValue(); },
            "lastLoginResult": n => { this.lastLoginResult = n.getObjectValue<CloudPcLoginResult>(createCloudPcLoginResultFromDiscriminatorValue); },
            "lastModifiedDateTime": n => { this.lastModifiedDateTime = n.getDateValue(); },
            "lastRemoteActionResult": n => { this.lastRemoteActionResult = n.getObjectValue<CloudPcRemoteActionResult>(createCloudPcRemoteActionResultFromDiscriminatorValue); },
            "managedDeviceId": n => { this.managedDeviceId = n.getStringValue(); },
            "managedDeviceName": n => { this.managedDeviceName = n.getStringValue(); },
            "onPremisesConnectionName": n => { this.onPremisesConnectionName = n.getStringValue(); },
            "osVersion": n => { this.osVersion = n.getEnumValue<CloudPcOperatingSystem>(CloudPcOperatingSystem); },
            "partnerAgentInstallResults": n => { this.partnerAgentInstallResults = n.getCollectionOfObjectValues<CloudPcPartnerAgentInstallResult>(createCloudPcPartnerAgentInstallResultFromDiscriminatorValue); },
            "provisioningPolicyId": n => { this.provisioningPolicyId = n.getStringValue(); },
            "provisioningPolicyName": n => { this.provisioningPolicyName = n.getStringValue(); },
            "provisioningType": n => { this.provisioningType = n.getEnumValue<CloudPcProvisioningType>(CloudPcProvisioningType); },
            "servicePlanId": n => { this.servicePlanId = n.getStringValue(); },
            "servicePlanName": n => { this.servicePlanName = n.getStringValue(); },
            "servicePlanType": n => { this.servicePlanType = n.getEnumValue<CloudPcServicePlanType>(CloudPcServicePlanType); },
            "status": n => { this.status = n.getEnumValue<CloudPcStatus>(CloudPcStatus); },
            "statusDetails": n => { this.statusDetails = n.getObjectValue<CloudPcStatusDetails>(createCloudPcStatusDetailsFromDiscriminatorValue); },
            "userAccountType": n => { this.userAccountType = n.getEnumValue<CloudPcUserAccountType>(CloudPcUserAccountType); },
            "userPrincipalName": n => { this.userPrincipalName = n.getStringValue(); },
        };
    };
    /**
     * Gets the gracePeriodEndDateTime property value. The date and time when the grace period ends and reprovisioning/deprovisioning happens. Required only if the status is inGracePeriod. The timestamp is shown in ISO 8601 format and Coordinated Universal Time (UTC). For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     * @returns a Date
     */
    public get gracePeriodEndDateTime() {
        return this._gracePeriodEndDateTime;
    };
    /**
     * Sets the gracePeriodEndDateTime property value. The date and time when the grace period ends and reprovisioning/deprovisioning happens. Required only if the status is inGracePeriod. The timestamp is shown in ISO 8601 format and Coordinated Universal Time (UTC). For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     * @param value Value to set for the gracePeriodEndDateTime property.
     */
    public set gracePeriodEndDateTime(value: Date | undefined) {
        this._gracePeriodEndDateTime = value;
    };
    /**
     * Gets the imageDisplayName property value. Name of the OS image that's on the Cloud PC.
     * @returns a string
     */
    public get imageDisplayName() {
        return this._imageDisplayName;
    };
    /**
     * Sets the imageDisplayName property value. Name of the OS image that's on the Cloud PC.
     * @param value Value to set for the imageDisplayName property.
     */
    public set imageDisplayName(value: string | undefined) {
        this._imageDisplayName = value;
    };
    /**
     * Gets the lastLoginResult property value. The lastLoginResult property
     * @returns a cloudPcLoginResult
     */
    public get lastLoginResult() {
        return this._lastLoginResult;
    };
    /**
     * Sets the lastLoginResult property value. The lastLoginResult property
     * @param value Value to set for the lastLoginResult property.
     */
    public set lastLoginResult(value: CloudPcLoginResult | undefined) {
        this._lastLoginResult = value;
    };
    /**
     * Gets the lastModifiedDateTime property value. The last modified date and time of the Cloud PC. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     * @returns a Date
     */
    public get lastModifiedDateTime() {
        return this._lastModifiedDateTime;
    };
    /**
     * Sets the lastModifiedDateTime property value. The last modified date and time of the Cloud PC. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     * @param value Value to set for the lastModifiedDateTime property.
     */
    public set lastModifiedDateTime(value: Date | undefined) {
        this._lastModifiedDateTime = value;
    };
    /**
     * Gets the lastRemoteActionResult property value. The lastRemoteActionResult property
     * @returns a cloudPcRemoteActionResult
     */
    public get lastRemoteActionResult() {
        return this._lastRemoteActionResult;
    };
    /**
     * Sets the lastRemoteActionResult property value. The lastRemoteActionResult property
     * @param value Value to set for the lastRemoteActionResult property.
     */
    public set lastRemoteActionResult(value: CloudPcRemoteActionResult | undefined) {
        this._lastRemoteActionResult = value;
    };
    /**
     * Gets the managedDeviceId property value. The Intune device ID of the Cloud PC.
     * @returns a string
     */
    public get managedDeviceId() {
        return this._managedDeviceId;
    };
    /**
     * Sets the managedDeviceId property value. The Intune device ID of the Cloud PC.
     * @param value Value to set for the managedDeviceId property.
     */
    public set managedDeviceId(value: string | undefined) {
        this._managedDeviceId = value;
    };
    /**
     * Gets the managedDeviceName property value. The Intune device name of the Cloud PC.
     * @returns a string
     */
    public get managedDeviceName() {
        return this._managedDeviceName;
    };
    /**
     * Sets the managedDeviceName property value. The Intune device name of the Cloud PC.
     * @param value Value to set for the managedDeviceName property.
     */
    public set managedDeviceName(value: string | undefined) {
        this._managedDeviceName = value;
    };
    /**
     * Gets the onPremisesConnectionName property value. The Azure network connection that is applied during the provisioning of Cloud PCs.
     * @returns a string
     */
    public get onPremisesConnectionName() {
        return this._onPremisesConnectionName;
    };
    /**
     * Sets the onPremisesConnectionName property value. The Azure network connection that is applied during the provisioning of Cloud PCs.
     * @param value Value to set for the onPremisesConnectionName property.
     */
    public set onPremisesConnectionName(value: string | undefined) {
        this._onPremisesConnectionName = value;
    };
    /**
     * Gets the osVersion property value. The osVersion property
     * @returns a cloudPcOperatingSystem
     */
    public get osVersion() {
        return this._osVersion;
    };
    /**
     * Sets the osVersion property value. The osVersion property
     * @param value Value to set for the osVersion property.
     */
    public set osVersion(value: CloudPcOperatingSystem | undefined) {
        this._osVersion = value;
    };
    /**
     * Gets the partnerAgentInstallResults property value. The partnerAgentInstallResults property
     * @returns a cloudPcPartnerAgentInstallResult
     */
    public get partnerAgentInstallResults() {
        return this._partnerAgentInstallResults;
    };
    /**
     * Sets the partnerAgentInstallResults property value. The partnerAgentInstallResults property
     * @param value Value to set for the partnerAgentInstallResults property.
     */
    public set partnerAgentInstallResults(value: CloudPcPartnerAgentInstallResult[] | undefined) {
        this._partnerAgentInstallResults = value;
    };
    /**
     * Gets the provisioningPolicyId property value. The provisioning policy ID of the Cloud PC.
     * @returns a string
     */
    public get provisioningPolicyId() {
        return this._provisioningPolicyId;
    };
    /**
     * Sets the provisioningPolicyId property value. The provisioning policy ID of the Cloud PC.
     * @param value Value to set for the provisioningPolicyId property.
     */
    public set provisioningPolicyId(value: string | undefined) {
        this._provisioningPolicyId = value;
    };
    /**
     * Gets the provisioningPolicyName property value. The provisioning policy that is applied during the provisioning of Cloud PCs.
     * @returns a string
     */
    public get provisioningPolicyName() {
        return this._provisioningPolicyName;
    };
    /**
     * Sets the provisioningPolicyName property value. The provisioning policy that is applied during the provisioning of Cloud PCs.
     * @param value Value to set for the provisioningPolicyName property.
     */
    public set provisioningPolicyName(value: string | undefined) {
        this._provisioningPolicyName = value;
    };
    /**
     * Gets the provisioningType property value. The provisioningType property
     * @returns a cloudPcProvisioningType
     */
    public get provisioningType() {
        return this._provisioningType;
    };
    /**
     * Sets the provisioningType property value. The provisioningType property
     * @param value Value to set for the provisioningType property.
     */
    public set provisioningType(value: CloudPcProvisioningType | undefined) {
        this._provisioningType = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("aadDeviceId", this.aadDeviceId);
        writer.writeObjectValue<CloudPcConnectivityResult>("connectivityResult", this.connectivityResult);
        writer.writeEnumValue<CloudPcDiskEncryptionState>("diskEncryptionState", this.diskEncryptionState);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeDateValue("gracePeriodEndDateTime", this.gracePeriodEndDateTime);
        writer.writeStringValue("imageDisplayName", this.imageDisplayName);
        writer.writeObjectValue<CloudPcLoginResult>("lastLoginResult", this.lastLoginResult);
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        writer.writeObjectValue<CloudPcRemoteActionResult>("lastRemoteActionResult", this.lastRemoteActionResult);
        writer.writeStringValue("managedDeviceId", this.managedDeviceId);
        writer.writeStringValue("managedDeviceName", this.managedDeviceName);
        writer.writeStringValue("onPremisesConnectionName", this.onPremisesConnectionName);
        writer.writeEnumValue<CloudPcOperatingSystem>("osVersion", this.osVersion);
        writer.writeCollectionOfObjectValues<CloudPcPartnerAgentInstallResult>("partnerAgentInstallResults", this.partnerAgentInstallResults);
        writer.writeStringValue("provisioningPolicyId", this.provisioningPolicyId);
        writer.writeStringValue("provisioningPolicyName", this.provisioningPolicyName);
        writer.writeEnumValue<CloudPcProvisioningType>("provisioningType", this.provisioningType);
        writer.writeStringValue("servicePlanId", this.servicePlanId);
        writer.writeStringValue("servicePlanName", this.servicePlanName);
        writer.writeEnumValue<CloudPcServicePlanType>("servicePlanType", this.servicePlanType);
        writer.writeEnumValue<CloudPcStatus>("status", this.status);
        writer.writeObjectValue<CloudPcStatusDetails>("statusDetails", this.statusDetails);
        writer.writeEnumValue<CloudPcUserAccountType>("userAccountType", this.userAccountType);
        writer.writeStringValue("userPrincipalName", this.userPrincipalName);
    };
    /**
     * Gets the servicePlanId property value. The service plan ID of the Cloud PC.
     * @returns a string
     */
    public get servicePlanId() {
        return this._servicePlanId;
    };
    /**
     * Sets the servicePlanId property value. The service plan ID of the Cloud PC.
     * @param value Value to set for the servicePlanId property.
     */
    public set servicePlanId(value: string | undefined) {
        this._servicePlanId = value;
    };
    /**
     * Gets the servicePlanName property value. The service plan name of the Cloud PC.
     * @returns a string
     */
    public get servicePlanName() {
        return this._servicePlanName;
    };
    /**
     * Sets the servicePlanName property value. The service plan name of the Cloud PC.
     * @param value Value to set for the servicePlanName property.
     */
    public set servicePlanName(value: string | undefined) {
        this._servicePlanName = value;
    };
    /**
     * Gets the servicePlanType property value. The servicePlanType property
     * @returns a cloudPcServicePlanType
     */
    public get servicePlanType() {
        return this._servicePlanType;
    };
    /**
     * Sets the servicePlanType property value. The servicePlanType property
     * @param value Value to set for the servicePlanType property.
     */
    public set servicePlanType(value: CloudPcServicePlanType | undefined) {
        this._servicePlanType = value;
    };
    /**
     * Gets the status property value. The status property
     * @returns a cloudPcStatus
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. The status property
     * @param value Value to set for the status property.
     */
    public set status(value: CloudPcStatus | undefined) {
        this._status = value;
    };
    /**
     * Gets the statusDetails property value. The statusDetails property
     * @returns a cloudPcStatusDetails
     */
    public get statusDetails() {
        return this._statusDetails;
    };
    /**
     * Sets the statusDetails property value. The statusDetails property
     * @param value Value to set for the statusDetails property.
     */
    public set statusDetails(value: CloudPcStatusDetails | undefined) {
        this._statusDetails = value;
    };
    /**
     * Gets the userAccountType property value. The userAccountType property
     * @returns a cloudPcUserAccountType
     */
    public get userAccountType() {
        return this._userAccountType;
    };
    /**
     * Sets the userAccountType property value. The userAccountType property
     * @param value Value to set for the userAccountType property.
     */
    public set userAccountType(value: CloudPcUserAccountType | undefined) {
        this._userAccountType = value;
    };
    /**
     * Gets the userPrincipalName property value. The user principal name (UPN) of the user assigned to the Cloud PC.
     * @returns a string
     */
    public get userPrincipalName() {
        return this._userPrincipalName;
    };
    /**
     * Sets the userPrincipalName property value. The user principal name (UPN) of the user assigned to the Cloud PC.
     * @param value Value to set for the userPrincipalName property.
     */
    public set userPrincipalName(value: string | undefined) {
        this._userPrincipalName = value;
    };
}
