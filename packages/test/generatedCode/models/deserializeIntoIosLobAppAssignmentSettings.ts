import {deserializeIntoMobileAppAssignmentSettings} from './deserializeIntoMobileAppAssignmentSettings';
import {IosLobAppAssignmentSettings} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIosLobAppAssignmentSettings(iosLobAppAssignmentSettings: IosLobAppAssignmentSettings | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoMobileAppAssignmentSettings(iosLobAppAssignmentSettings),
        "isRemovable": n => { iosLobAppAssignmentSettings.isRemovable = n.getBooleanValue() as any ; },
        "uninstallOnDeviceRemoval": n => { iosLobAppAssignmentSettings.uninstallOnDeviceRemoval = n.getBooleanValue() as any ; },
        "vpnConfigurationId": n => { iosLobAppAssignmentSettings.vpnConfigurationId = n.getStringValue() as any ; },
    }
}
