import {CommentAction, CreateAction, DeleteAction, EditAction, MentionAction, MoveAction, RenameAction, RestoreAction, ShareAction, VersionAction} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ItemActionSet extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The comment property */
    comment?: CommentAction;
    /** The create property */
    create?: CreateAction;
    /** The delete property */
    delete?: DeleteAction;
    /** The edit property */
    edit?: EditAction;
    /** The mention property */
    mention?: MentionAction;
    /** The move property */
    move?: MoveAction;
    /** The rename property */
    rename?: RenameAction;
    /** The restore property */
    restore?: RestoreAction;
    /** The share property */
    share?: ShareAction;
    /** The version property */
    version?: VersionAction;
}
