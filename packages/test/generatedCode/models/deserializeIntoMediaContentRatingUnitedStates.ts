import {MediaContentRatingUnitedStates} from './index';
import {RatingUnitedStatesMoviesType} from './ratingUnitedStatesMoviesType';
import {RatingUnitedStatesTelevisionType} from './ratingUnitedStatesTelevisionType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMediaContentRatingUnitedStates(mediaContentRatingUnitedStates: MediaContentRatingUnitedStates | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "movieRating": n => { mediaContentRatingUnitedStates.movieRating = n.getEnumValue<RatingUnitedStatesMoviesType>(RatingUnitedStatesMoviesType) as any ; },
        "@odata.type": n => { mediaContentRatingUnitedStates.odataType = n.getStringValue() as any ; },
        "tvRating": n => { mediaContentRatingUnitedStates.tvRating = n.getEnumValue<RatingUnitedStatesTelevisionType>(RatingUnitedStatesTelevisionType) as any ; },
    }
}
