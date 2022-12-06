import {KeyValuePair} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SubjectRightsRequestDetail extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Count of items that are excluded from the request. */
    excludedItemCount?: number;
    /** Count of items per insight. */
    insightCounts?: KeyValuePair[];
    /** Count of items found. */
    itemCount?: number;
    /** Count of item that need review. */
    itemNeedReview?: number;
    /** The OdataType property */
    odataType?: string;
    /** Count of items per product, such as Exchange, SharePoint, OneDrive, and Teams. */
    productItemCounts?: KeyValuePair[];
    /** Count of items signed off by the administrator. */
    signedOffItemCount?: number;
    /** Total item size in bytes. */
    totalItemSize?: number;
}
