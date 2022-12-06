import {AddGroupResponse} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAddGroupResponse(addGroupResponse: AddGroupResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "value": n => { addGroupResponse.value = n.getBooleanValue() as any ; },
    }
}
