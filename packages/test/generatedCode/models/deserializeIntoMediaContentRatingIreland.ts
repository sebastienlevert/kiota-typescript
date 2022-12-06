import {MediaContentRatingIreland} from './index';
import {RatingIrelandMoviesType} from './ratingIrelandMoviesType';
import {RatingIrelandTelevisionType} from './ratingIrelandTelevisionType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMediaContentRatingIreland(mediaContentRatingIreland: MediaContentRatingIreland | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "movieRating": n => { mediaContentRatingIreland.movieRating = n.getEnumValue<RatingIrelandMoviesType>(RatingIrelandMoviesType) as any ; },
        "@odata.type": n => { mediaContentRatingIreland.odataType = n.getStringValue() as any ; },
        "tvRating": n => { mediaContentRatingIreland.tvRating = n.getEnumValue<RatingIrelandTelevisionType>(RatingIrelandTelevisionType) as any ; },
    }
}
