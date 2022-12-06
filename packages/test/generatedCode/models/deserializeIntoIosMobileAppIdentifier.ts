import {deserializeIntoMobileAppIdentifier} from './deserializeIntoMobileAppIdentifier';
import {IosMobileAppIdentifier} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIosMobileAppIdentifier(iosMobileAppIdentifier: IosMobileAppIdentifier | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoMobileAppIdentifier(iosMobileAppIdentifier),
        "bundleId": n => { iosMobileAppIdentifier.bundleId = n.getStringValue() as any ; },
    }
}
