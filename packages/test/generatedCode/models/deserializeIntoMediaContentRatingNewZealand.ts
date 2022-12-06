import {MediaContentRatingNewZealand} from './index';
import {RatingNewZealandMoviesType} from './ratingNewZealandMoviesType';
import {RatingNewZealandTelevisionType} from './ratingNewZealandTelevisionType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMediaContentRatingNewZealand(mediaContentRatingNewZealand: MediaContentRatingNewZealand | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "movieRating": n => { mediaContentRatingNewZealand.movieRating = n.getEnumValue<RatingNewZealandMoviesType>(RatingNewZealandMoviesType) as any ; },
        "@odata.type": n => { mediaContentRatingNewZealand.odataType = n.getStringValue() as any ; },
        "tvRating": n => { mediaContentRatingNewZealand.tvRating = n.getEnumValue<RatingNewZealandTelevisionType>(RatingNewZealandTelevisionType) as any ; },
    }
}
