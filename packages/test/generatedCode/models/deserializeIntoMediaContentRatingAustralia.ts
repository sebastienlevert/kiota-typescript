import {MediaContentRatingAustralia} from './index';
import {RatingAustraliaMoviesType} from './ratingAustraliaMoviesType';
import {RatingAustraliaTelevisionType} from './ratingAustraliaTelevisionType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMediaContentRatingAustralia(mediaContentRatingAustralia: MediaContentRatingAustralia | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "movieRating": n => { mediaContentRatingAustralia.movieRating = n.getEnumValue<RatingAustraliaMoviesType>(RatingAustraliaMoviesType) as any ; },
        "@odata.type": n => { mediaContentRatingAustralia.odataType = n.getStringValue() as any ; },
        "tvRating": n => { mediaContentRatingAustralia.tvRating = n.getEnumValue<RatingAustraliaTelevisionType>(RatingAustraliaTelevisionType) as any ; },
    }
}
