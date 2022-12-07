import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SharepointIds extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The unique identifier (guid) for the item's list in SharePoint. */
    listId?: string;
    /** An integer identifier for the item within the containing list. */
    listItemId?: string;
    /** The unique identifier (guid) for the item within OneDrive for Business or a SharePoint site. */
    listItemUniqueId?: string;
    /** The unique identifier (guid) for the item's site collection (SPSite). */
    siteId?: string;
    /** The SharePoint URL for the site that contains the item. */
    siteUrl?: string;
    /** The unique identifier (guid) for the tenancy. */
    tenantId?: string;
    /** The unique identifier (guid) for the item's site (SPWeb). */
    webId?: string;
}
