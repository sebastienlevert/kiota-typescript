import {RatingCanadaMoviesType} from './ratingCanadaMoviesType';
import {RatingCanadaTelevisionType} from './ratingCanadaTelevisionType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface MediaContentRatingCanada extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Movies rating labels in Canada */
    movieRating?: RatingCanadaMoviesType;
    /** The OdataType property */
    odataType?: string;
    /** TV content rating labels in Canada */
    tvRating?: RatingCanadaTelevisionType;
}
