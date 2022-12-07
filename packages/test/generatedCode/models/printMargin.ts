import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface PrintMargin extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The margin in microns from the bottom edge. */
    bottom?: number;
    /** The margin in microns from the left edge. */
    left?: number;
    /** The margin in microns from the right edge. */
    right?: number;
    /** The margin in microns from the top edge. */
    top?: number;
}
