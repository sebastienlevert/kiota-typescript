import {ChassisType} from './chassisType';
import {ComplianceState} from './complianceState';
import {createAssignmentFilterEvaluationStatusDetailsFromDiscriminatorValue} from './createAssignmentFilterEvaluationStatusDetailsFromDiscriminatorValue';
import {createChromeOSDevicePropertyFromDiscriminatorValue} from './createChromeOSDevicePropertyFromDiscriminatorValue';
import {createCloudPcRemoteActionResultFromDiscriminatorValue} from './createCloudPcRemoteActionResultFromDiscriminatorValue';
import {createConfigurationManagerClientEnabledFeaturesFromDiscriminatorValue} from './createConfigurationManagerClientEnabledFeaturesFromDiscriminatorValue';
import {createConfigurationManagerClientHealthStateFromDiscriminatorValue} from './createConfigurationManagerClientHealthStateFromDiscriminatorValue';
import {createConfigurationManagerClientInformationFromDiscriminatorValue} from './createConfigurationManagerClientInformationFromDiscriminatorValue';
import {createDetectedAppFromDiscriminatorValue} from './createDetectedAppFromDiscriminatorValue';
import {createDeviceActionResultFromDiscriminatorValue} from './createDeviceActionResultFromDiscriminatorValue';
import {createDeviceCategoryFromDiscriminatorValue} from './createDeviceCategoryFromDiscriminatorValue';
import {createDeviceCompliancePolicyStateFromDiscriminatorValue} from './createDeviceCompliancePolicyStateFromDiscriminatorValue';
import {createDeviceConfigurationStateFromDiscriminatorValue} from './createDeviceConfigurationStateFromDiscriminatorValue';
import {createDeviceHealthAttestationStateFromDiscriminatorValue} from './createDeviceHealthAttestationStateFromDiscriminatorValue';
import {createDeviceLogCollectionResponseFromDiscriminatorValue} from './createDeviceLogCollectionResponseFromDiscriminatorValue';
import {createHardwareInformationFromDiscriminatorValue} from './createHardwareInformationFromDiscriminatorValue';
import {createLoggedOnUserFromDiscriminatorValue} from './createLoggedOnUserFromDiscriminatorValue';
import {createManagedDeviceMobileAppConfigurationStateFromDiscriminatorValue} from './createManagedDeviceMobileAppConfigurationStateFromDiscriminatorValue';
import {createSecurityBaselineStateFromDiscriminatorValue} from './createSecurityBaselineStateFromDiscriminatorValue';
import {createUserFromDiscriminatorValue} from './createUserFromDiscriminatorValue';
import {createWindowsProtectionStateFromDiscriminatorValue} from './createWindowsProtectionStateFromDiscriminatorValue';
import {DeviceEnrollmentType} from './deviceEnrollmentType';
import {DeviceManagementExchangeAccessState} from './deviceManagementExchangeAccessState';
import {DeviceManagementExchangeAccessStateReason} from './deviceManagementExchangeAccessStateReason';
import {DeviceRegistrationState} from './deviceRegistrationState';
import {DeviceType} from './deviceType';
import {AssignmentFilterEvaluationStatusDetails, ChromeOSDeviceProperty, CloudPcRemoteActionResult, ConfigurationManagerClientEnabledFeatures, ConfigurationManagerClientHealthState, ConfigurationManagerClientInformation, DetectedApp, DeviceActionResult, DeviceCategory, DeviceCompliancePolicyState, DeviceConfigurationState, DeviceHealthAttestationState, DeviceLogCollectionResponse, Entity, HardwareInformation, LoggedOnUser, ManagedDeviceMobileAppConfigurationState, SecurityBaselineState, User, WindowsProtectionState} from './index';
import {JoinType} from './joinType';
import {LostModeState} from './lostModeState';
import {ManagedDeviceArchitecture} from './managedDeviceArchitecture';
import {ManagedDeviceManagementFeatures} from './managedDeviceManagementFeatures';
import {ManagedDeviceOwnerType} from './managedDeviceOwnerType';
import {ManagedDevicePartnerReportedHealthState} from './managedDevicePartnerReportedHealthState';
import {ManagementAgentType} from './managementAgentType';
import {ManagementState} from './managementState';
import {OwnerType} from './ownerType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Devices that are managed or pre-enrolled through Intune */
export class ManagedDevice extends Entity implements Parsable {
    /** Whether the device is Azure Active Directory registered. This property is read-only. */
    private _aadRegistered?: boolean | undefined;
    /** Code that allows the Activation Lock on a device to be bypassed. This property is read-only. */
    private _activationLockBypassCode?: string | undefined;
    /** Android security patch level. This property is read-only. */
    private _androidSecurityPatchLevel?: string | undefined;
    /** Managed device mobile app configuration states for this device. */
    private _assignmentFilterEvaluationStatusDetails?: AssignmentFilterEvaluationStatusDetails[] | undefined;
    /** Reports if the managed device is enrolled via auto-pilot. This property is read-only. */
    private _autopilotEnrolled?: boolean | undefined;
    /** The unique identifier for the Azure Active Directory device. Read only. This property is read-only. */
    private _azureActiveDirectoryDeviceId?: string | undefined;
    /** The unique identifier for the Azure Active Directory device. Read only. This property is read-only. */
    private _azureADDeviceId?: string | undefined;
    /** Whether the device is Azure Active Directory registered. This property is read-only. */
    private _azureADRegistered?: boolean | undefined;
    /** Reports if the managed device has an escrowed Bootstrap Token. This is only for macOS devices. To get, include BootstrapTokenEscrowed in the select clause and query with a device id. If FALSE, no bootstrap token is escrowed. If TRUE, the device has escrowed a bootstrap token with Intune. This property is read-only. */
    private _bootstrapTokenEscrowed?: boolean | undefined;
    /** Chassis type. */
    private _chassisType?: ChassisType | undefined;
    /** List of properties of the ChromeOS Device. */
    private _chromeOSDeviceInfo?: ChromeOSDeviceProperty[] | undefined;
    /** The cloudPcRemoteActionResults property */
    private _cloudPcRemoteActionResults?: CloudPcRemoteActionResult[] | undefined;
    /** The DateTime when device compliance grace period expires. This property is read-only. */
    private _complianceGracePeriodExpirationDateTime?: Date | undefined;
    /** Compliance state. */
    private _complianceState?: ComplianceState | undefined;
    /** configuration Manager client enabled features */
    private _configurationManagerClientEnabledFeatures?: ConfigurationManagerClientEnabledFeatures | undefined;
    /** Configuration manager client health state */
    private _configurationManagerClientHealthState?: ConfigurationManagerClientHealthState | undefined;
    /** Configuration Manager client information synced from SCCM */
    private _configurationManagerClientInformation?: ConfigurationManagerClientInformation | undefined;
    /** All applications currently installed on the device */
    private _detectedApps?: DetectedApp[] | undefined;
    /** List of ComplexType deviceActionResult objects. This property is read-only. */
    private _deviceActionResults?: DeviceActionResult[] | undefined;
    /** The deviceCategory property */
    private _deviceCategory?: DeviceCategory | undefined;
    /** Device category display name. This property is read-only. */
    private _deviceCategoryDisplayName?: string | undefined;
    /** Device compliance policy states for this device. */
    private _deviceCompliancePolicyStates?: DeviceCompliancePolicyState[] | undefined;
    /** Device configuration states for this device. */
    private _deviceConfigurationStates?: DeviceConfigurationState[] | undefined;
    /** Possible ways of adding a mobile device to management. */
    private _deviceEnrollmentType?: DeviceEnrollmentType | undefined;
    /** Indicates whether the device is DFCI managed. When TRUE the device is DFCI managed. When FALSE, the device is not DFCI managed. The default value is FALSE. */
    private _deviceFirmwareConfigurationInterfaceManaged?: boolean | undefined;
    /** The deviceHealthAttestationState property */
    private _deviceHealthAttestationState?: DeviceHealthAttestationState | undefined;
    /** Name of the device. This property is read-only. */
    private _deviceName?: string | undefined;
    /** Device registration status. */
    private _deviceRegistrationState?: DeviceRegistrationState | undefined;
    /** Device type. */
    private _deviceType?: DeviceType | undefined;
    /** Whether the device is Exchange ActiveSync activated. This property is read-only. */
    private _easActivated?: boolean | undefined;
    /** Exchange ActivationSync activation time of the device. This property is read-only. */
    private _easActivationDateTime?: Date | undefined;
    /** Exchange ActiveSync Id of the device. This property is read-only. */
    private _easDeviceId?: string | undefined;
    /** Email(s) for the user associated with the device. This property is read-only. */
    private _emailAddress?: string | undefined;
    /** Enrollment time of the device. This property is read-only. */
    private _enrolledDateTime?: Date | undefined;
    /** Name of the enrollment profile assigned to the device. Default value is empty string, indicating no enrollment profile was assgined. This property is read-only. */
    private _enrollmentProfileName?: string | undefined;
    /** Ethernet MAC. This property is read-only. */
    private _ethernetMacAddress?: string | undefined;
    /** Device Exchange Access State. */
    private _exchangeAccessState?: DeviceManagementExchangeAccessState | undefined;
    /** Device Exchange Access State Reason. */
    private _exchangeAccessStateReason?: DeviceManagementExchangeAccessStateReason | undefined;
    /** Last time the device contacted Exchange. This property is read-only. */
    private _exchangeLastSuccessfulSyncDateTime?: Date | undefined;
    /** Free Storage in Bytes. Default value is 0. Read-only. This property is read-only. */
    private _freeStorageSpaceInBytes?: number | undefined;
    /** Hardware information of a given device. */
    private _hardwareInformation?: HardwareInformation | undefined;
    /** Integrated Circuit Card Identifier, it is A SIM card's unique identification number. Return default value null in LIST managedDevices. Real value only returned in singel device GET call with device id and included in select parameter. Supports: $select. $Search is not supported. Read-only. This property is read-only. */
    private _iccid?: string | undefined;
    /** IMEI. This property is read-only. */
    private _imei?: string | undefined;
    /** Device encryption status. This property is read-only. */
    private _isEncrypted?: boolean | undefined;
    /** Device supervised status. This property is read-only. */
    private _isSupervised?: boolean | undefined;
    /** whether the device is jail broken or rooted. This property is read-only. */
    private _jailBroken?: string | undefined;
    /** Device enrollment join type. */
    private _joinType?: JoinType | undefined;
    /** The date and time that the device last completed a successful sync with Intune. This property is read-only. */
    private _lastSyncDateTime?: Date | undefined;
    /** List of log collection requests */
    private _logCollectionRequests?: DeviceLogCollectionResponse[] | undefined;
    /** State of lost mode, indicating if lost mode is enabled or disabled */
    private _lostModeState?: LostModeState | undefined;
    /** Managed device mobile app configuration states for this device. */
    private _managedDeviceMobileAppConfigurationStates?: ManagedDeviceMobileAppConfigurationState[] | undefined;
    /** Automatically generated name to identify a device. Can be overwritten to a user friendly name. */
    private _managedDeviceName?: string | undefined;
    /** Owner type of device. */
    private _managedDeviceOwnerType?: ManagedDeviceOwnerType | undefined;
    /** Management agent type. */
    private _managementAgent?: ManagementAgentType | undefined;
    /** Reports device management certificate expiration date. This property is read-only. */
    private _managementCertificateExpirationDate?: Date | undefined;
    /** Device management features. */
    private _managementFeatures?: ManagedDeviceManagementFeatures | undefined;
    /** Management state of device in Microsoft Intune. */
    private _managementState?: ManagementState | undefined;
    /** Manufacturer of the device. This property is read-only. */
    private _manufacturer?: string | undefined;
    /** MEID. This property is read-only. */
    private _meid?: string | undefined;
    /** Model of the device. This property is read-only. */
    private _model?: string | undefined;
    /** Notes on the device created by IT Admin. Return default value null in LIST managedDevices. Real value only returned in singel device GET call with device id and included in select parameter. Supports: $select.  $Search is not supported. */
    private _notes?: string | undefined;
    /** Operating system of the device. Windows, iOS, etc. This property is read-only. */
    private _operatingSystem?: string | undefined;
    /** Operating system version of the device. This property is read-only. */
    private _osVersion?: string | undefined;
    /** Owner type of device. */
    private _ownerType?: OwnerType | undefined;
    /** Available health states for the Device Health API */
    private _partnerReportedThreatState?: ManagedDevicePartnerReportedHealthState | undefined;
    /** Phone number of the device. This property is read-only. */
    private _phoneNumber?: string | undefined;
    /** Total Memory in Bytes. Return default value 0 in LIST managedDevices. Real value only returned in singel device GET call with device id and included in select parameter. Supports: $select. Default value is 0. Read-only. This property is read-only. */
    private _physicalMemoryInBytes?: number | undefined;
    /** Reports the DateTime the preferMdmOverGroupPolicy setting was set.  When set, the Intune MDM settings will override Group Policy settings if there is a conflict. Read Only. This property is read-only. */
    private _preferMdmOverGroupPolicyAppliedDateTime?: Date | undefined;
    /** Processor architecture */
    private _processorArchitecture?: ManagedDeviceArchitecture | undefined;
    /** An error string that identifies issues when creating Remote Assistance session objects. This property is read-only. */
    private _remoteAssistanceSessionErrorDetails?: string | undefined;
    /** Url that allows a Remote Assistance session to be established with the device. This property is read-only. */
    private _remoteAssistanceSessionUrl?: string | undefined;
    /** Reports if the managed iOS device is user approval enrollment. This property is read-only. */
    private _requireUserEnrollmentApproval?: boolean | undefined;
    /** Indicates the time after when a device will be auto retired because of scheduled action. This property is read-only. */
    private _retireAfterDateTime?: Date | undefined;
    /** List of Scope Tag IDs for this Device instance. */
    private _roleScopeTagIds?: string[] | undefined;
    /** Security baseline states for this device. */
    private _securityBaselineStates?: SecurityBaselineState[] | undefined;
    /** SerialNumber. This property is read-only. */
    private _serialNumber?: string | undefined;
    /** Device sku family */
    private _skuFamily?: string | undefined;
    /** Device sku number, see also: https://learn.microsoft.com/windows/win32/api/sysinfoapi/nf-sysinfoapi-getproductinfo. Valid values 0 to 2147483647. This property is read-only. */
    private _skuNumber?: number | undefined;
    /** Specification version. This property is read-only. */
    private _specificationVersion?: string | undefined;
    /** Subscriber Carrier. This property is read-only. */
    private _subscriberCarrier?: string | undefined;
    /** Total Storage in Bytes. This property is read-only. */
    private _totalStorageSpaceInBytes?: number | undefined;
    /** Unique Device Identifier for iOS and macOS devices. Return default value null in LIST managedDevices. Real value only returned in singel device GET call with device id and included in select parameter. Supports: $select. $Search is not supported. Read-only. This property is read-only. */
    private _udid?: string | undefined;
    /** User display name. This property is read-only. */
    private _userDisplayName?: string | undefined;
    /** Unique Identifier for the user associated with the device. This property is read-only. */
    private _userId?: string | undefined;
    /** Device user principal name. This property is read-only. */
    private _userPrincipalName?: string | undefined;
    /** The primary users associated with the managed device. */
    private _users?: User[] | undefined;
    /** Indicates the last logged on users of a device. This property is read-only. */
    private _usersLoggedOn?: LoggedOnUser[] | undefined;
    /** Wi-Fi MAC. This property is read-only. */
    private _wiFiMacAddress?: string | undefined;
    /** Count of active malware for this windows device. This property is read-only. */
    private _windowsActiveMalwareCount?: number | undefined;
    /** The windowsProtectionState property */
    private _windowsProtectionState?: WindowsProtectionState | undefined;
    /** Count of remediated malware for this windows device. This property is read-only. */
    private _windowsRemediatedMalwareCount?: number | undefined;
    /**
     * Gets the aadRegistered property value. Whether the device is Azure Active Directory registered. This property is read-only.
     * @returns a boolean
     */
    public get aadRegistered() {
        return this._aadRegistered;
    };
    /**
     * Sets the aadRegistered property value. Whether the device is Azure Active Directory registered. This property is read-only.
     * @param value Value to set for the aadRegistered property.
     */
    public set aadRegistered(value: boolean | undefined) {
        this._aadRegistered = value;
    };
    /**
     * Gets the activationLockBypassCode property value. Code that allows the Activation Lock on a device to be bypassed. This property is read-only.
     * @returns a string
     */
    public get activationLockBypassCode() {
        return this._activationLockBypassCode;
    };
    /**
     * Sets the activationLockBypassCode property value. Code that allows the Activation Lock on a device to be bypassed. This property is read-only.
     * @param value Value to set for the activationLockBypassCode property.
     */
    public set activationLockBypassCode(value: string | undefined) {
        this._activationLockBypassCode = value;
    };
    /**
     * Gets the androidSecurityPatchLevel property value. Android security patch level. This property is read-only.
     * @returns a string
     */
    public get androidSecurityPatchLevel() {
        return this._androidSecurityPatchLevel;
    };
    /**
     * Sets the androidSecurityPatchLevel property value. Android security patch level. This property is read-only.
     * @param value Value to set for the androidSecurityPatchLevel property.
     */
    public set androidSecurityPatchLevel(value: string | undefined) {
        this._androidSecurityPatchLevel = value;
    };
    /**
     * Gets the assignmentFilterEvaluationStatusDetails property value. Managed device mobile app configuration states for this device.
     * @returns a assignmentFilterEvaluationStatusDetails
     */
    public get assignmentFilterEvaluationStatusDetails() {
        return this._assignmentFilterEvaluationStatusDetails;
    };
    /**
     * Sets the assignmentFilterEvaluationStatusDetails property value. Managed device mobile app configuration states for this device.
     * @param value Value to set for the assignmentFilterEvaluationStatusDetails property.
     */
    public set assignmentFilterEvaluationStatusDetails(value: AssignmentFilterEvaluationStatusDetails[] | undefined) {
        this._assignmentFilterEvaluationStatusDetails = value;
    };
    /**
     * Gets the autopilotEnrolled property value. Reports if the managed device is enrolled via auto-pilot. This property is read-only.
     * @returns a boolean
     */
    public get autopilotEnrolled() {
        return this._autopilotEnrolled;
    };
    /**
     * Sets the autopilotEnrolled property value. Reports if the managed device is enrolled via auto-pilot. This property is read-only.
     * @param value Value to set for the autopilotEnrolled property.
     */
    public set autopilotEnrolled(value: boolean | undefined) {
        this._autopilotEnrolled = value;
    };
    /**
     * Gets the azureActiveDirectoryDeviceId property value. The unique identifier for the Azure Active Directory device. Read only. This property is read-only.
     * @returns a string
     */
    public get azureActiveDirectoryDeviceId() {
        return this._azureActiveDirectoryDeviceId;
    };
    /**
     * Sets the azureActiveDirectoryDeviceId property value. The unique identifier for the Azure Active Directory device. Read only. This property is read-only.
     * @param value Value to set for the azureActiveDirectoryDeviceId property.
     */
    public set azureActiveDirectoryDeviceId(value: string | undefined) {
        this._azureActiveDirectoryDeviceId = value;
    };
    /**
     * Gets the azureADDeviceId property value. The unique identifier for the Azure Active Directory device. Read only. This property is read-only.
     * @returns a string
     */
    public get azureADDeviceId() {
        return this._azureADDeviceId;
    };
    /**
     * Sets the azureADDeviceId property value. The unique identifier for the Azure Active Directory device. Read only. This property is read-only.
     * @param value Value to set for the azureADDeviceId property.
     */
    public set azureADDeviceId(value: string | undefined) {
        this._azureADDeviceId = value;
    };
    /**
     * Gets the azureADRegistered property value. Whether the device is Azure Active Directory registered. This property is read-only.
     * @returns a boolean
     */
    public get azureADRegistered() {
        return this._azureADRegistered;
    };
    /**
     * Sets the azureADRegistered property value. Whether the device is Azure Active Directory registered. This property is read-only.
     * @param value Value to set for the azureADRegistered property.
     */
    public set azureADRegistered(value: boolean | undefined) {
        this._azureADRegistered = value;
    };
    /**
     * Gets the bootstrapTokenEscrowed property value. Reports if the managed device has an escrowed Bootstrap Token. This is only for macOS devices. To get, include BootstrapTokenEscrowed in the select clause and query with a device id. If FALSE, no bootstrap token is escrowed. If TRUE, the device has escrowed a bootstrap token with Intune. This property is read-only.
     * @returns a boolean
     */
    public get bootstrapTokenEscrowed() {
        return this._bootstrapTokenEscrowed;
    };
    /**
     * Sets the bootstrapTokenEscrowed property value. Reports if the managed device has an escrowed Bootstrap Token. This is only for macOS devices. To get, include BootstrapTokenEscrowed in the select clause and query with a device id. If FALSE, no bootstrap token is escrowed. If TRUE, the device has escrowed a bootstrap token with Intune. This property is read-only.
     * @param value Value to set for the bootstrapTokenEscrowed property.
     */
    public set bootstrapTokenEscrowed(value: boolean | undefined) {
        this._bootstrapTokenEscrowed = value;
    };
    /**
     * Gets the chassisType property value. Chassis type.
     * @returns a chassisType
     */
    public get chassisType() {
        return this._chassisType;
    };
    /**
     * Sets the chassisType property value. Chassis type.
     * @param value Value to set for the chassisType property.
     */
    public set chassisType(value: ChassisType | undefined) {
        this._chassisType = value;
    };
    /**
     * Gets the chromeOSDeviceInfo property value. List of properties of the ChromeOS Device.
     * @returns a chromeOSDeviceProperty
     */
    public get chromeOSDeviceInfo() {
        return this._chromeOSDeviceInfo;
    };
    /**
     * Sets the chromeOSDeviceInfo property value. List of properties of the ChromeOS Device.
     * @param value Value to set for the chromeOSDeviceInfo property.
     */
    public set chromeOSDeviceInfo(value: ChromeOSDeviceProperty[] | undefined) {
        this._chromeOSDeviceInfo = value;
    };
    /**
     * Gets the cloudPcRemoteActionResults property value. The cloudPcRemoteActionResults property
     * @returns a cloudPcRemoteActionResult
     */
    public get cloudPcRemoteActionResults() {
        return this._cloudPcRemoteActionResults;
    };
    /**
     * Sets the cloudPcRemoteActionResults property value. The cloudPcRemoteActionResults property
     * @param value Value to set for the cloudPcRemoteActionResults property.
     */
    public set cloudPcRemoteActionResults(value: CloudPcRemoteActionResult[] | undefined) {
        this._cloudPcRemoteActionResults = value;
    };
    /**
     * Gets the complianceGracePeriodExpirationDateTime property value. The DateTime when device compliance grace period expires. This property is read-only.
     * @returns a Date
     */
    public get complianceGracePeriodExpirationDateTime() {
        return this._complianceGracePeriodExpirationDateTime;
    };
    /**
     * Sets the complianceGracePeriodExpirationDateTime property value. The DateTime when device compliance grace period expires. This property is read-only.
     * @param value Value to set for the complianceGracePeriodExpirationDateTime property.
     */
    public set complianceGracePeriodExpirationDateTime(value: Date | undefined) {
        this._complianceGracePeriodExpirationDateTime = value;
    };
    /**
     * Gets the complianceState property value. Compliance state.
     * @returns a complianceState
     */
    public get complianceState() {
        return this._complianceState;
    };
    /**
     * Sets the complianceState property value. Compliance state.
     * @param value Value to set for the complianceState property.
     */
    public set complianceState(value: ComplianceState | undefined) {
        this._complianceState = value;
    };
    /**
     * Gets the configurationManagerClientEnabledFeatures property value. configuration Manager client enabled features
     * @returns a configurationManagerClientEnabledFeatures
     */
    public get configurationManagerClientEnabledFeatures() {
        return this._configurationManagerClientEnabledFeatures;
    };
    /**
     * Sets the configurationManagerClientEnabledFeatures property value. configuration Manager client enabled features
     * @param value Value to set for the configurationManagerClientEnabledFeatures property.
     */
    public set configurationManagerClientEnabledFeatures(value: ConfigurationManagerClientEnabledFeatures | undefined) {
        this._configurationManagerClientEnabledFeatures = value;
    };
    /**
     * Gets the configurationManagerClientHealthState property value. Configuration manager client health state
     * @returns a configurationManagerClientHealthState
     */
    public get configurationManagerClientHealthState() {
        return this._configurationManagerClientHealthState;
    };
    /**
     * Sets the configurationManagerClientHealthState property value. Configuration manager client health state
     * @param value Value to set for the configurationManagerClientHealthState property.
     */
    public set configurationManagerClientHealthState(value: ConfigurationManagerClientHealthState | undefined) {
        this._configurationManagerClientHealthState = value;
    };
    /**
     * Gets the configurationManagerClientInformation property value. Configuration Manager client information synced from SCCM
     * @returns a configurationManagerClientInformation
     */
    public get configurationManagerClientInformation() {
        return this._configurationManagerClientInformation;
    };
    /**
     * Sets the configurationManagerClientInformation property value. Configuration Manager client information synced from SCCM
     * @param value Value to set for the configurationManagerClientInformation property.
     */
    public set configurationManagerClientInformation(value: ConfigurationManagerClientInformation | undefined) {
        this._configurationManagerClientInformation = value;
    };
    /**
     * Instantiates a new managedDevice and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the detectedApps property value. All applications currently installed on the device
     * @returns a detectedApp
     */
    public get detectedApps() {
        return this._detectedApps;
    };
    /**
     * Sets the detectedApps property value. All applications currently installed on the device
     * @param value Value to set for the detectedApps property.
     */
    public set detectedApps(value: DetectedApp[] | undefined) {
        this._detectedApps = value;
    };
    /**
     * Gets the deviceActionResults property value. List of ComplexType deviceActionResult objects. This property is read-only.
     * @returns a deviceActionResult
     */
    public get deviceActionResults() {
        return this._deviceActionResults;
    };
    /**
     * Sets the deviceActionResults property value. List of ComplexType deviceActionResult objects. This property is read-only.
     * @param value Value to set for the deviceActionResults property.
     */
    public set deviceActionResults(value: DeviceActionResult[] | undefined) {
        this._deviceActionResults = value;
    };
    /**
     * Gets the deviceCategory property value. The deviceCategory property
     * @returns a deviceCategory
     */
    public get deviceCategory() {
        return this._deviceCategory;
    };
    /**
     * Sets the deviceCategory property value. The deviceCategory property
     * @param value Value to set for the deviceCategory property.
     */
    public set deviceCategory(value: DeviceCategory | undefined) {
        this._deviceCategory = value;
    };
    /**
     * Gets the deviceCategoryDisplayName property value. Device category display name. This property is read-only.
     * @returns a string
     */
    public get deviceCategoryDisplayName() {
        return this._deviceCategoryDisplayName;
    };
    /**
     * Sets the deviceCategoryDisplayName property value. Device category display name. This property is read-only.
     * @param value Value to set for the deviceCategoryDisplayName property.
     */
    public set deviceCategoryDisplayName(value: string | undefined) {
        this._deviceCategoryDisplayName = value;
    };
    /**
     * Gets the deviceCompliancePolicyStates property value. Device compliance policy states for this device.
     * @returns a deviceCompliancePolicyState
     */
    public get deviceCompliancePolicyStates() {
        return this._deviceCompliancePolicyStates;
    };
    /**
     * Sets the deviceCompliancePolicyStates property value. Device compliance policy states for this device.
     * @param value Value to set for the deviceCompliancePolicyStates property.
     */
    public set deviceCompliancePolicyStates(value: DeviceCompliancePolicyState[] | undefined) {
        this._deviceCompliancePolicyStates = value;
    };
    /**
     * Gets the deviceConfigurationStates property value. Device configuration states for this device.
     * @returns a deviceConfigurationState
     */
    public get deviceConfigurationStates() {
        return this._deviceConfigurationStates;
    };
    /**
     * Sets the deviceConfigurationStates property value. Device configuration states for this device.
     * @param value Value to set for the deviceConfigurationStates property.
     */
    public set deviceConfigurationStates(value: DeviceConfigurationState[] | undefined) {
        this._deviceConfigurationStates = value;
    };
    /**
     * Gets the deviceEnrollmentType property value. Possible ways of adding a mobile device to management.
     * @returns a deviceEnrollmentType
     */
    public get deviceEnrollmentType() {
        return this._deviceEnrollmentType;
    };
    /**
     * Sets the deviceEnrollmentType property value. Possible ways of adding a mobile device to management.
     * @param value Value to set for the deviceEnrollmentType property.
     */
    public set deviceEnrollmentType(value: DeviceEnrollmentType | undefined) {
        this._deviceEnrollmentType = value;
    };
    /**
     * Gets the deviceFirmwareConfigurationInterfaceManaged property value. Indicates whether the device is DFCI managed. When TRUE the device is DFCI managed. When FALSE, the device is not DFCI managed. The default value is FALSE.
     * @returns a boolean
     */
    public get deviceFirmwareConfigurationInterfaceManaged() {
        return this._deviceFirmwareConfigurationInterfaceManaged;
    };
    /**
     * Sets the deviceFirmwareConfigurationInterfaceManaged property value. Indicates whether the device is DFCI managed. When TRUE the device is DFCI managed. When FALSE, the device is not DFCI managed. The default value is FALSE.
     * @param value Value to set for the deviceFirmwareConfigurationInterfaceManaged property.
     */
    public set deviceFirmwareConfigurationInterfaceManaged(value: boolean | undefined) {
        this._deviceFirmwareConfigurationInterfaceManaged = value;
    };
    /**
     * Gets the deviceHealthAttestationState property value. The deviceHealthAttestationState property
     * @returns a deviceHealthAttestationState
     */
    public get deviceHealthAttestationState() {
        return this._deviceHealthAttestationState;
    };
    /**
     * Sets the deviceHealthAttestationState property value. The deviceHealthAttestationState property
     * @param value Value to set for the deviceHealthAttestationState property.
     */
    public set deviceHealthAttestationState(value: DeviceHealthAttestationState | undefined) {
        this._deviceHealthAttestationState = value;
    };
    /**
     * Gets the deviceName property value. Name of the device. This property is read-only.
     * @returns a string
     */
    public get deviceName() {
        return this._deviceName;
    };
    /**
     * Sets the deviceName property value. Name of the device. This property is read-only.
     * @param value Value to set for the deviceName property.
     */
    public set deviceName(value: string | undefined) {
        this._deviceName = value;
    };
    /**
     * Gets the deviceRegistrationState property value. Device registration status.
     * @returns a deviceRegistrationState
     */
    public get deviceRegistrationState() {
        return this._deviceRegistrationState;
    };
    /**
     * Sets the deviceRegistrationState property value. Device registration status.
     * @param value Value to set for the deviceRegistrationState property.
     */
    public set deviceRegistrationState(value: DeviceRegistrationState | undefined) {
        this._deviceRegistrationState = value;
    };
    /**
     * Gets the deviceType property value. Device type.
     * @returns a deviceType
     */
    public get deviceType() {
        return this._deviceType;
    };
    /**
     * Sets the deviceType property value. Device type.
     * @param value Value to set for the deviceType property.
     */
    public set deviceType(value: DeviceType | undefined) {
        this._deviceType = value;
    };
    /**
     * Gets the easActivated property value. Whether the device is Exchange ActiveSync activated. This property is read-only.
     * @returns a boolean
     */
    public get easActivated() {
        return this._easActivated;
    };
    /**
     * Sets the easActivated property value. Whether the device is Exchange ActiveSync activated. This property is read-only.
     * @param value Value to set for the easActivated property.
     */
    public set easActivated(value: boolean | undefined) {
        this._easActivated = value;
    };
    /**
     * Gets the easActivationDateTime property value. Exchange ActivationSync activation time of the device. This property is read-only.
     * @returns a Date
     */
    public get easActivationDateTime() {
        return this._easActivationDateTime;
    };
    /**
     * Sets the easActivationDateTime property value. Exchange ActivationSync activation time of the device. This property is read-only.
     * @param value Value to set for the easActivationDateTime property.
     */
    public set easActivationDateTime(value: Date | undefined) {
        this._easActivationDateTime = value;
    };
    /**
     * Gets the easDeviceId property value. Exchange ActiveSync Id of the device. This property is read-only.
     * @returns a string
     */
    public get easDeviceId() {
        return this._easDeviceId;
    };
    /**
     * Sets the easDeviceId property value. Exchange ActiveSync Id of the device. This property is read-only.
     * @param value Value to set for the easDeviceId property.
     */
    public set easDeviceId(value: string | undefined) {
        this._easDeviceId = value;
    };
    /**
     * Gets the emailAddress property value. Email(s) for the user associated with the device. This property is read-only.
     * @returns a string
     */
    public get emailAddress() {
        return this._emailAddress;
    };
    /**
     * Sets the emailAddress property value. Email(s) for the user associated with the device. This property is read-only.
     * @param value Value to set for the emailAddress property.
     */
    public set emailAddress(value: string | undefined) {
        this._emailAddress = value;
    };
    /**
     * Gets the enrolledDateTime property value. Enrollment time of the device. This property is read-only.
     * @returns a Date
     */
    public get enrolledDateTime() {
        return this._enrolledDateTime;
    };
    /**
     * Sets the enrolledDateTime property value. Enrollment time of the device. This property is read-only.
     * @param value Value to set for the enrolledDateTime property.
     */
    public set enrolledDateTime(value: Date | undefined) {
        this._enrolledDateTime = value;
    };
    /**
     * Gets the enrollmentProfileName property value. Name of the enrollment profile assigned to the device. Default value is empty string, indicating no enrollment profile was assgined. This property is read-only.
     * @returns a string
     */
    public get enrollmentProfileName() {
        return this._enrollmentProfileName;
    };
    /**
     * Sets the enrollmentProfileName property value. Name of the enrollment profile assigned to the device. Default value is empty string, indicating no enrollment profile was assgined. This property is read-only.
     * @param value Value to set for the enrollmentProfileName property.
     */
    public set enrollmentProfileName(value: string | undefined) {
        this._enrollmentProfileName = value;
    };
    /**
     * Gets the ethernetMacAddress property value. Ethernet MAC. This property is read-only.
     * @returns a string
     */
    public get ethernetMacAddress() {
        return this._ethernetMacAddress;
    };
    /**
     * Sets the ethernetMacAddress property value. Ethernet MAC. This property is read-only.
     * @param value Value to set for the ethernetMacAddress property.
     */
    public set ethernetMacAddress(value: string | undefined) {
        this._ethernetMacAddress = value;
    };
    /**
     * Gets the exchangeAccessState property value. Device Exchange Access State.
     * @returns a deviceManagementExchangeAccessState
     */
    public get exchangeAccessState() {
        return this._exchangeAccessState;
    };
    /**
     * Sets the exchangeAccessState property value. Device Exchange Access State.
     * @param value Value to set for the exchangeAccessState property.
     */
    public set exchangeAccessState(value: DeviceManagementExchangeAccessState | undefined) {
        this._exchangeAccessState = value;
    };
    /**
     * Gets the exchangeAccessStateReason property value. Device Exchange Access State Reason.
     * @returns a deviceManagementExchangeAccessStateReason
     */
    public get exchangeAccessStateReason() {
        return this._exchangeAccessStateReason;
    };
    /**
     * Sets the exchangeAccessStateReason property value. Device Exchange Access State Reason.
     * @param value Value to set for the exchangeAccessStateReason property.
     */
    public set exchangeAccessStateReason(value: DeviceManagementExchangeAccessStateReason | undefined) {
        this._exchangeAccessStateReason = value;
    };
    /**
     * Gets the exchangeLastSuccessfulSyncDateTime property value. Last time the device contacted Exchange. This property is read-only.
     * @returns a Date
     */
    public get exchangeLastSuccessfulSyncDateTime() {
        return this._exchangeLastSuccessfulSyncDateTime;
    };
    /**
     * Sets the exchangeLastSuccessfulSyncDateTime property value. Last time the device contacted Exchange. This property is read-only.
     * @param value Value to set for the exchangeLastSuccessfulSyncDateTime property.
     */
    public set exchangeLastSuccessfulSyncDateTime(value: Date | undefined) {
        this._exchangeLastSuccessfulSyncDateTime = value;
    };
    /**
     * Gets the freeStorageSpaceInBytes property value. Free Storage in Bytes. Default value is 0. Read-only. This property is read-only.
     * @returns a int64
     */
    public get freeStorageSpaceInBytes() {
        return this._freeStorageSpaceInBytes;
    };
    /**
     * Sets the freeStorageSpaceInBytes property value. Free Storage in Bytes. Default value is 0. Read-only. This property is read-only.
     * @param value Value to set for the freeStorageSpaceInBytes property.
     */
    public set freeStorageSpaceInBytes(value: number | undefined) {
        this._freeStorageSpaceInBytes = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "aadRegistered": n => { this.aadRegistered = n.getBooleanValue(); },
            "activationLockBypassCode": n => { this.activationLockBypassCode = n.getStringValue(); },
            "androidSecurityPatchLevel": n => { this.androidSecurityPatchLevel = n.getStringValue(); },
            "assignmentFilterEvaluationStatusDetails": n => { this.assignmentFilterEvaluationStatusDetails = n.getCollectionOfObjectValues<AssignmentFilterEvaluationStatusDetails>(createAssignmentFilterEvaluationStatusDetailsFromDiscriminatorValue); },
            "autopilotEnrolled": n => { this.autopilotEnrolled = n.getBooleanValue(); },
            "azureActiveDirectoryDeviceId": n => { this.azureActiveDirectoryDeviceId = n.getStringValue(); },
            "azureADDeviceId": n => { this.azureADDeviceId = n.getStringValue(); },
            "azureADRegistered": n => { this.azureADRegistered = n.getBooleanValue(); },
            "bootstrapTokenEscrowed": n => { this.bootstrapTokenEscrowed = n.getBooleanValue(); },
            "chassisType": n => { this.chassisType = n.getEnumValue<ChassisType>(ChassisType); },
            "chromeOSDeviceInfo": n => { this.chromeOSDeviceInfo = n.getCollectionOfObjectValues<ChromeOSDeviceProperty>(createChromeOSDevicePropertyFromDiscriminatorValue); },
            "cloudPcRemoteActionResults": n => { this.cloudPcRemoteActionResults = n.getCollectionOfObjectValues<CloudPcRemoteActionResult>(createCloudPcRemoteActionResultFromDiscriminatorValue); },
            "complianceGracePeriodExpirationDateTime": n => { this.complianceGracePeriodExpirationDateTime = n.getDateValue(); },
            "complianceState": n => { this.complianceState = n.getEnumValue<ComplianceState>(ComplianceState); },
            "configurationManagerClientEnabledFeatures": n => { this.configurationManagerClientEnabledFeatures = n.getObjectValue<ConfigurationManagerClientEnabledFeatures>(createConfigurationManagerClientEnabledFeaturesFromDiscriminatorValue); },
            "configurationManagerClientHealthState": n => { this.configurationManagerClientHealthState = n.getObjectValue<ConfigurationManagerClientHealthState>(createConfigurationManagerClientHealthStateFromDiscriminatorValue); },
            "configurationManagerClientInformation": n => { this.configurationManagerClientInformation = n.getObjectValue<ConfigurationManagerClientInformation>(createConfigurationManagerClientInformationFromDiscriminatorValue); },
            "detectedApps": n => { this.detectedApps = n.getCollectionOfObjectValues<DetectedApp>(createDetectedAppFromDiscriminatorValue); },
            "deviceActionResults": n => { this.deviceActionResults = n.getCollectionOfObjectValues<DeviceActionResult>(createDeviceActionResultFromDiscriminatorValue); },
            "deviceCategory": n => { this.deviceCategory = n.getObjectValue<DeviceCategory>(createDeviceCategoryFromDiscriminatorValue); },
            "deviceCategoryDisplayName": n => { this.deviceCategoryDisplayName = n.getStringValue(); },
            "deviceCompliancePolicyStates": n => { this.deviceCompliancePolicyStates = n.getCollectionOfObjectValues<DeviceCompliancePolicyState>(createDeviceCompliancePolicyStateFromDiscriminatorValue); },
            "deviceConfigurationStates": n => { this.deviceConfigurationStates = n.getCollectionOfObjectValues<DeviceConfigurationState>(createDeviceConfigurationStateFromDiscriminatorValue); },
            "deviceEnrollmentType": n => { this.deviceEnrollmentType = n.getEnumValue<DeviceEnrollmentType>(DeviceEnrollmentType); },
            "deviceFirmwareConfigurationInterfaceManaged": n => { this.deviceFirmwareConfigurationInterfaceManaged = n.getBooleanValue(); },
            "deviceHealthAttestationState": n => { this.deviceHealthAttestationState = n.getObjectValue<DeviceHealthAttestationState>(createDeviceHealthAttestationStateFromDiscriminatorValue); },
            "deviceName": n => { this.deviceName = n.getStringValue(); },
            "deviceRegistrationState": n => { this.deviceRegistrationState = n.getEnumValue<DeviceRegistrationState>(DeviceRegistrationState); },
            "deviceType": n => { this.deviceType = n.getEnumValue<DeviceType>(DeviceType); },
            "easActivated": n => { this.easActivated = n.getBooleanValue(); },
            "easActivationDateTime": n => { this.easActivationDateTime = n.getDateValue(); },
            "easDeviceId": n => { this.easDeviceId = n.getStringValue(); },
            "emailAddress": n => { this.emailAddress = n.getStringValue(); },
            "enrolledDateTime": n => { this.enrolledDateTime = n.getDateValue(); },
            "enrollmentProfileName": n => { this.enrollmentProfileName = n.getStringValue(); },
            "ethernetMacAddress": n => { this.ethernetMacAddress = n.getStringValue(); },
            "exchangeAccessState": n => { this.exchangeAccessState = n.getEnumValue<DeviceManagementExchangeAccessState>(DeviceManagementExchangeAccessState); },
            "exchangeAccessStateReason": n => { this.exchangeAccessStateReason = n.getEnumValue<DeviceManagementExchangeAccessStateReason>(DeviceManagementExchangeAccessStateReason); },
            "exchangeLastSuccessfulSyncDateTime": n => { this.exchangeLastSuccessfulSyncDateTime = n.getDateValue(); },
            "freeStorageSpaceInBytes": n => { this.freeStorageSpaceInBytes = n.getNumberValue(); },
            "hardwareInformation": n => { this.hardwareInformation = n.getObjectValue<HardwareInformation>(createHardwareInformationFromDiscriminatorValue); },
            "iccid": n => { this.iccid = n.getStringValue(); },
            "imei": n => { this.imei = n.getStringValue(); },
            "isEncrypted": n => { this.isEncrypted = n.getBooleanValue(); },
            "isSupervised": n => { this.isSupervised = n.getBooleanValue(); },
            "jailBroken": n => { this.jailBroken = n.getStringValue(); },
            "joinType": n => { this.joinType = n.getEnumValue<JoinType>(JoinType); },
            "lastSyncDateTime": n => { this.lastSyncDateTime = n.getDateValue(); },
            "logCollectionRequests": n => { this.logCollectionRequests = n.getCollectionOfObjectValues<DeviceLogCollectionResponse>(createDeviceLogCollectionResponseFromDiscriminatorValue); },
            "lostModeState": n => { this.lostModeState = n.getEnumValue<LostModeState>(LostModeState); },
            "managedDeviceMobileAppConfigurationStates": n => { this.managedDeviceMobileAppConfigurationStates = n.getCollectionOfObjectValues<ManagedDeviceMobileAppConfigurationState>(createManagedDeviceMobileAppConfigurationStateFromDiscriminatorValue); },
            "managedDeviceName": n => { this.managedDeviceName = n.getStringValue(); },
            "managedDeviceOwnerType": n => { this.managedDeviceOwnerType = n.getEnumValue<ManagedDeviceOwnerType>(ManagedDeviceOwnerType); },
            "managementAgent": n => { this.managementAgent = n.getEnumValue<ManagementAgentType>(ManagementAgentType); },
            "managementCertificateExpirationDate": n => { this.managementCertificateExpirationDate = n.getDateValue(); },
            "managementFeatures": n => { this.managementFeatures = n.getEnumValue<ManagedDeviceManagementFeatures>(ManagedDeviceManagementFeatures); },
            "managementState": n => { this.managementState = n.getEnumValue<ManagementState>(ManagementState); },
            "manufacturer": n => { this.manufacturer = n.getStringValue(); },
            "meid": n => { this.meid = n.getStringValue(); },
            "model": n => { this.model = n.getStringValue(); },
            "notes": n => { this.notes = n.getStringValue(); },
            "operatingSystem": n => { this.operatingSystem = n.getStringValue(); },
            "osVersion": n => { this.osVersion = n.getStringValue(); },
            "ownerType": n => { this.ownerType = n.getEnumValue<OwnerType>(OwnerType); },
            "partnerReportedThreatState": n => { this.partnerReportedThreatState = n.getEnumValue<ManagedDevicePartnerReportedHealthState>(ManagedDevicePartnerReportedHealthState); },
            "phoneNumber": n => { this.phoneNumber = n.getStringValue(); },
            "physicalMemoryInBytes": n => { this.physicalMemoryInBytes = n.getNumberValue(); },
            "preferMdmOverGroupPolicyAppliedDateTime": n => { this.preferMdmOverGroupPolicyAppliedDateTime = n.getDateValue(); },
            "processorArchitecture": n => { this.processorArchitecture = n.getEnumValue<ManagedDeviceArchitecture>(ManagedDeviceArchitecture); },
            "remoteAssistanceSessionErrorDetails": n => { this.remoteAssistanceSessionErrorDetails = n.getStringValue(); },
            "remoteAssistanceSessionUrl": n => { this.remoteAssistanceSessionUrl = n.getStringValue(); },
            "requireUserEnrollmentApproval": n => { this.requireUserEnrollmentApproval = n.getBooleanValue(); },
            "retireAfterDateTime": n => { this.retireAfterDateTime = n.getDateValue(); },
            "roleScopeTagIds": n => { this.roleScopeTagIds = n.getCollectionOfPrimitiveValues<string>(); },
            "securityBaselineStates": n => { this.securityBaselineStates = n.getCollectionOfObjectValues<SecurityBaselineState>(createSecurityBaselineStateFromDiscriminatorValue); },
            "serialNumber": n => { this.serialNumber = n.getStringValue(); },
            "skuFamily": n => { this.skuFamily = n.getStringValue(); },
            "skuNumber": n => { this.skuNumber = n.getNumberValue(); },
            "specificationVersion": n => { this.specificationVersion = n.getStringValue(); },
            "subscriberCarrier": n => { this.subscriberCarrier = n.getStringValue(); },
            "totalStorageSpaceInBytes": n => { this.totalStorageSpaceInBytes = n.getNumberValue(); },
            "udid": n => { this.udid = n.getStringValue(); },
            "userDisplayName": n => { this.userDisplayName = n.getStringValue(); },
            "userId": n => { this.userId = n.getStringValue(); },
            "userPrincipalName": n => { this.userPrincipalName = n.getStringValue(); },
            "users": n => { this.users = n.getCollectionOfObjectValues<User>(createUserFromDiscriminatorValue); },
            "usersLoggedOn": n => { this.usersLoggedOn = n.getCollectionOfObjectValues<LoggedOnUser>(createLoggedOnUserFromDiscriminatorValue); },
            "wiFiMacAddress": n => { this.wiFiMacAddress = n.getStringValue(); },
            "windowsActiveMalwareCount": n => { this.windowsActiveMalwareCount = n.getNumberValue(); },
            "windowsProtectionState": n => { this.windowsProtectionState = n.getObjectValue<WindowsProtectionState>(createWindowsProtectionStateFromDiscriminatorValue); },
            "windowsRemediatedMalwareCount": n => { this.windowsRemediatedMalwareCount = n.getNumberValue(); },
        };
    };
    /**
     * Gets the hardwareInformation property value. Hardware information of a given device.
     * @returns a hardwareInformation
     */
    public get hardwareInformation() {
        return this._hardwareInformation;
    };
    /**
     * Sets the hardwareInformation property value. Hardware information of a given device.
     * @param value Value to set for the hardwareInformation property.
     */
    public set hardwareInformation(value: HardwareInformation | undefined) {
        this._hardwareInformation = value;
    };
    /**
     * Gets the iccid property value. Integrated Circuit Card Identifier, it is A SIM card's unique identification number. Return default value null in LIST managedDevices. Real value only returned in singel device GET call with device id and included in select parameter. Supports: $select. $Search is not supported. Read-only. This property is read-only.
     * @returns a string
     */
    public get iccid() {
        return this._iccid;
    };
    /**
     * Sets the iccid property value. Integrated Circuit Card Identifier, it is A SIM card's unique identification number. Return default value null in LIST managedDevices. Real value only returned in singel device GET call with device id and included in select parameter. Supports: $select. $Search is not supported. Read-only. This property is read-only.
     * @param value Value to set for the iccid property.
     */
    public set iccid(value: string | undefined) {
        this._iccid = value;
    };
    /**
     * Gets the imei property value. IMEI. This property is read-only.
     * @returns a string
     */
    public get imei() {
        return this._imei;
    };
    /**
     * Sets the imei property value. IMEI. This property is read-only.
     * @param value Value to set for the imei property.
     */
    public set imei(value: string | undefined) {
        this._imei = value;
    };
    /**
     * Gets the isEncrypted property value. Device encryption status. This property is read-only.
     * @returns a boolean
     */
    public get isEncrypted() {
        return this._isEncrypted;
    };
    /**
     * Sets the isEncrypted property value. Device encryption status. This property is read-only.
     * @param value Value to set for the isEncrypted property.
     */
    public set isEncrypted(value: boolean | undefined) {
        this._isEncrypted = value;
    };
    /**
     * Gets the isSupervised property value. Device supervised status. This property is read-only.
     * @returns a boolean
     */
    public get isSupervised() {
        return this._isSupervised;
    };
    /**
     * Sets the isSupervised property value. Device supervised status. This property is read-only.
     * @param value Value to set for the isSupervised property.
     */
    public set isSupervised(value: boolean | undefined) {
        this._isSupervised = value;
    };
    /**
     * Gets the jailBroken property value. whether the device is jail broken or rooted. This property is read-only.
     * @returns a string
     */
    public get jailBroken() {
        return this._jailBroken;
    };
    /**
     * Sets the jailBroken property value. whether the device is jail broken or rooted. This property is read-only.
     * @param value Value to set for the jailBroken property.
     */
    public set jailBroken(value: string | undefined) {
        this._jailBroken = value;
    };
    /**
     * Gets the joinType property value. Device enrollment join type.
     * @returns a joinType
     */
    public get joinType() {
        return this._joinType;
    };
    /**
     * Sets the joinType property value. Device enrollment join type.
     * @param value Value to set for the joinType property.
     */
    public set joinType(value: JoinType | undefined) {
        this._joinType = value;
    };
    /**
     * Gets the lastSyncDateTime property value. The date and time that the device last completed a successful sync with Intune. This property is read-only.
     * @returns a Date
     */
    public get lastSyncDateTime() {
        return this._lastSyncDateTime;
    };
    /**
     * Sets the lastSyncDateTime property value. The date and time that the device last completed a successful sync with Intune. This property is read-only.
     * @param value Value to set for the lastSyncDateTime property.
     */
    public set lastSyncDateTime(value: Date | undefined) {
        this._lastSyncDateTime = value;
    };
    /**
     * Gets the logCollectionRequests property value. List of log collection requests
     * @returns a deviceLogCollectionResponse
     */
    public get logCollectionRequests() {
        return this._logCollectionRequests;
    };
    /**
     * Sets the logCollectionRequests property value. List of log collection requests
     * @param value Value to set for the logCollectionRequests property.
     */
    public set logCollectionRequests(value: DeviceLogCollectionResponse[] | undefined) {
        this._logCollectionRequests = value;
    };
    /**
     * Gets the lostModeState property value. State of lost mode, indicating if lost mode is enabled or disabled
     * @returns a lostModeState
     */
    public get lostModeState() {
        return this._lostModeState;
    };
    /**
     * Sets the lostModeState property value. State of lost mode, indicating if lost mode is enabled or disabled
     * @param value Value to set for the lostModeState property.
     */
    public set lostModeState(value: LostModeState | undefined) {
        this._lostModeState = value;
    };
    /**
     * Gets the managedDeviceMobileAppConfigurationStates property value. Managed device mobile app configuration states for this device.
     * @returns a managedDeviceMobileAppConfigurationState
     */
    public get managedDeviceMobileAppConfigurationStates() {
        return this._managedDeviceMobileAppConfigurationStates;
    };
    /**
     * Sets the managedDeviceMobileAppConfigurationStates property value. Managed device mobile app configuration states for this device.
     * @param value Value to set for the managedDeviceMobileAppConfigurationStates property.
     */
    public set managedDeviceMobileAppConfigurationStates(value: ManagedDeviceMobileAppConfigurationState[] | undefined) {
        this._managedDeviceMobileAppConfigurationStates = value;
    };
    /**
     * Gets the managedDeviceName property value. Automatically generated name to identify a device. Can be overwritten to a user friendly name.
     * @returns a string
     */
    public get managedDeviceName() {
        return this._managedDeviceName;
    };
    /**
     * Sets the managedDeviceName property value. Automatically generated name to identify a device. Can be overwritten to a user friendly name.
     * @param value Value to set for the managedDeviceName property.
     */
    public set managedDeviceName(value: string | undefined) {
        this._managedDeviceName = value;
    };
    /**
     * Gets the managedDeviceOwnerType property value. Owner type of device.
     * @returns a managedDeviceOwnerType
     */
    public get managedDeviceOwnerType() {
        return this._managedDeviceOwnerType;
    };
    /**
     * Sets the managedDeviceOwnerType property value. Owner type of device.
     * @param value Value to set for the managedDeviceOwnerType property.
     */
    public set managedDeviceOwnerType(value: ManagedDeviceOwnerType | undefined) {
        this._managedDeviceOwnerType = value;
    };
    /**
     * Gets the managementAgent property value. Management agent type.
     * @returns a managementAgentType
     */
    public get managementAgent() {
        return this._managementAgent;
    };
    /**
     * Sets the managementAgent property value. Management agent type.
     * @param value Value to set for the managementAgent property.
     */
    public set managementAgent(value: ManagementAgentType | undefined) {
        this._managementAgent = value;
    };
    /**
     * Gets the managementCertificateExpirationDate property value. Reports device management certificate expiration date. This property is read-only.
     * @returns a Date
     */
    public get managementCertificateExpirationDate() {
        return this._managementCertificateExpirationDate;
    };
    /**
     * Sets the managementCertificateExpirationDate property value. Reports device management certificate expiration date. This property is read-only.
     * @param value Value to set for the managementCertificateExpirationDate property.
     */
    public set managementCertificateExpirationDate(value: Date | undefined) {
        this._managementCertificateExpirationDate = value;
    };
    /**
     * Gets the managementFeatures property value. Device management features.
     * @returns a managedDeviceManagementFeatures
     */
    public get managementFeatures() {
        return this._managementFeatures;
    };
    /**
     * Sets the managementFeatures property value. Device management features.
     * @param value Value to set for the managementFeatures property.
     */
    public set managementFeatures(value: ManagedDeviceManagementFeatures | undefined) {
        this._managementFeatures = value;
    };
    /**
     * Gets the managementState property value. Management state of device in Microsoft Intune.
     * @returns a managementState
     */
    public get managementState() {
        return this._managementState;
    };
    /**
     * Sets the managementState property value. Management state of device in Microsoft Intune.
     * @param value Value to set for the managementState property.
     */
    public set managementState(value: ManagementState | undefined) {
        this._managementState = value;
    };
    /**
     * Gets the manufacturer property value. Manufacturer of the device. This property is read-only.
     * @returns a string
     */
    public get manufacturer() {
        return this._manufacturer;
    };
    /**
     * Sets the manufacturer property value. Manufacturer of the device. This property is read-only.
     * @param value Value to set for the manufacturer property.
     */
    public set manufacturer(value: string | undefined) {
        this._manufacturer = value;
    };
    /**
     * Gets the meid property value. MEID. This property is read-only.
     * @returns a string
     */
    public get meid() {
        return this._meid;
    };
    /**
     * Sets the meid property value. MEID. This property is read-only.
     * @param value Value to set for the meid property.
     */
    public set meid(value: string | undefined) {
        this._meid = value;
    };
    /**
     * Gets the model property value. Model of the device. This property is read-only.
     * @returns a string
     */
    public get model() {
        return this._model;
    };
    /**
     * Sets the model property value. Model of the device. This property is read-only.
     * @param value Value to set for the model property.
     */
    public set model(value: string | undefined) {
        this._model = value;
    };
    /**
     * Gets the notes property value. Notes on the device created by IT Admin. Return default value null in LIST managedDevices. Real value only returned in singel device GET call with device id and included in select parameter. Supports: $select.  $Search is not supported.
     * @returns a string
     */
    public get notes() {
        return this._notes;
    };
    /**
     * Sets the notes property value. Notes on the device created by IT Admin. Return default value null in LIST managedDevices. Real value only returned in singel device GET call with device id and included in select parameter. Supports: $select.  $Search is not supported.
     * @param value Value to set for the notes property.
     */
    public set notes(value: string | undefined) {
        this._notes = value;
    };
    /**
     * Gets the operatingSystem property value. Operating system of the device. Windows, iOS, etc. This property is read-only.
     * @returns a string
     */
    public get operatingSystem() {
        return this._operatingSystem;
    };
    /**
     * Sets the operatingSystem property value. Operating system of the device. Windows, iOS, etc. This property is read-only.
     * @param value Value to set for the operatingSystem property.
     */
    public set operatingSystem(value: string | undefined) {
        this._operatingSystem = value;
    };
    /**
     * Gets the osVersion property value. Operating system version of the device. This property is read-only.
     * @returns a string
     */
    public get osVersion() {
        return this._osVersion;
    };
    /**
     * Sets the osVersion property value. Operating system version of the device. This property is read-only.
     * @param value Value to set for the osVersion property.
     */
    public set osVersion(value: string | undefined) {
        this._osVersion = value;
    };
    /**
     * Gets the ownerType property value. Owner type of device.
     * @returns a ownerType
     */
    public get ownerType() {
        return this._ownerType;
    };
    /**
     * Sets the ownerType property value. Owner type of device.
     * @param value Value to set for the ownerType property.
     */
    public set ownerType(value: OwnerType | undefined) {
        this._ownerType = value;
    };
    /**
     * Gets the partnerReportedThreatState property value. Available health states for the Device Health API
     * @returns a managedDevicePartnerReportedHealthState
     */
    public get partnerReportedThreatState() {
        return this._partnerReportedThreatState;
    };
    /**
     * Sets the partnerReportedThreatState property value. Available health states for the Device Health API
     * @param value Value to set for the partnerReportedThreatState property.
     */
    public set partnerReportedThreatState(value: ManagedDevicePartnerReportedHealthState | undefined) {
        this._partnerReportedThreatState = value;
    };
    /**
     * Gets the phoneNumber property value. Phone number of the device. This property is read-only.
     * @returns a string
     */
    public get phoneNumber() {
        return this._phoneNumber;
    };
    /**
     * Sets the phoneNumber property value. Phone number of the device. This property is read-only.
     * @param value Value to set for the phoneNumber property.
     */
    public set phoneNumber(value: string | undefined) {
        this._phoneNumber = value;
    };
    /**
     * Gets the physicalMemoryInBytes property value. Total Memory in Bytes. Return default value 0 in LIST managedDevices. Real value only returned in singel device GET call with device id and included in select parameter. Supports: $select. Default value is 0. Read-only. This property is read-only.
     * @returns a int64
     */
    public get physicalMemoryInBytes() {
        return this._physicalMemoryInBytes;
    };
    /**
     * Sets the physicalMemoryInBytes property value. Total Memory in Bytes. Return default value 0 in LIST managedDevices. Real value only returned in singel device GET call with device id and included in select parameter. Supports: $select. Default value is 0. Read-only. This property is read-only.
     * @param value Value to set for the physicalMemoryInBytes property.
     */
    public set physicalMemoryInBytes(value: number | undefined) {
        this._physicalMemoryInBytes = value;
    };
    /**
     * Gets the preferMdmOverGroupPolicyAppliedDateTime property value. Reports the DateTime the preferMdmOverGroupPolicy setting was set.  When set, the Intune MDM settings will override Group Policy settings if there is a conflict. Read Only. This property is read-only.
     * @returns a Date
     */
    public get preferMdmOverGroupPolicyAppliedDateTime() {
        return this._preferMdmOverGroupPolicyAppliedDateTime;
    };
    /**
     * Sets the preferMdmOverGroupPolicyAppliedDateTime property value. Reports the DateTime the preferMdmOverGroupPolicy setting was set.  When set, the Intune MDM settings will override Group Policy settings if there is a conflict. Read Only. This property is read-only.
     * @param value Value to set for the preferMdmOverGroupPolicyAppliedDateTime property.
     */
    public set preferMdmOverGroupPolicyAppliedDateTime(value: Date | undefined) {
        this._preferMdmOverGroupPolicyAppliedDateTime = value;
    };
    /**
     * Gets the processorArchitecture property value. Processor architecture
     * @returns a managedDeviceArchitecture
     */
    public get processorArchitecture() {
        return this._processorArchitecture;
    };
    /**
     * Sets the processorArchitecture property value. Processor architecture
     * @param value Value to set for the processorArchitecture property.
     */
    public set processorArchitecture(value: ManagedDeviceArchitecture | undefined) {
        this._processorArchitecture = value;
    };
    /**
     * Gets the remoteAssistanceSessionErrorDetails property value. An error string that identifies issues when creating Remote Assistance session objects. This property is read-only.
     * @returns a string
     */
    public get remoteAssistanceSessionErrorDetails() {
        return this._remoteAssistanceSessionErrorDetails;
    };
    /**
     * Sets the remoteAssistanceSessionErrorDetails property value. An error string that identifies issues when creating Remote Assistance session objects. This property is read-only.
     * @param value Value to set for the remoteAssistanceSessionErrorDetails property.
     */
    public set remoteAssistanceSessionErrorDetails(value: string | undefined) {
        this._remoteAssistanceSessionErrorDetails = value;
    };
    /**
     * Gets the remoteAssistanceSessionUrl property value. Url that allows a Remote Assistance session to be established with the device. This property is read-only.
     * @returns a string
     */
    public get remoteAssistanceSessionUrl() {
        return this._remoteAssistanceSessionUrl;
    };
    /**
     * Sets the remoteAssistanceSessionUrl property value. Url that allows a Remote Assistance session to be established with the device. This property is read-only.
     * @param value Value to set for the remoteAssistanceSessionUrl property.
     */
    public set remoteAssistanceSessionUrl(value: string | undefined) {
        this._remoteAssistanceSessionUrl = value;
    };
    /**
     * Gets the requireUserEnrollmentApproval property value. Reports if the managed iOS device is user approval enrollment. This property is read-only.
     * @returns a boolean
     */
    public get requireUserEnrollmentApproval() {
        return this._requireUserEnrollmentApproval;
    };
    /**
     * Sets the requireUserEnrollmentApproval property value. Reports if the managed iOS device is user approval enrollment. This property is read-only.
     * @param value Value to set for the requireUserEnrollmentApproval property.
     */
    public set requireUserEnrollmentApproval(value: boolean | undefined) {
        this._requireUserEnrollmentApproval = value;
    };
    /**
     * Gets the retireAfterDateTime property value. Indicates the time after when a device will be auto retired because of scheduled action. This property is read-only.
     * @returns a Date
     */
    public get retireAfterDateTime() {
        return this._retireAfterDateTime;
    };
    /**
     * Sets the retireAfterDateTime property value. Indicates the time after when a device will be auto retired because of scheduled action. This property is read-only.
     * @param value Value to set for the retireAfterDateTime property.
     */
    public set retireAfterDateTime(value: Date | undefined) {
        this._retireAfterDateTime = value;
    };
    /**
     * Gets the roleScopeTagIds property value. List of Scope Tag IDs for this Device instance.
     * @returns a string
     */
    public get roleScopeTagIds() {
        return this._roleScopeTagIds;
    };
    /**
     * Sets the roleScopeTagIds property value. List of Scope Tag IDs for this Device instance.
     * @param value Value to set for the roleScopeTagIds property.
     */
    public set roleScopeTagIds(value: string[] | undefined) {
        this._roleScopeTagIds = value;
    };
    /**
     * Gets the securityBaselineStates property value. Security baseline states for this device.
     * @returns a securityBaselineState
     */
    public get securityBaselineStates() {
        return this._securityBaselineStates;
    };
    /**
     * Sets the securityBaselineStates property value. Security baseline states for this device.
     * @param value Value to set for the securityBaselineStates property.
     */
    public set securityBaselineStates(value: SecurityBaselineState[] | undefined) {
        this._securityBaselineStates = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<AssignmentFilterEvaluationStatusDetails>("assignmentFilterEvaluationStatusDetails", this.assignmentFilterEvaluationStatusDetails);
        writer.writeEnumValue<ChassisType>("chassisType", this.chassisType);
        writer.writeCollectionOfObjectValues<ChromeOSDeviceProperty>("chromeOSDeviceInfo", this.chromeOSDeviceInfo);
        writer.writeCollectionOfObjectValues<CloudPcRemoteActionResult>("cloudPcRemoteActionResults", this.cloudPcRemoteActionResults);
        writer.writeEnumValue<ComplianceState>("complianceState", this.complianceState);
        writer.writeObjectValue<ConfigurationManagerClientEnabledFeatures>("configurationManagerClientEnabledFeatures", this.configurationManagerClientEnabledFeatures);
        writer.writeObjectValue<ConfigurationManagerClientHealthState>("configurationManagerClientHealthState", this.configurationManagerClientHealthState);
        writer.writeObjectValue<ConfigurationManagerClientInformation>("configurationManagerClientInformation", this.configurationManagerClientInformation);
        writer.writeCollectionOfObjectValues<DetectedApp>("detectedApps", this.detectedApps);
        writer.writeObjectValue<DeviceCategory>("deviceCategory", this.deviceCategory);
        writer.writeCollectionOfObjectValues<DeviceCompliancePolicyState>("deviceCompliancePolicyStates", this.deviceCompliancePolicyStates);
        writer.writeCollectionOfObjectValues<DeviceConfigurationState>("deviceConfigurationStates", this.deviceConfigurationStates);
        writer.writeEnumValue<DeviceEnrollmentType>("deviceEnrollmentType", this.deviceEnrollmentType);
        writer.writeBooleanValue("deviceFirmwareConfigurationInterfaceManaged", this.deviceFirmwareConfigurationInterfaceManaged);
        writer.writeObjectValue<DeviceHealthAttestationState>("deviceHealthAttestationState", this.deviceHealthAttestationState);
        writer.writeEnumValue<DeviceRegistrationState>("deviceRegistrationState", this.deviceRegistrationState);
        writer.writeEnumValue<DeviceType>("deviceType", this.deviceType);
        writer.writeEnumValue<DeviceManagementExchangeAccessState>("exchangeAccessState", this.exchangeAccessState);
        writer.writeEnumValue<DeviceManagementExchangeAccessStateReason>("exchangeAccessStateReason", this.exchangeAccessStateReason);
        writer.writeObjectValue<HardwareInformation>("hardwareInformation", this.hardwareInformation);
        writer.writeEnumValue<JoinType>("joinType", this.joinType);
        writer.writeCollectionOfObjectValues<DeviceLogCollectionResponse>("logCollectionRequests", this.logCollectionRequests);
        writer.writeEnumValue<LostModeState>("lostModeState", this.lostModeState);
        writer.writeCollectionOfObjectValues<ManagedDeviceMobileAppConfigurationState>("managedDeviceMobileAppConfigurationStates", this.managedDeviceMobileAppConfigurationStates);
        writer.writeStringValue("managedDeviceName", this.managedDeviceName);
        writer.writeEnumValue<ManagedDeviceOwnerType>("managedDeviceOwnerType", this.managedDeviceOwnerType);
        writer.writeEnumValue<ManagementAgentType>("managementAgent", this.managementAgent);
        writer.writeEnumValue<ManagedDeviceManagementFeatures>("managementFeatures", this.managementFeatures);
        writer.writeEnumValue<ManagementState>("managementState", this.managementState);
        writer.writeStringValue("notes", this.notes);
        writer.writeEnumValue<OwnerType>("ownerType", this.ownerType);
        writer.writeEnumValue<ManagedDevicePartnerReportedHealthState>("partnerReportedThreatState", this.partnerReportedThreatState);
        writer.writeEnumValue<ManagedDeviceArchitecture>("processorArchitecture", this.processorArchitecture);
        writer.writeCollectionOfPrimitiveValues<string>("roleScopeTagIds", this.roleScopeTagIds);
        writer.writeCollectionOfObjectValues<SecurityBaselineState>("securityBaselineStates", this.securityBaselineStates);
        writer.writeStringValue("skuFamily", this.skuFamily);
        writer.writeCollectionOfObjectValues<User>("users", this.users);
        writer.writeObjectValue<WindowsProtectionState>("windowsProtectionState", this.windowsProtectionState);
    };
    /**
     * Gets the serialNumber property value. SerialNumber. This property is read-only.
     * @returns a string
     */
    public get serialNumber() {
        return this._serialNumber;
    };
    /**
     * Sets the serialNumber property value. SerialNumber. This property is read-only.
     * @param value Value to set for the serialNumber property.
     */
    public set serialNumber(value: string | undefined) {
        this._serialNumber = value;
    };
    /**
     * Gets the skuFamily property value. Device sku family
     * @returns a string
     */
    public get skuFamily() {
        return this._skuFamily;
    };
    /**
     * Sets the skuFamily property value. Device sku family
     * @param value Value to set for the skuFamily property.
     */
    public set skuFamily(value: string | undefined) {
        this._skuFamily = value;
    };
    /**
     * Gets the skuNumber property value. Device sku number, see also: https://learn.microsoft.com/windows/win32/api/sysinfoapi/nf-sysinfoapi-getproductinfo. Valid values 0 to 2147483647. This property is read-only.
     * @returns a integer
     */
    public get skuNumber() {
        return this._skuNumber;
    };
    /**
     * Sets the skuNumber property value. Device sku number, see also: https://learn.microsoft.com/windows/win32/api/sysinfoapi/nf-sysinfoapi-getproductinfo. Valid values 0 to 2147483647. This property is read-only.
     * @param value Value to set for the skuNumber property.
     */
    public set skuNumber(value: number | undefined) {
        this._skuNumber = value;
    };
    /**
     * Gets the specificationVersion property value. Specification version. This property is read-only.
     * @returns a string
     */
    public get specificationVersion() {
        return this._specificationVersion;
    };
    /**
     * Sets the specificationVersion property value. Specification version. This property is read-only.
     * @param value Value to set for the specificationVersion property.
     */
    public set specificationVersion(value: string | undefined) {
        this._specificationVersion = value;
    };
    /**
     * Gets the subscriberCarrier property value. Subscriber Carrier. This property is read-only.
     * @returns a string
     */
    public get subscriberCarrier() {
        return this._subscriberCarrier;
    };
    /**
     * Sets the subscriberCarrier property value. Subscriber Carrier. This property is read-only.
     * @param value Value to set for the subscriberCarrier property.
     */
    public set subscriberCarrier(value: string | undefined) {
        this._subscriberCarrier = value;
    };
    /**
     * Gets the totalStorageSpaceInBytes property value. Total Storage in Bytes. This property is read-only.
     * @returns a int64
     */
    public get totalStorageSpaceInBytes() {
        return this._totalStorageSpaceInBytes;
    };
    /**
     * Sets the totalStorageSpaceInBytes property value. Total Storage in Bytes. This property is read-only.
     * @param value Value to set for the totalStorageSpaceInBytes property.
     */
    public set totalStorageSpaceInBytes(value: number | undefined) {
        this._totalStorageSpaceInBytes = value;
    };
    /**
     * Gets the udid property value. Unique Device Identifier for iOS and macOS devices. Return default value null in LIST managedDevices. Real value only returned in singel device GET call with device id and included in select parameter. Supports: $select. $Search is not supported. Read-only. This property is read-only.
     * @returns a string
     */
    public get udid() {
        return this._udid;
    };
    /**
     * Sets the udid property value. Unique Device Identifier for iOS and macOS devices. Return default value null in LIST managedDevices. Real value only returned in singel device GET call with device id and included in select parameter. Supports: $select. $Search is not supported. Read-only. This property is read-only.
     * @param value Value to set for the udid property.
     */
    public set udid(value: string | undefined) {
        this._udid = value;
    };
    /**
     * Gets the userDisplayName property value. User display name. This property is read-only.
     * @returns a string
     */
    public get userDisplayName() {
        return this._userDisplayName;
    };
    /**
     * Sets the userDisplayName property value. User display name. This property is read-only.
     * @param value Value to set for the userDisplayName property.
     */
    public set userDisplayName(value: string | undefined) {
        this._userDisplayName = value;
    };
    /**
     * Gets the userId property value. Unique Identifier for the user associated with the device. This property is read-only.
     * @returns a string
     */
    public get userId() {
        return this._userId;
    };
    /**
     * Sets the userId property value. Unique Identifier for the user associated with the device. This property is read-only.
     * @param value Value to set for the userId property.
     */
    public set userId(value: string | undefined) {
        this._userId = value;
    };
    /**
     * Gets the userPrincipalName property value. Device user principal name. This property is read-only.
     * @returns a string
     */
    public get userPrincipalName() {
        return this._userPrincipalName;
    };
    /**
     * Sets the userPrincipalName property value. Device user principal name. This property is read-only.
     * @param value Value to set for the userPrincipalName property.
     */
    public set userPrincipalName(value: string | undefined) {
        this._userPrincipalName = value;
    };
    /**
     * Gets the users property value. The primary users associated with the managed device.
     * @returns a user
     */
    public get users() {
        return this._users;
    };
    /**
     * Sets the users property value. The primary users associated with the managed device.
     * @param value Value to set for the users property.
     */
    public set users(value: User[] | undefined) {
        this._users = value;
    };
    /**
     * Gets the usersLoggedOn property value. Indicates the last logged on users of a device. This property is read-only.
     * @returns a loggedOnUser
     */
    public get usersLoggedOn() {
        return this._usersLoggedOn;
    };
    /**
     * Sets the usersLoggedOn property value. Indicates the last logged on users of a device. This property is read-only.
     * @param value Value to set for the usersLoggedOn property.
     */
    public set usersLoggedOn(value: LoggedOnUser[] | undefined) {
        this._usersLoggedOn = value;
    };
    /**
     * Gets the wiFiMacAddress property value. Wi-Fi MAC. This property is read-only.
     * @returns a string
     */
    public get wiFiMacAddress() {
        return this._wiFiMacAddress;
    };
    /**
     * Sets the wiFiMacAddress property value. Wi-Fi MAC. This property is read-only.
     * @param value Value to set for the wiFiMacAddress property.
     */
    public set wiFiMacAddress(value: string | undefined) {
        this._wiFiMacAddress = value;
    };
    /**
     * Gets the windowsActiveMalwareCount property value. Count of active malware for this windows device. This property is read-only.
     * @returns a integer
     */
    public get windowsActiveMalwareCount() {
        return this._windowsActiveMalwareCount;
    };
    /**
     * Sets the windowsActiveMalwareCount property value. Count of active malware for this windows device. This property is read-only.
     * @param value Value to set for the windowsActiveMalwareCount property.
     */
    public set windowsActiveMalwareCount(value: number | undefined) {
        this._windowsActiveMalwareCount = value;
    };
    /**
     * Gets the windowsProtectionState property value. The windowsProtectionState property
     * @returns a windowsProtectionState
     */
    public get windowsProtectionState() {
        return this._windowsProtectionState;
    };
    /**
     * Sets the windowsProtectionState property value. The windowsProtectionState property
     * @param value Value to set for the windowsProtectionState property.
     */
    public set windowsProtectionState(value: WindowsProtectionState | undefined) {
        this._windowsProtectionState = value;
    };
    /**
     * Gets the windowsRemediatedMalwareCount property value. Count of remediated malware for this windows device. This property is read-only.
     * @returns a integer
     */
    public get windowsRemediatedMalwareCount() {
        return this._windowsRemediatedMalwareCount;
    };
    /**
     * Sets the windowsRemediatedMalwareCount property value. Count of remediated malware for this windows device. This property is read-only.
     * @param value Value to set for the windowsRemediatedMalwareCount property.
     */
    public set windowsRemediatedMalwareCount(value: number | undefined) {
        this._windowsRemediatedMalwareCount = value;
    };
}
