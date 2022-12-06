import {RatingJapanMoviesType} from './ratingJapanMoviesType';
import {RatingJapanTelevisionType} from './ratingJapanTelevisionType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface MediaContentRatingJapan extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Movies rating labels in Japan */
    movieRating?: RatingJapanMoviesType;
    /** The OdataType property */
    odataType?: string;
    /** TV content rating labels in Japan */
    tvRating?: RatingJapanTelevisionType;
}
