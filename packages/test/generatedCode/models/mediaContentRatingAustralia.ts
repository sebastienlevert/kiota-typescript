import {RatingAustraliaMoviesType} from './ratingAustraliaMoviesType';
import {RatingAustraliaTelevisionType} from './ratingAustraliaTelevisionType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface MediaContentRatingAustralia extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Movies rating labels in Australia */
    movieRating?: RatingAustraliaMoviesType;
    /** The OdataType property */
    odataType?: string;
    /** TV content rating labels in Australia */
    tvRating?: RatingAustraliaTelevisionType;
}
