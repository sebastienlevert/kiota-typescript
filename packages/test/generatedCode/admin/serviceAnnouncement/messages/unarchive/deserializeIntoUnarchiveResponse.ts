import {UnarchiveResponse} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUnarchiveResponse(unarchiveResponse: UnarchiveResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "value": n => { unarchiveResponse.value = n.getBooleanValue() as any ; },
    }
}
