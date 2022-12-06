import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface CopyToSectionGroupPostRequestBody extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The groupId property */
    groupId?: string;
    /** The id property */
    id?: string;
    /** The renameAs property */
    renameAs?: string;
    /** The siteCollectionId property */
    siteCollectionId?: string;
    /** The siteId property */
    siteId?: string;
}
