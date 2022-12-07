import {ChassisType} from './chassisType';
import {ComplianceState} from './complianceState';
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
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedDevice extends Entity, Partial<Parsable> {
    /** Whether the device is Azure Active Directory registered. This property is read-only. */
    aadRegistered?: boolean;
    /** Code that allows the Activation Lock on a device to be bypassed. This property is read-only. */
    activationLockBypassCode?: string;
    /** Android security patch level. This property is read-only. */
    androidSecurityPatchLevel?: string;
    /** Managed device mobile app configuration states for this device. */
    assignmentFilterEvaluationStatusDetails?: AssignmentFilterEvaluationStatusDetails[];
    /** Reports if the managed device is enrolled via auto-pilot. This property is read-only. */
    autopilotEnrolled?: boolean;
    /** The unique identifier for the Azure Active Directory device. Read only. This property is read-only. */
    azureActiveDirectoryDeviceId?: string;
    /** The unique identifier for the Azure Active Directory device. Read only. This property is read-only. */
    azureADDeviceId?: string;
    /** Whether the device is Azure Active Directory registered. This property is read-only. */
    azureADRegistered?: boolean;
    /** Reports if the managed device has an escrowed Bootstrap Token. This is only for macOS devices. To get, include BootstrapTokenEscrowed in the select clause and query with a device id. If FALSE, no bootstrap token is escrowed. If TRUE, the device has escrowed a bootstrap token with Intune. This property is read-only. */
    bootstrapTokenEscrowed?: boolean;
    /** Chassis type. */
    chassisType?: ChassisType;
    /** List of properties of the ChromeOS Device. */
    chromeOSDeviceInfo?: ChromeOSDeviceProperty[];
    /** The cloudPcRemoteActionResults property */
    cloudPcRemoteActionResults?: CloudPcRemoteActionResult[];
    /** The DateTime when device compliance grace period expires. This property is read-only. */
    complianceGracePeriodExpirationDateTime?: Date;
    /** Compliance state. */
    complianceState?: ComplianceState;
    /** configuration Manager client enabled features */
    configurationManagerClientEnabledFeatures?: ConfigurationManagerClientEnabledFeatures;
    /** Configuration manager client health state */
    configurationManagerClientHealthState?: ConfigurationManagerClientHealthState;
    /** Configuration Manager client information synced from SCCM */
    configurationManagerClientInformation?: ConfigurationManagerClientInformation;
    /** All applications currently installed on the device */
    detectedApps?: DetectedApp[];
    /** List of ComplexType deviceActionResult objects. This property is read-only. */
    deviceActionResults?: DeviceActionResult[];
    /** The deviceCategory property */
    deviceCategory?: DeviceCategory;
    /** Device category display name. This property is read-only. */
    deviceCategoryDisplayName?: string;
    /** Device compliance policy states for this device. */
    deviceCompliancePolicyStates?: DeviceCompliancePolicyState[];
    /** Device configuration states for this device. */
    deviceConfigurationStates?: DeviceConfigurationState[];
    /** Possible ways of adding a mobile device to management. */
    deviceEnrollmentType?: DeviceEnrollmentType;
    /** Indicates whether the device is DFCI managed. When TRUE the device is DFCI managed. When FALSE, the device is not DFCI managed. The default value is FALSE. */
    deviceFirmwareConfigurationInterfaceManaged?: boolean;
    /** The deviceHealthAttestationState property */
    deviceHealthAttestationState?: DeviceHealthAttestationState;
    /** Name of the device. This property is read-only. */
    deviceName?: string;
    /** Device registration status. */
    deviceRegistrationState?: DeviceRegistrationState;
    /** Device type. */
    deviceType?: DeviceType;
    /** Whether the device is Exchange ActiveSync activated. This property is read-only. */
    easActivated?: boolean;
    /** Exchange ActivationSync activation time of the device. This property is read-only. */
    easActivationDateTime?: Date;
    /** Exchange ActiveSync Id of the device. This property is read-only. */
    easDeviceId?: string;
    /** Email(s) for the user associated with the device. This property is read-only. */
    emailAddress?: string;
    /** Enrollment time of the device. This property is read-only. */
    enrolledDateTime?: Date;
    /** Name of the enrollment profile assigned to the device. Default value is empty string, indicating no enrollment profile was assgined. This property is read-only. */
    enrollmentProfileName?: string;
    /** Ethernet MAC. This property is read-only. */
    ethernetMacAddress?: string;
    /** Device Exchange Access State. */
    exchangeAccessState?: DeviceManagementExchangeAccessState;
    /** Device Exchange Access State Reason. */
    exchangeAccessStateReason?: DeviceManagementExchangeAccessStateReason;
    /** Last time the device contacted Exchange. This property is read-only. */
    exchangeLastSuccessfulSyncDateTime?: Date;
    /** Free Storage in Bytes. Default value is 0. Read-only. This property is read-only. */
    freeStorageSpaceInBytes?: number;
    /** Hardware information of a given device. */
    hardwareInformation?: HardwareInformation;
    /** Integrated Circuit Card Identifier, it is A SIM card's unique identification number. Return default value null in LIST managedDevices. Real value only returned in singel device GET call with device id and included in select parameter. Supports: $select. $Search is not supported. Read-only. This property is read-only. */
    iccid?: string;
    /** IMEI. This property is read-only. */
    imei?: string;
    /** Device encryption status. This property is read-only. */
    isEncrypted?: boolean;
    /** Device supervised status. This property is read-only. */
    isSupervised?: boolean;
    /** whether the device is jail broken or rooted. This property is read-only. */
    jailBroken?: string;
    /** Device enrollment join type. */
    joinType?: JoinType;
    /** The date and time that the device last completed a successful sync with Intune. This property is read-only. */
    lastSyncDateTime?: Date;
    /** List of log collection requests */
    logCollectionRequests?: DeviceLogCollectionResponse[];
    /** State of lost mode, indicating if lost mode is enabled or disabled */
    lostModeState?: LostModeState;
    /** Managed device mobile app configuration states for this device. */
    managedDeviceMobileAppConfigurationStates?: ManagedDeviceMobileAppConfigurationState[];
    /** Automatically generated name to identify a device. Can be overwritten to a user friendly name. */
    managedDeviceName?: string;
    /** Owner type of device. */
    managedDeviceOwnerType?: ManagedDeviceOwnerType;
    /** Management agent type. */
    managementAgent?: ManagementAgentType;
    /** Reports device management certificate expiration date. This property is read-only. */
    managementCertificateExpirationDate?: Date;
    /** Device management features. */
    managementFeatures?: ManagedDeviceManagementFeatures;
    /** Management state of device in Microsoft Intune. */
    managementState?: ManagementState;
    /** Manufacturer of the device. This property is read-only. */
    manufacturer?: string;
    /** MEID. This property is read-only. */
    meid?: string;
    /** Model of the device. This property is read-only. */
    model?: string;
    /** Notes on the device created by IT Admin. Return default value null in LIST managedDevices. Real value only returned in singel device GET call with device id and included in select parameter. Supports: $select.  $Search is not supported. */
    notes?: string;
    /** Operating system of the device. Windows, iOS, etc. This property is read-only. */
    operatingSystem?: string;
    /** Operating system version of the device. This property is read-only. */
    osVersion?: string;
    /** Owner type of device. */
    ownerType?: OwnerType;
    /** Available health states for the Device Health API */
    partnerReportedThreatState?: ManagedDevicePartnerReportedHealthState;
    /** Phone number of the device. This property is read-only. */
    phoneNumber?: string;
    /** Total Memory in Bytes. Return default value 0 in LIST managedDevices. Real value only returned in singel device GET call with device id and included in select parameter. Supports: $select. Default value is 0. Read-only. This property is read-only. */
    physicalMemoryInBytes?: number;
    /** Reports the DateTime the preferMdmOverGroupPolicy setting was set.  When set, the Intune MDM settings will override Group Policy settings if there is a conflict. Read Only. This property is read-only. */
    preferMdmOverGroupPolicyAppliedDateTime?: Date;
    /** Processor architecture */
    processorArchitecture?: ManagedDeviceArchitecture;
    /** An error string that identifies issues when creating Remote Assistance session objects. This property is read-only. */
    remoteAssistanceSessionErrorDetails?: string;
    /** Url that allows a Remote Assistance session to be established with the device. This property is read-only. */
    remoteAssistanceSessionUrl?: string;
    /** Reports if the managed iOS device is user approval enrollment. This property is read-only. */
    requireUserEnrollmentApproval?: boolean;
    /** Indicates the time after when a device will be auto retired because of scheduled action. This property is read-only. */
    retireAfterDateTime?: Date;
    /** List of Scope Tag IDs for this Device instance. */
    roleScopeTagIds?: string[];
    /** Security baseline states for this device. */
    securityBaselineStates?: SecurityBaselineState[];
    /** SerialNumber. This property is read-only. */
    serialNumber?: string;
    /** Device sku family */
    skuFamily?: string;
    /** Device sku number, see also: https://learn.microsoft.com/windows/win32/api/sysinfoapi/nf-sysinfoapi-getproductinfo. Valid values 0 to 2147483647. This property is read-only. */
    skuNumber?: number;
    /** Specification version. This property is read-only. */
    specificationVersion?: string;
    /** Subscriber Carrier. This property is read-only. */
    subscriberCarrier?: string;
    /** Total Storage in Bytes. This property is read-only. */
    totalStorageSpaceInBytes?: number;
    /** Unique Device Identifier for iOS and macOS devices. Return default value null in LIST managedDevices. Real value only returned in singel device GET call with device id and included in select parameter. Supports: $select. $Search is not supported. Read-only. This property is read-only. */
    udid?: string;
    /** User display name. This property is read-only. */
    userDisplayName?: string;
    /** Unique Identifier for the user associated with the device. This property is read-only. */
    userId?: string;
    /** Device user principal name. This property is read-only. */
    userPrincipalName?: string;
    /** The primary users associated with the managed device. */
    users?: User[];
    /** Indicates the last logged on users of a device. This property is read-only. */
    usersLoggedOn?: LoggedOnUser[];
    /** Wi-Fi MAC. This property is read-only. */
    wiFiMacAddress?: string;
    /** Count of active malware for this windows device. This property is read-only. */
    windowsActiveMalwareCount?: number;
    /** The windowsProtectionState property */
    windowsProtectionState?: WindowsProtectionState;
    /** Count of remediated malware for this windows device. This property is read-only. */
    windowsRemediatedMalwareCount?: number;
}
