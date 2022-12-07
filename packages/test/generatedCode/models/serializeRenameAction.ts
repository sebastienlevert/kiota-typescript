import {RenameAction} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRenameAction(writer: SerializationWriter, renameAction: RenameAction | undefined = {}) : void {
            writer.writeStringValue("newName", renameAction.newName);
            writer.writeStringValue("oldName", renameAction.oldName);
}
