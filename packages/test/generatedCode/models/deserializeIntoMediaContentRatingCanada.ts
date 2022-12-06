import {MediaContentRatingCanada} from './index';
import {RatingCanadaMoviesType} from './ratingCanadaMoviesType';
import {RatingCanadaTelevisionType} from './ratingCanadaTelevisionType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMediaContentRatingCanada(mediaContentRatingCanada: MediaContentRatingCanada | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "movieRating": n => { mediaContentRatingCanada.movieRating = n.getEnumValue<RatingCanadaMoviesType>(RatingCanadaMoviesType) as any ; },
        "@odata.type": n => { mediaContentRatingCanada.odataType = n.getStringValue() as any ; },
        "tvRating": n => { mediaContentRatingCanada.tvRating = n.getEnumValue<RatingCanadaTelevisionType>(RatingCanadaTelevisionType) as any ; },
    }
}
