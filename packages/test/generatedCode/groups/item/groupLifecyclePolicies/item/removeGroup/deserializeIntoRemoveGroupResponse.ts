import {RemoveGroupResponse} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRemoveGroupResponse(removeGroupResponse: RemoveGroupResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "value": n => { removeGroupResponse.value = n.getBooleanValue() as any ; },
    }
}
