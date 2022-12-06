import {BaseCollectionPaginationCountResponse, FileAttachment} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface FileAttachmentCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: FileAttachment[];
}
