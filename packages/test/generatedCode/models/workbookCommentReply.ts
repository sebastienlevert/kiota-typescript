import {Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookCommentReply extends Entity, Partial<Parsable> {
    /** The content of a comment reply. */
    content?: string;
    /** Indicates the type for the comment reply. */
    contentType?: string;
}
