import {RatingUnitedStatesMoviesType} from './ratingUnitedStatesMoviesType';
import {RatingUnitedStatesTelevisionType} from './ratingUnitedStatesTelevisionType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface MediaContentRatingUnitedStates extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Movies rating labels in United States */
    movieRating?: RatingUnitedStatesMoviesType;
    /** The OdataType property */
    odataType?: string;
    /** TV content rating labels in United States */
    tvRating?: RatingUnitedStatesTelevisionType;
}
