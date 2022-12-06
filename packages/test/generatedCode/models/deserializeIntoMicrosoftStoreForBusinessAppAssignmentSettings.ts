import {deserializeIntoMobileAppAssignmentSettings} from './deserializeIntoMobileAppAssignmentSettings';
import {MicrosoftStoreForBusinessAppAssignmentSettings} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMicrosoftStoreForBusinessAppAssignmentSettings(microsoftStoreForBusinessAppAssignmentSettings: MicrosoftStoreForBusinessAppAssignmentSettings | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoMobileAppAssignmentSettings(microsoftStoreForBusinessAppAssignmentSettings),
        "useDeviceContext": n => { microsoftStoreForBusinessAppAssignmentSettings.useDeviceContext = n.getBooleanValue() as any ; },
    }
}
