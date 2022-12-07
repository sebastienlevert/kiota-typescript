import {ItemActionSet} from './index';
import {serializeCommentAction} from './serializeCommentAction';
import {serializeCreateAction} from './serializeCreateAction';
import {serializeDeleteAction} from './serializeDeleteAction';
import {serializeEditAction} from './serializeEditAction';
import {serializeMentionAction} from './serializeMentionAction';
import {serializeMoveAction} from './serializeMoveAction';
import {serializeRenameAction} from './serializeRenameAction';
import {serializeRestoreAction} from './serializeRestoreAction';
import {serializeShareAction} from './serializeShareAction';
import {serializeVersionAction} from './serializeVersionAction';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeItemActionSet(writer: SerializationWriter, itemActionSet: ItemActionSet | undefined = {}) : void {
            writer.writeObjectValueFromMethod("comment", itemActionSet.comment as any, serializeCommentAction);
            writer.writeObjectValueFromMethod("create", itemActionSet.create as any, serializeCreateAction);
            writer.writeObjectValueFromMethod("delete", itemActionSet.delete as any, serializeDeleteAction);
            writer.writeObjectValueFromMethod("edit", itemActionSet.edit as any, serializeEditAction);
            writer.writeObjectValueFromMethod("mention", itemActionSet.mention as any, serializeMentionAction);
            writer.writeObjectValueFromMethod("move", itemActionSet.move as any, serializeMoveAction);
            writer.writeObjectValueFromMethod("rename", itemActionSet.rename as any, serializeRenameAction);
            writer.writeObjectValueFromMethod("restore", itemActionSet.restore as any, serializeRestoreAction);
            writer.writeObjectValueFromMethod("share", itemActionSet.share as any, serializeShareAction);
            writer.writeObjectValueFromMethod("version", itemActionSet.version as any, serializeVersionAction);
}
