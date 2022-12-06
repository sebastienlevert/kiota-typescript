import {DeviceManagementSubscriptionState} from './deviceManagementSubscriptionState';
import {ApplePushNotificationCertificate, AuditEvent, ComplianceManagementPartner, DetectedApp, DeviceAndAppManagementRoleAssignment, DeviceCategory, DeviceCompliancePolicy, DeviceCompliancePolicyDeviceStateSummary, DeviceCompliancePolicySettingStateSummary, DeviceConfiguration, DeviceConfigurationDeviceStateSummary, DeviceEnrollmentConfiguration, DeviceManagementExchangeConnector, DeviceManagementPartner, DeviceManagementReports, DeviceManagementSettings, DeviceManagementTroubleshootingEvent, Entity, ImportedWindowsAutopilotDeviceIdentity, IntuneBrand, IosUpdateDeviceStatus, ManagedDevice, ManagedDeviceOverview, MobileThreatDefenseConnector, NotificationMessageTemplate, OnPremisesConditionalAccessSettings, RemoteAssistancePartner, ResourceOperation, RoleDefinition, SoftwareUpdateStatusSummary, TelecomExpenseManagementPartner, TermsAndConditions, WindowsAutopilotDeviceIdentity, WindowsInformationProtectionAppLearningSummary, WindowsInformationProtectionNetworkLearningSummary} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceManagement extends Entity, Partial<Parsable> {
    /** Apple push notification certificate. */
    applePushNotificationCertificate?: ApplePushNotificationCertificate;
    /** The Audit Events */
    auditEvents?: AuditEvent[];
    /** The list of Compliance Management Partners configured by the tenant. */
    complianceManagementPartners?: ComplianceManagementPartner[];
    /** The Exchange on premises conditional access settings. On premises conditional access will require devices to be both enrolled and compliant for mail access */
    conditionalAccessSettings?: OnPremisesConditionalAccessSettings;
    /** The list of detected apps associated with a device. */
    detectedApps?: DetectedApp[];
    /** The list of device categories with the tenant. */
    deviceCategories?: DeviceCategory[];
    /** The device compliance policies. */
    deviceCompliancePolicies?: DeviceCompliancePolicy[];
    /** The device compliance state summary for this account. */
    deviceCompliancePolicyDeviceStateSummary?: DeviceCompliancePolicyDeviceStateSummary;
    /** The summary states of compliance policy settings for this account. */
    deviceCompliancePolicySettingStateSummaries?: DeviceCompliancePolicySettingStateSummary[];
    /** The device configuration device state summary for this account. */
    deviceConfigurationDeviceStateSummaries?: DeviceConfigurationDeviceStateSummary;
    /** The device configurations. */
    deviceConfigurations?: DeviceConfiguration[];
    /** The list of device enrollment configurations */
    deviceEnrollmentConfigurations?: DeviceEnrollmentConfiguration[];
    /** The list of Device Management Partners configured by the tenant. */
    deviceManagementPartners?: DeviceManagementPartner[];
    /** The list of Exchange Connectors configured by the tenant. */
    exchangeConnectors?: DeviceManagementExchangeConnector[];
    /** Collection of imported Windows autopilot devices. */
    importedWindowsAutopilotDeviceIdentities?: ImportedWindowsAutopilotDeviceIdentity[];
    /** Intune Account Id for given tenant */
    intuneAccountId?: string;
    /** intuneBrand contains data which is used in customizing the appearance of the Company Portal applications as well as the end user web portal. */
    intuneBrand?: IntuneBrand;
    /** The IOS software update installation statuses for this account. */
    iosUpdateStatuses?: IosUpdateDeviceStatus[];
    /** Device overview */
    managedDeviceOverview?: ManagedDeviceOverview;
    /** The list of managed devices. */
    managedDevices?: ManagedDevice[];
    /** The list of Mobile threat Defense connectors configured by the tenant. */
    mobileThreatDefenseConnectors?: MobileThreatDefenseConnector[];
    /** The Notification Message Templates. */
    notificationMessageTemplates?: NotificationMessageTemplate[];
    /** The remote assist partners. */
    remoteAssistancePartners?: RemoteAssistancePartner[];
    /** Reports singleton */
    reports?: DeviceManagementReports;
    /** The Resource Operations. */
    resourceOperations?: ResourceOperation[];
    /** The Role Assignments. */
    roleAssignments?: DeviceAndAppManagementRoleAssignment[];
    /** The Role Definitions. */
    roleDefinitions?: RoleDefinition[];
    /** Account level settings. */
    settings?: DeviceManagementSettings;
    /** The software update status summary. */
    softwareUpdateStatusSummary?: SoftwareUpdateStatusSummary;
    /** Tenant mobile device management subscription state. */
    subscriptionState?: DeviceManagementSubscriptionState;
    /** The telecom expense management partners. */
    telecomExpenseManagementPartners?: TelecomExpenseManagementPartner[];
    /** The terms and conditions associated with device management of the company. */
    termsAndConditions?: TermsAndConditions[];
    /** The list of troubleshooting events for the tenant. */
    troubleshootingEvents?: DeviceManagementTroubleshootingEvent[];
    /** The Windows autopilot device identities contained collection. */
    windowsAutopilotDeviceIdentities?: WindowsAutopilotDeviceIdentity[];
    /** The windows information protection app learning summaries. */
    windowsInformationProtectionAppLearningSummaries?: WindowsInformationProtectionAppLearningSummary[];
    /** The windows information protection network learning summaries. */
    windowsInformationProtectionNetworkLearningSummaries?: WindowsInformationProtectionNetworkLearningSummary[];
}
