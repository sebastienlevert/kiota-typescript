import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface VisualProperties extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The body of a visual user notification. Body is optional. */
    body?: string;
    /** The title of a visual user notification. This field is required for visual notification payloads. */
    title?: string;
}
