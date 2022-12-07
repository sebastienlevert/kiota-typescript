import {ChassisType} from './chassisType';
import {ComplianceState} from './complianceState';
import {deserializeIntoAssignmentFilterEvaluationStatusDetails} from './deserializeIntoAssignmentFilterEvaluationStatusDetails';
import {deserializeIntoChromeOSDeviceProperty} from './deserializeIntoChromeOSDeviceProperty';
import {deserializeIntoCloudPcRemoteActionResult} from './deserializeIntoCloudPcRemoteActionResult';
import {deserializeIntoConfigurationManagerClientEnabledFeatures} from './deserializeIntoConfigurationManagerClientEnabledFeatures';
import {deserializeIntoConfigurationManagerClientHealthState} from './deserializeIntoConfigurationManagerClientHealthState';
import {deserializeIntoConfigurationManagerClientInformation} from './deserializeIntoConfigurationManagerClientInformation';
import {deserializeIntoDetectedApp} from './deserializeIntoDetectedApp';
import {deserializeIntoDeviceActionResult} from './deserializeIntoDeviceActionResult';
import {deserializeIntoDeviceCategory} from './deserializeIntoDeviceCategory';
import {deserializeIntoDeviceCompliancePolicyState} from './deserializeIntoDeviceCompliancePolicyState';
import {deserializeIntoDeviceConfigurationState} from './deserializeIntoDeviceConfigurationState';
import {deserializeIntoDeviceHealthAttestationState} from './deserializeIntoDeviceHealthAttestationState';
import {deserializeIntoDeviceLogCollectionResponse} from './deserializeIntoDeviceLogCollectionResponse';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoHardwareInformation} from './deserializeIntoHardwareInformation';
import {deserializeIntoLoggedOnUser} from './deserializeIntoLoggedOnUser';
import {deserializeIntoManagedDeviceMobileAppConfigurationState} from './deserializeIntoManagedDeviceMobileAppConfigurationState';
import {deserializeIntoSecurityBaselineState} from './deserializeIntoSecurityBaselineState';
import {deserializeIntoUser} from './deserializeIntoUser';
import {deserializeIntoWindowsProtectionState} from './deserializeIntoWindowsProtectionState';
import {DeviceEnrollmentType} from './deviceEnrollmentType';
import {DeviceManagementExchangeAccessState} from './deviceManagementExchangeAccessState';
import {DeviceManagementExchangeAccessStateReason} from './deviceManagementExchangeAccessStateReason';
import {DeviceRegistrationState} from './deviceRegistrationState';
import {DeviceType} from './deviceType';
import {ManagedDevice} from './index';
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

