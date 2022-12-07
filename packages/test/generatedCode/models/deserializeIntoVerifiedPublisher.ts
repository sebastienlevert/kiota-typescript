import {VerifiedPublisher} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoVerifiedPublisher(verifiedPublisher: VerifiedPublisher | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "addedDateTime": n => { verifiedPublisher.addedDateTime = n.getDateValue() as any ; },
        "displayName": n => { verifiedPublisher.displayName = n.getStringValue() as any ; },
        "verifiedPublisherId": n => { verifiedPublisher.verifiedPublisherId = n.getStringValue() as any ; },
    }
}
