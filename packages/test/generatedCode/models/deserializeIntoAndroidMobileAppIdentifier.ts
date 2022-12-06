import {deserializeIntoMobileAppIdentifier} from './deserializeIntoMobileAppIdentifier';
import {AndroidMobileAppIdentifier} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAndroidMobileAppIdentifier(androidMobileAppIdentifier: AndroidMobileAppIdentifier | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoMobileAppIdentifier(androidMobileAppIdentifier),
        "packageId": n => { androidMobileAppIdentifier.packageId = n.getStringValue() as any ; },
    }
}
