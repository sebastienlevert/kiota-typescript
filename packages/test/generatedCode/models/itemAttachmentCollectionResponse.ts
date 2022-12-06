import {BaseCollectionPaginationCountResponse, ItemAttachment} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ItemAttachmentCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ItemAttachment[];
}
