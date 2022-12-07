import {Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookCommentReply extends Entity, Partial<Parsable> {
    /** The content of replied comment. */
    content?: string;
    /** Indicates the type for the replied comment. */
    contentType?: string;
}
