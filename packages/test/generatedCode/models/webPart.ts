import {SitePageData} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface WebPart extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The data property */
    data?: SitePageData;
    /** A unique identifier specifying the webPart type. Read-only. */
    type?: string;
}
