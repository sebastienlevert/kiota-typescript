import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Thumbnail extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The content stream for the thumbnail. */
    content?: string;
    /** The height of the thumbnail, in pixels. */
    height?: number;
    /** The unique identifier of the item that provided the thumbnail. This is only available when a folder thumbnail is requested. */
    sourceItemId?: string;
    /** The URL used to fetch the thumbnail content. */
    url?: string;
    /** The width of the thumbnail, in pixels. */
    width?: number;
}
