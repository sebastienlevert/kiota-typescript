import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ContentTypeOrder extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Whether this is the default Content Type */
    default_escaped?: boolean;
    /** Specifies the position in which the Content Type appears in the selection UI. */
    position?: number;
}
