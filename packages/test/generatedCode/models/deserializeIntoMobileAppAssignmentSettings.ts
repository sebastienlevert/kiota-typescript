import {MobileAppAssignmentSettings} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMobileAppAssignmentSettings(mobileAppAssignmentSettings: MobileAppAssignmentSettings | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { mobileAppAssignmentSettings.odataType = n.getStringValue() as any ; },
    }
}
