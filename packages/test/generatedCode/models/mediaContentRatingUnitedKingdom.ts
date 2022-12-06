import {RatingUnitedKingdomMoviesType} from './ratingUnitedKingdomMoviesType';
import {RatingUnitedKingdomTelevisionType} from './ratingUnitedKingdomTelevisionType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface MediaContentRatingUnitedKingdom extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Movies rating labels in United Kingdom */
    movieRating?: RatingUnitedKingdomMoviesType;
    /** The OdataType property */
    odataType?: string;
    /** TV content rating labels in United Kingdom */
    tvRating?: RatingUnitedKingdomTelevisionType;
}
