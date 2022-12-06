import {BaseCollectionPaginationCountResponse, WorkbookCommentReply} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookCommentReplyCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: WorkbookCommentReply[];
}
