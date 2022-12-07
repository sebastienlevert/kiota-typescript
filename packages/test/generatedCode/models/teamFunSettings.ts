import {GiphyRatingType} from './giphyRatingType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface TeamFunSettings extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** If set to true, enables users to include custom memes. */
    allowCustomMemes?: boolean;
    /** If set to true, enables Giphy use. */
    allowGiphy?: boolean;
    /** If set to true, enables users to include stickers and memes. */
    allowStickersAndMemes?: boolean;
    /** The giphyContentRating property */
    giphyContentRating?: GiphyRatingType;
}
