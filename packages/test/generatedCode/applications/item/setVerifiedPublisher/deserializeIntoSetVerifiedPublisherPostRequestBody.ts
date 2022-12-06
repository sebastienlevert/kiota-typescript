import {SetVerifiedPublisherPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSetVerifiedPublisherPostRequestBody(setVerifiedPublisherPostRequestBody: SetVerifiedPublisherPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "verifiedPublisherId": n => { setVerifiedPublisherPostRequestBody.verifiedPublisherId = n.getStringValue() as any ; },
    }
}
