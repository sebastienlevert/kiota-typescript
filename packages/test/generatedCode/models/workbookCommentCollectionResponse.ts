import {BaseCollectionPaginationCountResponse, WorkbookComment} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookCommentCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: WorkbookComment[];
}
