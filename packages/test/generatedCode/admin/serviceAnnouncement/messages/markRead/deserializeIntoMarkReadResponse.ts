import {MarkReadResponse} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMarkReadResponse(markReadResponse: MarkReadResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "value": n => { markReadResponse.value = n.getBooleanValue() as any ; },
    }
}
