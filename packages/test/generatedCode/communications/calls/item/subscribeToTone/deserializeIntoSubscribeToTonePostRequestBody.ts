import {SubscribeToTonePostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSubscribeToTonePostRequestBody(subscribeToTonePostRequestBody: SubscribeToTonePostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "clientContext": n => { subscribeToTonePostRequestBody.clientContext = n.getStringValue() as any ; },
    }
}
