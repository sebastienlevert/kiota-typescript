import {MediaContentRatingUnitedStates} from './index';
import {RatingUnitedStatesMoviesType} from './ratingUnitedStatesMoviesType';
import {RatingUnitedStatesTelevisionType} from './ratingUnitedStatesTelevisionType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMediaContentRatingUnitedStates(writer: SerializationWriter, mediaContentRatingUnitedStates: MediaContentRatingUnitedStates | undefined = {}) : void {
            writer.writeEnumValue<RatingUnitedStatesMoviesType>("movieRating", mediaContentRatingUnitedStates.movieRating);
            writer.writeStringValue("@odata.type", mediaContentRatingUnitedStates.odataType);
            writer.writeEnumValue<RatingUnitedStatesTelevisionType>("tvRating", mediaContentRatingUnitedStates.tvRating);
}
