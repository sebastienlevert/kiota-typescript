import {MarkUnreadResponse} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMarkUnreadResponse(markUnreadResponse: MarkUnreadResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "value": n => { markUnreadResponse.value = n.getBooleanValue() as any ; },
    }
}
