import {MediaContentRatingGermany} from './index';
import {RatingGermanyMoviesType} from './ratingGermanyMoviesType';
import {RatingGermanyTelevisionType} from './ratingGermanyTelevisionType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMediaContentRatingGermany(mediaContentRatingGermany: MediaContentRatingGermany | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "movieRating": n => { mediaContentRatingGermany.movieRating = n.getEnumValue<RatingGermanyMoviesType>(RatingGermanyMoviesType) as any ; },
        "@odata.type": n => { mediaContentRatingGermany.odataType = n.getStringValue() as any ; },
        "tvRating": n => { mediaContentRatingGermany.tvRating = n.getEnumValue<RatingGermanyTelevisionType>(RatingGermanyTelevisionType) as any ; },
    }
}
