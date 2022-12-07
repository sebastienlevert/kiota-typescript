import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface TeamsTabConfiguration extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Url used for rendering tab contents in Teams. Required. */
    contentUrl?: string;
    /** Identifier for the entity hosted by the tab provider. */
    entityId?: string;
    /** Url called by Teams client when a Tab is removed using the Teams Client. */
    removeUrl?: string;
    /** Url for showing tab contents outside of Teams. */
    websiteUrl?: string;
}
