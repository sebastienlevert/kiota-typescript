import {AutomaticUpdateMode} from './automaticUpdateMode';
import {AutoRestartNotificationDismissalMethod} from './autoRestartNotificationDismissalMethod';
import {deserializeIntoDeviceConfiguration} from './deserializeIntoDeviceConfiguration';
import {deserializeIntoWindowsUpdateInstallScheduleType} from './deserializeIntoWindowsUpdateInstallScheduleType';
import {Enablement} from './enablement';
import {WindowsUpdateForBusinessConfiguration} from './index';
import {PrereleaseFeatures} from './prereleaseFeatures';
import {WindowsDeliveryOptimizationMode} from './windowsDeliveryOptimizationMode';
import {WindowsUpdateForBusinessUpdateWeeks} from './windowsUpdateForBusinessUpdateWeeks';
import {WindowsUpdateNotificationDisplayOption} from './windowsUpdateNotificationDisplayOption';
import {WindowsUpdateType} from './windowsUpdateType';
import {DateOnly, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsUpdateForBusinessConfiguration(windowsUpdateForBusinessConfiguration: WindowsUpdateForBusinessConfiguration | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceConfiguration(windowsUpdateForBusinessConfiguration),
        "allowWindows11Upgrade": n => { windowsUpdateForBusinessConfiguration.allowWindows11Upgrade = n.getBooleanValue() as any ; },
        "automaticUpdateMode": n => { windowsUpdateForBusinessConfiguration.automaticUpdateMode = n.getEnumValue<AutomaticUpdateMode>(AutomaticUpdateMode) as any ; },
        "autoRestartNotificationDismissal": n => { windowsUpdateForBusinessConfiguration.autoRestartNotificationDismissal = n.getEnumValue<AutoRestartNotificationDismissalMethod>(AutoRestartNotificationDismissalMethod) as any ; },
        "businessReadyUpdatesOnly": n => { windowsUpdateForBusinessConfiguration.businessReadyUpdatesOnly = n.getEnumValue<WindowsUpdateType>(WindowsUpdateType) as any ; },
        "deadlineForFeatureUpdatesInDays": n => { windowsUpdateForBusinessConfiguration.deadlineForFeatureUpdatesInDays = n.getNumberValue() as any ; },
        "deadlineForQualityUpdatesInDays": n => { windowsUpdateForBusinessConfiguration.deadlineForQualityUpdatesInDays = n.getNumberValue() as any ; },
        "deadlineGracePeriodInDays": n => { windowsUpdateForBusinessConfiguration.deadlineGracePeriodInDays = n.getNumberValue() as any ; },
        "deliveryOptimizationMode": n => { windowsUpdateForBusinessConfiguration.deliveryOptimizationMode = n.getEnumValue<WindowsDeliveryOptimizationMode>(WindowsDeliveryOptimizationMode) as any ; },
        "driversExcluded": n => { windowsUpdateForBusinessConfiguration.driversExcluded = n.getBooleanValue() as any ; },
        "engagedRestartDeadlineInDays": n => { windowsUpdateForBusinessConfiguration.engagedRestartDeadlineInDays = n.getNumberValue() as any ; },
        "engagedRestartSnoozeScheduleInDays": n => { windowsUpdateForBusinessConfiguration.engagedRestartSnoozeScheduleInDays = n.getNumberValue() as any ; },
        "engagedRestartTransitionScheduleInDays": n => { windowsUpdateForBusinessConfiguration.engagedRestartTransitionScheduleInDays = n.getNumberValue() as any ; },
        "featureUpdatesDeferralPeriodInDays": n => { windowsUpdateForBusinessConfiguration.featureUpdatesDeferralPeriodInDays = n.getNumberValue() as any ; },
        "featureUpdatesPaused": n => { windowsUpdateForBusinessConfiguration.featureUpdatesPaused = n.getBooleanValue() as any ; },
        "featureUpdatesPauseExpiryDateTime": n => { windowsUpdateForBusinessConfiguration.featureUpdatesPauseExpiryDateTime = n.getDateValue() as any ; },
        "featureUpdatesPauseStartDate": n => { windowsUpdateForBusinessConfiguration.featureUpdatesPauseStartDate = n.getDateOnlyValue() as any ; },
        "featureUpdatesRollbackStartDateTime": n => { windowsUpdateForBusinessConfiguration.featureUpdatesRollbackStartDateTime = n.getDateValue() as any ; },
        "featureUpdatesRollbackWindowInDays": n => { windowsUpdateForBusinessConfiguration.featureUpdatesRollbackWindowInDays = n.getNumberValue() as any ; },
        "featureUpdatesWillBeRolledBack": n => { windowsUpdateForBusinessConfiguration.featureUpdatesWillBeRolledBack = n.getBooleanValue() as any ; },
        "installationSchedule": n => { windowsUpdateForBusinessConfiguration.installationSchedule = n.getObject(deserializeIntoWindowsUpdateInstallScheduleType) as any ; },
        "microsoftUpdateServiceAllowed": n => { windowsUpdateForBusinessConfiguration.microsoftUpdateServiceAllowed = n.getBooleanValue() as any ; },
        "postponeRebootUntilAfterDeadline": n => { windowsUpdateForBusinessConfiguration.postponeRebootUntilAfterDeadline = n.getBooleanValue() as any ; },
        "prereleaseFeatures": n => { windowsUpdateForBusinessConfiguration.prereleaseFeatures = n.getEnumValue<PrereleaseFeatures>(PrereleaseFeatures) as any ; },
        "qualityUpdatesDeferralPeriodInDays": n => { windowsUpdateForBusinessConfiguration.qualityUpdatesDeferralPeriodInDays = n.getNumberValue() as any ; },
        "qualityUpdatesPaused": n => { windowsUpdateForBusinessConfiguration.qualityUpdatesPaused = n.getBooleanValue() as any ; },
        "qualityUpdatesPauseExpiryDateTime": n => { windowsUpdateForBusinessConfiguration.qualityUpdatesPauseExpiryDateTime = n.getDateValue() as any ; },
        "qualityUpdatesPauseStartDate": n => { windowsUpdateForBusinessConfiguration.qualityUpdatesPauseStartDate = n.getDateOnlyValue() as any ; },
        "qualityUpdatesRollbackStartDateTime": n => { windowsUpdateForBusinessConfiguration.qualityUpdatesRollbackStartDateTime = n.getDateValue() as any ; },
        "qualityUpdatesWillBeRolledBack": n => { windowsUpdateForBusinessConfiguration.qualityUpdatesWillBeRolledBack = n.getBooleanValue() as any ; },
        "scheduleImminentRestartWarningInMinutes": n => { windowsUpdateForBusinessConfiguration.scheduleImminentRestartWarningInMinutes = n.getNumberValue() as any ; },
        "scheduleRestartWarningInHours": n => { windowsUpdateForBusinessConfiguration.scheduleRestartWarningInHours = n.getNumberValue() as any ; },
        "skipChecksBeforeRestart": n => { windowsUpdateForBusinessConfiguration.skipChecksBeforeRestart = n.getBooleanValue() as any ; },
        "updateNotificationLevel": n => { windowsUpdateForBusinessConfiguration.updateNotificationLevel = n.getEnumValue<WindowsUpdateNotificationDisplayOption>(WindowsUpdateNotificationDisplayOption) as any ; },
        "updateWeeks": n => { windowsUpdateForBusinessConfiguration.updateWeeks = n.getEnumValue<WindowsUpdateForBusinessUpdateWeeks>(WindowsUpdateForBusinessUpdateWeeks) as any ; },
        "userPauseAccess": n => { windowsUpdateForBusinessConfiguration.userPauseAccess = n.getEnumValue<Enablement>(Enablement) as any ; },
        "userWindowsUpdateScanAccess": n => { windowsUpdateForBusinessConfiguration.userWindowsUpdateScanAccess = n.getEnumValue<Enablement>(Enablement) as any ; },
    }
}
