import {Entity, ResourceReference, ResourceVisualization, UsageDetails} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UsedInsight extends Entity, Partial<Parsable> {
    /** Information about when the item was last viewed or modified by the user. Read only. */
    lastUsed?: UsageDetails;
    /** Used for navigating to the item that was used. For file attachments, the type is fileAttachment. For linked attachments, the type is driveItem. */
    resource?: Entity;
    /** Reference properties of the used document, such as the url and type of the document. Read-only */
    resourceReference?: ResourceReference;
    /** Properties that you can use to visualize the document in your experience. Read-only */
    resourceVisualization?: ResourceVisualization;
}
