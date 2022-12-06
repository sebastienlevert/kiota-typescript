import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Win32LobAppRestartSettings extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The number of minutes before the restart time to display the countdown dialog for pending restarts. */
    countdownDisplayBeforeRestartInMinutes?: number;
    /** The number of minutes to wait before restarting the device after an app installation. */
    gracePeriodInMinutes?: number;
    /** The OdataType property */
    odataType?: string;
    /** The number of minutes to snooze the restart notification dialog when the snooze button is selected. */
    restartNotificationSnoozeDurationInMinutes?: number;
}
