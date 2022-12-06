import {MediaContentRatingUnitedKingdom} from './index';
import {RatingUnitedKingdomMoviesType} from './ratingUnitedKingdomMoviesType';
import {RatingUnitedKingdomTelevisionType} from './ratingUnitedKingdomTelevisionType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMediaContentRatingUnitedKingdom(mediaContentRatingUnitedKingdom: MediaContentRatingUnitedKingdom | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "movieRating": n => { mediaContentRatingUnitedKingdom.movieRating = n.getEnumValue<RatingUnitedKingdomMoviesType>(RatingUnitedKingdomMoviesType) as any ; },
        "@odata.type": n => { mediaContentRatingUnitedKingdom.odataType = n.getStringValue() as any ; },
        "tvRating": n => { mediaContentRatingUnitedKingdom.tvRating = n.getEnumValue<RatingUnitedKingdomTelevisionType>(RatingUnitedKingdomTelevisionType) as any ; },
    }
}
