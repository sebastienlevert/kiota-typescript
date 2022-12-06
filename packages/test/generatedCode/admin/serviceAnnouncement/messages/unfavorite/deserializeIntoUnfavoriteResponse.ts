import {UnfavoriteResponse} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUnfavoriteResponse(unfavoriteResponse: UnfavoriteResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "value": n => { unfavoriteResponse.value = n.getBooleanValue() as any ; },
    }
}
