import {MobileAppIdentifier} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMobileAppIdentifier(mobileAppIdentifier: MobileAppIdentifier | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { mobileAppIdentifier.odataType = n.getStringValue() as any ; },
    }
}
