import {IdentitySet} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface CommentAction extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** If true, this activity was a reply to an existing comment thread. */
    isReply?: boolean;
    /** The parentAuthor property */
    parentAuthor?: IdentitySet;
    /** The identities of the users participating in this comment thread. */
    participants?: IdentitySet[];
}
