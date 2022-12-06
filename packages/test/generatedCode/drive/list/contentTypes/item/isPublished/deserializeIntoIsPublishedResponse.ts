import {IsPublishedResponse} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIsPublishedResponse(isPublishedResponse: IsPublishedResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "value": n => { isPublishedResponse.value = n.getBooleanValue() as any ; },
    }
}
