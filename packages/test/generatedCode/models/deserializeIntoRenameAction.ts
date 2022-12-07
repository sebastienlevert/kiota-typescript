import {RenameAction} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRenameAction(renameAction: RenameAction | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "newName": n => { renameAction.newName = n.getStringValue() as any ; },
        "oldName": n => { renameAction.oldName = n.getStringValue() as any ; },
    }
}
