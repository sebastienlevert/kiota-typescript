import {RatingGermanyMoviesType} from './ratingGermanyMoviesType';
import {RatingGermanyTelevisionType} from './ratingGermanyTelevisionType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface MediaContentRatingGermany extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Movies rating labels in Germany */
    movieRating?: RatingGermanyMoviesType;
    /** The OdataType property */
    odataType?: string;
    /** TV content rating labels in Germany */
    tvRating?: RatingGermanyTelevisionType;
}
