import {BaseCollectionPaginationCountResponse, ChatMessageAttachment} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ChatMessageAttachmentCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ChatMessageAttachment[];
}
