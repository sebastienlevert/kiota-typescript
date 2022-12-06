import {BaseCollectionPaginationCountResponse, ReferenceAttachment} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ReferenceAttachmentCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ReferenceAttachment[];
}
