import {EventMessageDetail} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEventMessageDetail(eventMessageDetail: EventMessageDetail | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
    }
}
