import {deserializeIntoDeviceConfiguration} from './deserializeIntoDeviceConfiguration';
import {Windows10TeamGeneralConfiguration} from './index';
import {MiracastChannel} from './miracastChannel';
import {WelcomeScreenMeetingInformation} from './welcomeScreenMeetingInformation';
import {Parsable, ParseNode, SerializationWriter, TimeOnly} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindows10TeamGeneralConfiguration(windows10TeamGeneralConfiguration: Windows10TeamGeneralConfiguration | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceConfiguration(windows10TeamGeneralConfiguration),
        "azureOperationalInsightsBlockTelemetry": n => { windows10TeamGeneralConfiguration.azureOperationalInsightsBlockTelemetry = n.getBooleanValue() as any ; },
        "azureOperationalInsightsWorkspaceId": n => { windows10TeamGeneralConfiguration.azureOperationalInsightsWorkspaceId = n.getStringValue() as any ; },
        "azureOperationalInsightsWorkspaceKey": n => { windows10TeamGeneralConfiguration.azureOperationalInsightsWorkspaceKey = n.getStringValue() as any ; },
        "connectAppBlockAutoLaunch": n => { windows10TeamGeneralConfiguration.connectAppBlockAutoLaunch = n.getBooleanValue() as any ; },
        "maintenanceWindowBlocked": n => { windows10TeamGeneralConfiguration.maintenanceWindowBlocked = n.getBooleanValue() as any ; },
        "maintenanceWindowDurationInHours": n => { windows10TeamGeneralConfiguration.maintenanceWindowDurationInHours = n.getNumberValue() as any ; },
        "maintenanceWindowStartTime": n => { windows10TeamGeneralConfiguration.maintenanceWindowStartTime = n.getTimeOnlyValue() as any ; },
        "miracastBlocked": n => { windows10TeamGeneralConfiguration.miracastBlocked = n.getBooleanValue() as any ; },
        "miracastChannel": n => { windows10TeamGeneralConfiguration.miracastChannel = n.getEnumValue<MiracastChannel>(MiracastChannel) as any ; },
        "miracastRequirePin": n => { windows10TeamGeneralConfiguration.miracastRequirePin = n.getBooleanValue() as any ; },
        "settingsBlockMyMeetingsAndFiles": n => { windows10TeamGeneralConfiguration.settingsBlockMyMeetingsAndFiles = n.getBooleanValue() as any ; },
        "settingsBlockSessionResume": n => { windows10TeamGeneralConfiguration.settingsBlockSessionResume = n.getBooleanValue() as any ; },
        "settingsBlockSigninSuggestions": n => { windows10TeamGeneralConfiguration.settingsBlockSigninSuggestions = n.getBooleanValue() as any ; },
        "settingsDefaultVolume": n => { windows10TeamGeneralConfiguration.settingsDefaultVolume = n.getNumberValue() as any ; },
        "settingsScreenTimeoutInMinutes": n => { windows10TeamGeneralConfiguration.settingsScreenTimeoutInMinutes = n.getNumberValue() as any ; },
        "settingsSessionTimeoutInMinutes": n => { windows10TeamGeneralConfiguration.settingsSessionTimeoutInMinutes = n.getNumberValue() as any ; },
        "settingsSleepTimeoutInMinutes": n => { windows10TeamGeneralConfiguration.settingsSleepTimeoutInMinutes = n.getNumberValue() as any ; },
        "welcomeScreenBackgroundImageUrl": n => { windows10TeamGeneralConfiguration.welcomeScreenBackgroundImageUrl = n.getStringValue() as any ; },
        "welcomeScreenBlockAutomaticWakeUp": n => { windows10TeamGeneralConfiguration.welcomeScreenBlockAutomaticWakeUp = n.getBooleanValue() as any ; },
        "welcomeScreenMeetingInformation": n => { windows10TeamGeneralConfiguration.welcomeScreenMeetingInformation = n.getEnumValue<WelcomeScreenMeetingInformation>(WelcomeScreenMeetingInformation) as any ; },
    }
}
