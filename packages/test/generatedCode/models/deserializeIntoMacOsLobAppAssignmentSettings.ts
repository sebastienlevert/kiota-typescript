import {deserializeIntoMobileAppAssignmentSettings} from './deserializeIntoMobileAppAssignmentSettings';
import {MacOsLobAppAssignmentSettings} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMacOsLobAppAssignmentSettings(macOsLobAppAssignmentSettings: MacOsLobAppAssignmentSettings | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoMobileAppAssignmentSettings(macOsLobAppAssignmentSettings),
        "uninstallOnDeviceRemoval": n => { macOsLobAppAssignmentSettings.uninstallOnDeviceRemoval = n.getBooleanValue() as any ; },
    }
}
