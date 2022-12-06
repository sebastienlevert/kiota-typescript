import {deserializeIntoApplePushNotificationCertificate} from './deserializeIntoApplePushNotificationCertificate';
import {deserializeIntoAuditEvent} from './deserializeIntoAuditEvent';
import {deserializeIntoComplianceManagementPartner} from './deserializeIntoComplianceManagementPartner';
import {deserializeIntoDetectedApp} from './deserializeIntoDetectedApp';
import {deserializeIntoDeviceAndAppManagementRoleAssignment} from './deserializeIntoDeviceAndAppManagementRoleAssignment';
import {deserializeIntoDeviceCategory} from './deserializeIntoDeviceCategory';
import {deserializeIntoDeviceCompliancePolicy} from './deserializeIntoDeviceCompliancePolicy';
import {deserializeIntoDeviceCompliancePolicyDeviceStateSummary} from './deserializeIntoDeviceCompliancePolicyDeviceStateSummary';
import {deserializeIntoDeviceCompliancePolicySettingStateSummary} from './deserializeIntoDeviceCompliancePolicySettingStateSummary';
import {deserializeIntoDeviceConfiguration} from './deserializeIntoDeviceConfiguration';
import {deserializeIntoDeviceConfigurationDeviceStateSummary} from './deserializeIntoDeviceConfigurationDeviceStateSummary';
import {deserializeIntoDeviceEnrollmentConfiguration} from './deserializeIntoDeviceEnrollmentConfiguration';
import {deserializeIntoDeviceManagementExchangeConnector} from './deserializeIntoDeviceManagementExchangeConnector';
import {deserializeIntoDeviceManagementPartner} from './deserializeIntoDeviceManagementPartner';
import {deserializeIntoDeviceManagementReports} from './deserializeIntoDeviceManagementReports';
import {deserializeIntoDeviceManagementSettings} from './deserializeIntoDeviceManagementSettings';
import {deserializeIntoDeviceManagementTroubleshootingEvent} from './deserializeIntoDeviceManagementTroubleshootingEvent';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoImportedWindowsAutopilotDeviceIdentity} from './deserializeIntoImportedWindowsAutopilotDeviceIdentity';
import {deserializeIntoIntuneBrand} from './deserializeIntoIntuneBrand';
import {deserializeIntoIosUpdateDeviceStatus} from './deserializeIntoIosUpdateDeviceStatus';
import {deserializeIntoManagedDevice} from './deserializeIntoManagedDevice';
import {deserializeIntoManagedDeviceOverview} from './deserializeIntoManagedDeviceOverview';
import {deserializeIntoMobileThreatDefenseConnector} from './deserializeIntoMobileThreatDefenseConnector';
import {deserializeIntoNotificationMessageTemplate} from './deserializeIntoNotificationMessageTemplate';
import {deserializeIntoOnPremisesConditionalAccessSettings} from './deserializeIntoOnPremisesConditionalAccessSettings';
import {deserializeIntoRemoteAssistancePartner} from './deserializeIntoRemoteAssistancePartner';
import {deserializeIntoResourceOperation} from './deserializeIntoResourceOperation';
import {deserializeIntoRoleDefinition} from './deserializeIntoRoleDefinition';
import {deserializeIntoSoftwareUpdateStatusSummary} from './deserializeIntoSoftwareUpdateStatusSummary';
import {deserializeIntoTelecomExpenseManagementPartner} from './deserializeIntoTelecomExpenseManagementPartner';
import {deserializeIntoTermsAndConditions} from './deserializeIntoTermsAndConditions';
import {deserializeIntoWindowsAutopilotDeviceIdentity} from './deserializeIntoWindowsAutopilotDeviceIdentity';
import {deserializeIntoWindowsInformationProtectionAppLearningSummary} from './deserializeIntoWindowsInformationProtectionAppLearningSummary';
import {deserializeIntoWindowsInformationProtectionNetworkLearningSummary} from './deserializeIntoWindowsInformationProtectionNetworkLearningSummary';
import {DeviceManagementSubscriptionState} from './deviceManagementSubscriptionState';
import {DeviceManagement} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeviceManagement(deviceManagement: DeviceManagement | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(deviceManagement),
        "applePushNotificationCertificate": n => { deviceManagement.applePushNotificationCertificate = n.getObject(deserializeIntoApplePushNotificationCertificate) as any ; },
        "auditEvents": n => { deviceManagement.auditEvents = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAuditEvent) as any ; },
        "complianceManagementPartners": n => { deviceManagement.complianceManagementPartners = n.getCollectionOfObjectValuesFromMethod(deserializeIntoComplianceManagementPartner) as any ; },
        "conditionalAccessSettings": n => { deviceManagement.conditionalAccessSettings = n.getObject(deserializeIntoOnPremisesConditionalAccessSettings) as any ; },
        "detectedApps": n => { deviceManagement.detectedApps = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDetectedApp) as any ; },
        "deviceCategories": n => { deviceManagement.deviceCategories = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDeviceCategory) as any ; },
        "deviceCompliancePolicies": n => { deviceManagement.deviceCompliancePolicies = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDeviceCompliancePolicy) as any ; },
        "deviceCompliancePolicyDeviceStateSummary": n => { deviceManagement.deviceCompliancePolicyDeviceStateSummary = n.getObject(deserializeIntoDeviceCompliancePolicyDeviceStateSummary) as any ; },
        "deviceCompliancePolicySettingStateSummaries": n => { deviceManagement.deviceCompliancePolicySettingStateSummaries = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDeviceCompliancePolicySettingStateSummary) as any ; },
        "deviceConfigurationDeviceStateSummaries": n => { deviceManagement.deviceConfigurationDeviceStateSummaries = n.getObject(deserializeIntoDeviceConfigurationDeviceStateSummary) as any ; },
        "deviceConfigurations": n => { deviceManagement.deviceConfigurations = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDeviceConfiguration) as any ; },
        "deviceEnrollmentConfigurations": n => { deviceManagement.deviceEnrollmentConfigurations = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDeviceEnrollmentConfiguration) as any ; },
        "deviceManagementPartners": n => { deviceManagement.deviceManagementPartners = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDeviceManagementPartner) as any ; },
        "exchangeConnectors": n => { deviceManagement.exchangeConnectors = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDeviceManagementExchangeConnector) as any ; },
        "importedWindowsAutopilotDeviceIdentities": n => { deviceManagement.importedWindowsAutopilotDeviceIdentities = n.getCollectionOfObjectValuesFromMethod(deserializeIntoImportedWindowsAutopilotDeviceIdentity) as any ; },
        "intuneAccountId": n => { deviceManagement.intuneAccountId = n.getStringValue() as any ; },
        "intuneBrand": n => { deviceManagement.intuneBrand = n.getObject(deserializeIntoIntuneBrand) as any ; },
        "iosUpdateStatuses": n => { deviceManagement.iosUpdateStatuses = n.getCollectionOfObjectValuesFromMethod(deserializeIntoIosUpdateDeviceStatus) as any ; },
        "managedDeviceOverview": n => { deviceManagement.managedDeviceOverview = n.getObject(deserializeIntoManagedDeviceOverview) as any ; },
        "managedDevices": n => { deviceManagement.managedDevices = n.getCollectionOfObjectValuesFromMethod(deserializeIntoManagedDevice) as any ; },
        "mobileThreatDefenseConnectors": n => { deviceManagement.mobileThreatDefenseConnectors = n.getCollectionOfObjectValuesFromMethod(deserializeIntoMobileThreatDefenseConnector) as any ; },
        "notificationMessageTemplates": n => { deviceManagement.notificationMessageTemplates = n.getCollectionOfObjectValuesFromMethod(deserializeIntoNotificationMessageTemplate) as any ; },
        "remoteAssistancePartners": n => { deviceManagement.remoteAssistancePartners = n.getCollectionOfObjectValuesFromMethod(deserializeIntoRemoteAssistancePartner) as any ; },
        "reports": n => { deviceManagement.reports = n.getObject(deserializeIntoDeviceManagementReports) as any ; },
        "resourceOperations": n => { deviceManagement.resourceOperations = n.getCollectionOfObjectValuesFromMethod(deserializeIntoResourceOperation) as any ; },
        "roleAssignments": n => { deviceManagement.roleAssignments = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDeviceAndAppManagementRoleAssignment) as any ; },
        "roleDefinitions": n => { deviceManagement.roleDefinitions = n.getCollectionOfObjectValuesFromMethod(deserializeIntoRoleDefinition) as any ; },
        "settings": n => { deviceManagement.settings = n.getObject(deserializeIntoDeviceManagementSettings) as any ; },
        "softwareUpdateStatusSummary": n => { deviceManagement.softwareUpdateStatusSummary = n.getObject(deserializeIntoSoftwareUpdateStatusSummary) as any ; },
        "subscriptionState": n => { deviceManagement.subscriptionState = n.getEnumValue<DeviceManagementSubscriptionState>(DeviceManagementSubscriptionState) as any ; },
        "telecomExpenseManagementPartners": n => { deviceManagement.telecomExpenseManagementPartners = n.getCollectionOfObjectValuesFromMethod(deserializeIntoTelecomExpenseManagementPartner) as any ; },
        "termsAndConditions": n => { deviceManagement.termsAndConditions = n.getCollectionOfObjectValuesFromMethod(deserializeIntoTermsAndConditions) as any ; },
        "troubleshootingEvents": n => { deviceManagement.troubleshootingEvents = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDeviceManagementTroubleshootingEvent) as any ; },
        "windowsAutopilotDeviceIdentities": n => { deviceManagement.windowsAutopilotDeviceIdentities = n.getCollectionOfObjectValuesFromMethod(deserializeIntoWindowsAutopilotDeviceIdentity) as any ; },
        "windowsInformationProtectionAppLearningSummaries": n => { deviceManagement.windowsInformationProtectionAppLearningSummaries = n.getCollectionOfObjectValuesFromMethod(deserializeIntoWindowsInformationProtectionAppLearningSummary) as any ; },
        "windowsInformationProtectionNetworkLearningSummaries": n => { deviceManagement.windowsInformationProtectionNetworkLearningSummaries = n.getCollectionOfObjectValuesFromMethod(deserializeIntoWindowsInformationProtectionNetworkLearningSummary) as any ; },
    }
}
