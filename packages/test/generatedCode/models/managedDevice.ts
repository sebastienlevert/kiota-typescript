import {ComplianceState} from './complianceState';
import {DeviceEnrollmentType} from './deviceEnrollmentType';
import {DeviceManagementExchangeAccessState} from './deviceManagementExchangeAccessState';
import {DeviceManagementExchangeAccessStateReason} from './deviceManagementExchangeAccessStateReason';
import {DeviceRegistrationState} from './deviceRegistrationState';
import {ConfigurationManagerClientEnabledFeatures, DeviceActionResult, DeviceCategory, DeviceCompliancePolicyState, DeviceConfigurationState, DeviceHealthAttestationState, Entity, User} from './index';
import {ManagedDeviceOwnerType} from './managedDeviceOwnerType';
import {ManagedDevicePartnerReportedHealthState} from './managedDevicePartnerReportedHealthState';
import {ManagementAgentType} from './managementAgentType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedDevice extends Entity, Partial<Parsable> {
    /** Code that allows the Activation Lock on a device to be bypassed. This property is read-only. */
    activationLockBypassCode?: string;
    /** Android security patch level. This property is read-only. */
    androidSecurityPatchLevel?: string;
    /** The unique identifier for the Azure Active Directory device. Read only. This property is read-only. */
    azureADDeviceId?: string;
    /** Whether the device is Azure Active Directory registered. This property is read-only. */
    azureADRegistered?: boolean;
    /** The DateTime when device compliance grace period expires. This property is read-only. */
    complianceGracePeriodExpirationDateTime?: Date;
    /** Compliance state. */
    complianceState?: ComplianceState;
    /** ConfigrMgr client enabled features. This property is read-only. */
    configurationManagerClientEnabledFeatures?: ConfigurationManagerClientEnabledFeatures;
    /** List of ComplexType deviceActionResult objects. This property is read-only. */
    deviceActionResults?: DeviceActionResult[];
    /** Device category */
    deviceCategory?: DeviceCategory;
    /** Device category display name. This property is read-only. */
    deviceCategoryDisplayName?: string;
    /** Device compliance policy states for this device. */
    deviceCompliancePolicyStates?: DeviceCompliancePolicyState[];
    /** Device configuration states for this device. */
    deviceConfigurationStates?: DeviceConfigurationState[];
    /** Possible ways of adding a mobile device to management. */
    deviceEnrollmentType?: DeviceEnrollmentType;
    /** The device health attestation state. This property is read-only. */
    deviceHealthAttestationState?: DeviceHealthAttestationState;
    /** Name of the device. This property is read-only. */
    deviceName?: string;
    /** Device registration status. */
    deviceRegistrationState?: DeviceRegistrationState;
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
    /** The date and time that the device last completed a successful sync with Intune. This property is read-only. */
    lastSyncDateTime?: Date;
    /** Automatically generated name to identify a device. Can be overwritten to a user friendly name. */
    managedDeviceName?: string;
    /** Owner type of device. */
    managedDeviceOwnerType?: ManagedDeviceOwnerType;
    /** The managementAgent property */
    managementAgent?: ManagementAgentType;
    /** Reports device management certificate expiration date. This property is read-only. */
    managementCertificateExpirationDate?: Date;
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
    /** Available health states for the Device Health API */
    partnerReportedThreatState?: ManagedDevicePartnerReportedHealthState;
    /** Phone number of the device. This property is read-only. */
    phoneNumber?: string;
    /** Total Memory in Bytes. Return default value 0 in LIST managedDevices. Real value only returned in singel device GET call with device id and included in select parameter. Supports: $select. Default value is 0. Read-only. This property is read-only. */
    physicalMemoryInBytes?: number;
    /** An error string that identifies issues when creating Remote Assistance session objects. This property is read-only. */
    remoteAssistanceSessionErrorDetails?: string;
    /** Url that allows a Remote Assistance session to be established with the device. This property is read-only. */
    remoteAssistanceSessionUrl?: string;
    /** Reports if the managed iOS device is user approval enrollment. This property is read-only. */
    requireUserEnrollmentApproval?: boolean;
    /** SerialNumber. This property is read-only. */
    serialNumber?: string;
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
    /** Wi-Fi MAC. This property is read-only. */
    wiFiMacAddress?: string;
}
