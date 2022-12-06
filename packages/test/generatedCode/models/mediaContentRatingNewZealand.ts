import {RatingNewZealandMoviesType} from './ratingNewZealandMoviesType';
import {RatingNewZealandTelevisionType} from './ratingNewZealandTelevisionType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface MediaContentRatingNewZealand extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Movies rating labels in New Zealand */
    movieRating?: RatingNewZealandMoviesType;
    /** The OdataType property */
    odataType?: string;
    /** TV content rating labels in New Zealand */
    tvRating?: RatingNewZealandTelevisionType;
}