export function deserializeIntoManagedDevice(managedDevice: ManagedDevice | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(managedDevice),
        "aadRegistered": n => { managedDevice.aadRegistered = n.getBooleanValue() as any ; },
        "activationLockBypassCode": n => { managedDevice.activationLockBypassCode = n.getStringValue() as any ; },
        "androidSecurityPatchLevel": n => { managedDevice.androidSecurityPatchLevel = n.getStringValue() as any ; },
        "assignmentFilterEvaluationStatusDetails": n => { managedDevice.assignmentFilterEvaluationStatusDetails = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAssignmentFilterEvaluationStatusDetails) as any ; },
        "autopilotEnrolled": n => { managedDevice.autopilotEnrolled = n.getBooleanValue() as any ; },
        "azureActiveDirectoryDeviceId": n => { managedDevice.azureActiveDirectoryDeviceId = n.getStringValue() as any ; },
        "azureADDeviceId": n => { managedDevice.azureADDeviceId = n.getStringValue() as any ; },
        "azureADRegistered": n => { managedDevice.azureADRegistered = n.getBooleanValue() as any ; },
        "bootstrapTokenEscrowed": n => { managedDevice.bootstrapTokenEscrowed = n.getBooleanValue() as any ; },
        "chassisType": n => { managedDevice.chassisType = n.getEnumValue<ChassisType>(ChassisType) as any ; },
        "chromeOSDeviceInfo": n => { managedDevice.chromeOSDeviceInfo = n.getCollectionOfObjectValuesFromMethod(deserializeIntoChromeOSDeviceProperty) as any ; },
        "cloudPcRemoteActionResults": n => { managedDevice.cloudPcRemoteActionResults = n.getCollectionOfObjectValuesFromMethod(deserializeIntoCloudPcRemoteActionResult) as any ; },
        "complianceGracePeriodExpirationDateTime": n => { managedDevice.complianceGracePeriodExpirationDateTime = n.getDateValue() as any ; },
        "complianceState": n => { managedDevice.complianceState = n.getEnumValue<ComplianceState>(ComplianceState) as any ; },
        "configurationManagerClientEnabledFeatures": n => { managedDevice.configurationManagerClientEnabledFeatures = n.getObject(deserializeIntoConfigurationManagerClientEnabledFeatures) as any ; },
        "configurationManagerClientHealthState": n => { managedDevice.configurationManagerClientHealthState = n.getObject(deserializeIntoConfigurationManagerClientHealthState) as any ; },
        "configurationManagerClientInformation": n => { managedDevice.configurationManagerClientInformation = n.getObject(deserializeIntoConfigurationManagerClientInformation) as any ; },
        "detectedApps": n => { managedDevice.detectedApps = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDetectedApp) as any ; },
        "deviceActionResults": n => { managedDevice.deviceActionResults = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDeviceActionResult) as any ; },
        "deviceCategory": n => { managedDevice.deviceCategory = n.getObject(deserializeIntoDeviceCategory) as any ; },
        "deviceCategoryDisplayName": n => { managedDevice.deviceCategoryDisplayName = n.getStringValue() as any ; },
        "deviceCompliancePolicyStates": n => { managedDevice.deviceCompliancePolicyStates = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDeviceCompliancePolicyState) as any ; },
        "deviceConfigurationStates": n => { managedDevice.deviceConfigurationStates = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDeviceConfigurationState) as any ; },
        "deviceEnrollmentType": n => { managedDevice.deviceEnrollmentType = n.getEnumValue<DeviceEnrollmentType>(DeviceEnrollmentType) as any ; },
        "deviceFirmwareConfigurationInterfaceManaged": n => { managedDevice.deviceFirmwareConfigurationInterfaceManaged = n.getBooleanValue() as any ; },
        "deviceHealthAttestationState": n => { managedDevice.deviceHealthAttestationState = n.getObject(deserializeIntoDeviceHealthAttestationState) as any ; },
        "deviceName": n => { managedDevice.deviceName = n.getStringValue() as any ; },
        "deviceRegistrationState": n => { managedDevice.deviceRegistrationState = n.getEnumValue<DeviceRegistrationState>(DeviceRegistrationState) as any ; },
        "deviceType": n => { managedDevice.deviceType = n.getEnumValue<DeviceType>(DeviceType) as any ; },
        "easActivated": n => { managedDevice.easActivated = n.getBooleanValue() as any ; },
        "easActivationDateTime": n => { managedDevice.easActivationDateTime = n.getDateValue() as any ; },
        "easDeviceId": n => { managedDevice.easDeviceId = n.getStringValue() as any ; },
        "emailAddress": n => { managedDevice.emailAddress = n.getStringValue() as any ; },
        "enrolledDateTime": n => { managedDevice.enrolledDateTime = n.getDateValue() as any ; },
        "enrollmentProfileName": n => { managedDevice.enrollmentProfileName = n.getStringValue() as any ; },
        "ethernetMacAddress": n => { managedDevice.ethernetMacAddress = n.getStringValue() as any ; },
        "exchangeAccessState": n => { managedDevice.exchangeAccessState = n.getEnumValue<DeviceManagementExchangeAccessState>(DeviceManagementExchangeAccessState) as any ; },
        "exchangeAccessStateReason": n => { managedDevice.exchangeAccessStateReason = n.getEnumValue<DeviceManagementExchangeAccessStateReason>(DeviceManagementExchangeAccessStateReason) as any ; },
        "exchangeLastSuccessfulSyncDateTime": n => { managedDevice.exchangeLastSuccessfulSyncDateTime = n.getDateValue() as any ; },
        "freeStorageSpaceInBytes": n => { managedDevice.freeStorageSpaceInBytes = n.getNumberValue() as any ; },
        "hardwareInformation": n => { managedDevice.hardwareInformation = n.getObject(deserializeIntoHardwareInformation) as any ; },
        "iccid": n => { managedDevice.iccid = n.getStringValue() as any ; },
        "imei": n => { managedDevice.imei = n.getStringValue() as any ; },
        "isEncrypted": n => { managedDevice.isEncrypted = n.getBooleanValue() as any ; },
        "isSupervised": n => { managedDevice.isSupervised = n.getBooleanValue() as any ; },
        "jailBroken": n => { managedDevice.jailBroken = n.getStringValue() as any ; },
        "joinType": n => { managedDevice.joinType = n.getEnumValue<JoinType>(JoinType) as any ; },
        "lastSyncDateTime": n => { managedDevice.lastSyncDateTime = n.getDateValue() as any ; },
        "logCollectionRequests": n => { managedDevice.logCollectionRequests = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDeviceLogCollectionResponse) as any ; },
        "lostModeState": n => { managedDevice.lostModeState = n.getEnumValue<LostModeState>(LostModeState) as any ; },
        "managedDeviceMobileAppConfigurationStates": n => { managedDevice.managedDeviceMobileAppConfigurationStates = n.getCollectionOfObjectValuesFromMethod(deserializeIntoManagedDeviceMobileAppConfigurationState) as any ; },
        "managedDeviceName": n => { managedDevice.managedDeviceName = n.getStringValue() as any ; },
        "managedDeviceOwnerType": n => { managedDevice.managedDeviceOwnerType = n.getEnumValue<ManagedDeviceOwnerType>(ManagedDeviceOwnerType) as any ; },
        "managementAgent": n => { managedDevice.managementAgent = n.getEnumValue<ManagementAgentType>(ManagementAgentType) as any ; },
        "managementCertificateExpirationDate": n => { managedDevice.managementCertificateExpirationDate = n.getDateValue() as any ; },
        "managementFeatures": n => { managedDevice.managementFeatures = n.getEnumValue<ManagedDeviceManagementFeatures>(ManagedDeviceManagementFeatures) as any ; },
        "managementState": n => { managedDevice.managementState = n.getEnumValue<ManagementState>(ManagementState) as any ; },
        "manufacturer": n => { managedDevice.manufacturer = n.getStringValue() as any ; },
        "meid": n => { managedDevice.meid = n.getStringValue() as any ; },
        "model": n => { managedDevice.model = n.getStringValue() as any ; },
        "notes": n => { managedDevice.notes = n.getStringValue() as any ; },
        "operatingSystem": n => { managedDevice.operatingSystem = n.getStringValue() as any ; },
        "osVersion": n => { managedDevice.osVersion = n.getStringValue() as any ; },
        "ownerType": n => { managedDevice.ownerType = n.getEnumValue<OwnerType>(OwnerType) as any ; },
        "partnerReportedThreatState": n => { managedDevice.partnerReportedThreatState = n.getEnumValue<ManagedDevicePartnerReportedHealthState>(ManagedDevicePartnerReportedHealthState) as any ; },
        "phoneNumber": n => { managedDevice.phoneNumber = n.getStringValue() as any ; },
        "physicalMemoryInBytes": n => { managedDevice.physicalMemoryInBytes = n.getNumberValue() as any ; },
        "preferMdmOverGroupPolicyAppliedDateTime": n => { managedDevice.preferMdmOverGroupPolicyAppliedDateTime = n.getDateValue() as any ; },
        "processorArchitecture": n => { managedDevice.processorArchitecture = n.getEnumValue<ManagedDeviceArchitecture>(ManagedDeviceArchitecture) as any ; },
        "remoteAssistanceSessionErrorDetails": n => { managedDevice.remoteAssistanceSessionErrorDetails = n.getStringValue() as any ; },
        "remoteAssistanceSessionUrl": n => { managedDevice.remoteAssistanceSessionUrl = n.getStringValue() as any ; },
        "requireUserEnrollmentApproval": n => { managedDevice.requireUserEnrollmentApproval = n.getBooleanValue() as any ; },
        "retireAfterDateTime": n => { managedDevice.retireAfterDateTime = n.getDateValue() as any ; },
        "roleScopeTagIds": n => { managedDevice.roleScopeTagIds = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "securityBaselineStates": n => { managedDevice.securityBaselineStates = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSecurityBaselineState) as any ; },
        "serialNumber": n => { managedDevice.serialNumber = n.getStringValue() as any ; },
        "skuFamily": n => { managedDevice.skuFamily = n.getStringValue() as any ; },
        "skuNumber": n => { managedDevice.skuNumber = n.getNumberValue() as any ; },
        "specificationVersion": n => { managedDevice.specificationVersion = n.getStringValue() as any ; },
        "subscriberCarrier": n => { managedDevice.subscriberCarrier = n.getStringValue() as any ; },
        "totalStorageSpaceInBytes": n => { managedDevice.totalStorageSpaceInBytes = n.getNumberValue() as any ; },
        "udid": n => { managedDevice.udid = n.getStringValue() as any ; },
        "userDisplayName": n => { managedDevice.userDisplayName = n.getStringValue() as any ; },
        "userId": n => { managedDevice.userId = n.getStringValue() as any ; },
        "userPrincipalName": n => { managedDevice.userPrincipalName = n.getStringValue() as any ; },
        "users": n => { managedDevice.users = n.getCollectionOfObjectValuesFromMethod(deserializeIntoUser) as any ; },
        "usersLoggedOn": n => { managedDevice.usersLoggedOn = n.getCollectionOfObjectValuesFromMethod(deserializeIntoLoggedOnUser) as any ; },
        "wiFiMacAddress": n => { managedDevice.wiFiMacAddress = n.getStringValue() as any ; },
        "windowsActiveMalwareCount": n => { managedDevice.windowsActiveMalwareCount = n.getNumberValue() as any ; },
        "windowsProtectionState": n => { managedDevice.windowsProtectionState = n.getObject(deserializeIntoWindowsProtectionState) as any ; },
        "windowsRemediatedMalwareCount": n => { managedDevice.windowsRemediatedMalwareCount = n.getNumberValue() as any ; },
    }
}
