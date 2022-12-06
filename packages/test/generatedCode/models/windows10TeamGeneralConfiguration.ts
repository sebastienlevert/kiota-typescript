import {DeviceConfiguration} from './index';
import {MiracastChannel} from './miracastChannel';
import {WelcomeScreenMeetingInformation} from './welcomeScreenMeetingInformation';
import {Parsable, TimeOnly} from '@microsoft/kiota-abstractions';

export interface Windows10TeamGeneralConfiguration extends DeviceConfiguration, Partial<Parsable> {
    /** Indicates whether or not to Block Azure Operational Insights. */
    azureOperationalInsightsBlockTelemetry?: boolean;
    /** The Azure Operational Insights workspace id. */
    azureOperationalInsightsWorkspaceId?: string;
    /** The Azure Operational Insights Workspace key. */
    azureOperationalInsightsWorkspaceKey?: string;
    /** Specifies whether to automatically launch the Connect app whenever a projection is initiated. */
    connectAppBlockAutoLaunch?: boolean;
    /** Indicates whether or not to Block setting a maintenance window for device updates. */
    maintenanceWindowBlocked?: boolean;
    /** Maintenance window duration for device updates. Valid values 0 to 5 */
    maintenanceWindowDurationInHours?: number;
    /** Maintenance window start time for device updates. */
    maintenanceWindowStartTime?: TimeOnly;
    /** Indicates whether or not to Block wireless projection. */
    miracastBlocked?: boolean;
    /** Possible values for Miracast channel. */
    miracastChannel?: MiracastChannel;
    /** Indicates whether or not to require a pin for wireless projection. */
    miracastRequirePin?: boolean;
    /** Specifies whether to disable the 'My meetings and files' feature in the Start menu, which shows the signed-in user's meetings and files from Office 365. */
    settingsBlockMyMeetingsAndFiles?: boolean;
    /** Specifies whether to allow the ability to resume a session when the session times out. */
    settingsBlockSessionResume?: boolean;
    /** Specifies whether to disable auto-populating of the sign-in dialog with invitees from scheduled meetings. */
    settingsBlockSigninSuggestions?: boolean;
    /** Specifies the default volume value for a new session. Permitted values are 0-100. The default is 45. Valid values 0 to 100 */
    settingsDefaultVolume?: number;
    /** Specifies the number of minutes until the Hub screen turns off. */
    settingsScreenTimeoutInMinutes?: number;
    /** Specifies the number of minutes until the session times out. */
    settingsSessionTimeoutInMinutes?: number;
    /** Specifies the number of minutes until the Hub enters sleep mode. */
    settingsSleepTimeoutInMinutes?: number;
    /** The welcome screen background image URL. The URL must use the HTTPS protocol and return a PNG image. */
    welcomeScreenBackgroundImageUrl?: string;
    /** Indicates whether or not to Block the welcome screen from waking up automatically when someone enters the room. */
    welcomeScreenBlockAutomaticWakeUp?: boolean;
    /** Possible values for welcome screen meeting information. */
    welcomeScreenMeetingInformation?: WelcomeScreenMeetingInformation;
}
