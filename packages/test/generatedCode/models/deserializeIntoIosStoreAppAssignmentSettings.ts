import {deserializeIntoMobileAppAssignmentSettings} from './deserializeIntoMobileAppAssignmentSettings';
import {IosStoreAppAssignmentSettings} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIosStoreAppAssignmentSettings(iosStoreAppAssignmentSettings: IosStoreAppAssignmentSettings | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoMobileAppAssignmentSettings(iosStoreAppAssignmentSettings),
        "vpnConfigurationId": n => { iosStoreAppAssignmentSettings.vpnConfigurationId = n.getStringValue() as any ; },
    }
}
