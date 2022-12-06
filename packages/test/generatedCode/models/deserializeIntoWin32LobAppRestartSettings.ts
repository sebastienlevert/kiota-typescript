import {Win32LobAppRestartSettings} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWin32LobAppRestartSettings(win32LobAppRestartSettings: Win32LobAppRestartSettings | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "countdownDisplayBeforeRestartInMinutes": n => { win32LobAppRestartSettings.countdownDisplayBeforeRestartInMinutes = n.getNumberValue() as any ; },
        "gracePeriodInMinutes": n => { win32LobAppRestartSettings.gracePeriodInMinutes = n.getNumberValue() as any ; },
        "@odata.type": n => { win32LobAppRestartSettings.odataType = n.getStringValue() as any ; },
        "restartNotificationSnoozeDurationInMinutes": n => { win32LobAppRestartSettings.restartNotificationSnoozeDurationInMinutes = n.getNumberValue() as any ; },
    }
}
