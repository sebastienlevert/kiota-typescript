import {deserializeIntoCommentAction} from './deserializeIntoCommentAction';
import {deserializeIntoCreateAction} from './deserializeIntoCreateAction';
import {deserializeIntoDeleteAction} from './deserializeIntoDeleteAction';
import {deserializeIntoEditAction} from './deserializeIntoEditAction';
import {deserializeIntoMentionAction} from './deserializeIntoMentionAction';
import {deserializeIntoMoveAction} from './deserializeIntoMoveAction';
import {deserializeIntoRenameAction} from './deserializeIntoRenameAction';
import {deserializeIntoRestoreAction} from './deserializeIntoRestoreAction';
import {deserializeIntoShareAction} from './deserializeIntoShareAction';
import {deserializeIntoVersionAction} from './deserializeIntoVersionAction';
import {ItemActionSet} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoItemActionSet(itemActionSet: ItemActionSet | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "comment": n => { itemActionSet.comment = n.getObject(deserializeIntoCommentAction) as any ; },
        "create": n => { itemActionSet.create = n.getObject(deserializeIntoCreateAction) as any ; },
        "delete": n => { itemActionSet.delete = n.getObject(deserializeIntoDeleteAction) as any ; },
        "edit": n => { itemActionSet.edit = n.getObject(deserializeIntoEditAction) as any ; },
        "mention": n => { itemActionSet.mention = n.getObject(deserializeIntoMentionAction) as any ; },
        "move": n => { itemActionSet.move = n.getObject(deserializeIntoMoveAction) as any ; },
        "rename": n => { itemActionSet.rename = n.getObject(deserializeIntoRenameAction) as any ; },
        "restore": n => { itemActionSet.restore = n.getObject(deserializeIntoRestoreAction) as any ; },
        "share": n => { itemActionSet.share = n.getObject(deserializeIntoShareAction) as any ; },
        "version": n => { itemActionSet.version = n.getObject(deserializeIntoVersionAction) as any ; },
    }
}
