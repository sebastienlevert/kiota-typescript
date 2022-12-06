import {BaseCollectionPaginationCountResponse, ServiceAnnouncementAttachment} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ServiceAnnouncementAttachmentCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ServiceAnnouncementAttachment[];
}
