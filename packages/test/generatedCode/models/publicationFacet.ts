import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface PublicationFacet extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The state of publication for this document. Either published or checkout. Read-only. */
    level?: string;
    /** The unique identifier for the version that is visible to the current caller. Read-only. */
    versionId?: string;
}
