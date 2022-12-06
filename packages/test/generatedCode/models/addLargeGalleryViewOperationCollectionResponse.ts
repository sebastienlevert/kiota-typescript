import {AddLargeGalleryViewOperation, BaseCollectionPaginationCountResponse} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AddLargeGalleryViewOperationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: AddLargeGalleryViewOperation[];
}
