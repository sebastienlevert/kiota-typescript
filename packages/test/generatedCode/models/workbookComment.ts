import {Entity, WorkbookCommentReply} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookComment extends Entity, Partial<Parsable> {
    /** The content of the comment. */
    content?: string;
    /** Indicates the type for the comment. */
    contentType?: string;
    /** The replies property */
    replies?: WorkbookCommentReply[];
}
