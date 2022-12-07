import {DeleteAction} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDeleteAction(deleteAction: DeleteAction | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "name": n => { deleteAction.name = n.getStringValue() as any ; },
        "objectType": n => { deleteAction.objectType = n.getStringValue() as any ; },
    }
}
