import {deserializeIntoMobileAppAssignmentSettings} from './deserializeIntoMobileAppAssignmentSettings';
import {IosVppAppAssignmentSettings} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIosVppAppAssignmentSettings(iosVppAppAssignmentSettings: IosVppAppAssignmentSettings | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoMobileAppAssignmentSettings(iosVppAppAssignmentSettings),
        "useDeviceLicensing": n => { iosVppAppAssignmentSettings.useDeviceLicensing = n.getBooleanValue() as any ; },
        "vpnConfigurationId": n => { iosVppAppAssignmentSettings.vpnConfigurationId = n.getStringValue() as any ; },
    }
}
