import {BaseCollectionPaginationCountResponse, TaskFileAttachment} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TaskFileAttachmentCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: TaskFileAttachment[];
}
