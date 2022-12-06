import {AttachmentBase, BaseCollectionPaginationCountResponse} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AttachmentBaseCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: AttachmentBase[];
}
