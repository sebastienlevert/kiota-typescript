import {Entity, ResourceReference, ResourceVisualization, SharingDetail} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SharedInsight extends Entity, Partial<Parsable> {
    /** Details about the shared item. Read only. */
    lastShared?: SharingDetail;
    /** The lastSharedMethod property */
    lastSharedMethod?: Entity;
    /** Used for navigating to the item that was shared. For file attachments, the type is fileAttachment. For linked attachments, the type is driveItem. */
    resource?: Entity;
    /** Reference properties of the shared document, such as the url and type of the document. Read-only */
    resourceReference?: ResourceReference;
    /** Properties that you can use to visualize the document in your experience. Read-only */
    resourceVisualization?: ResourceVisualization;
    /** The sharingHistory property */
    sharingHistory?: SharingDetail[];
}
