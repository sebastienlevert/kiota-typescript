import {MediaContentRatingJapan} from './index';
import {RatingJapanMoviesType} from './ratingJapanMoviesType';
import {RatingJapanTelevisionType} from './ratingJapanTelevisionType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMediaContentRatingJapan(mediaContentRatingJapan: MediaContentRatingJapan | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "movieRating": n => { mediaContentRatingJapan.movieRating = n.getEnumValue<RatingJapanMoviesType>(RatingJapanMoviesType) as any ; },
        "@odata.type": n => { mediaContentRatingJapan.odataType = n.getStringValue() as any ; },
        "tvRating": n => { mediaContentRatingJapan.tvRating = n.getEnumValue<RatingJapanTelevisionType>(RatingJapanTelevisionType) as any ; },
    }
}
