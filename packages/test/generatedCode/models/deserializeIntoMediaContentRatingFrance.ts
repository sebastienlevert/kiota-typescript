import {MediaContentRatingFrance} from './index';
import {RatingFranceMoviesType} from './ratingFranceMoviesType';
import {RatingFranceTelevisionType} from './ratingFranceTelevisionType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMediaContentRatingFrance(mediaContentRatingFrance: MediaContentRatingFrance | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "movieRating": n => { mediaContentRatingFrance.movieRating = n.getEnumValue<RatingFranceMoviesType>(RatingFranceMoviesType) as any ; },
        "@odata.type": n => { mediaContentRatingFrance.odataType = n.getStringValue() as any ; },
        "tvRating": n => { mediaContentRatingFrance.tvRating = n.getEnumValue<RatingFranceTelevisionType>(RatingFranceTelevisionType) as any ; },
    }
}
