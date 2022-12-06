import {MediaContentRatingNewZealand} from './index';
import {RatingNewZealandMoviesType} from './ratingNewZealandMoviesType';
import {RatingNewZealandTelevisionType} from './ratingNewZealandTelevisionType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMediaContentRatingNewZealand(writer: SerializationWriter, mediaContentRatingNewZealand: MediaContentRatingNewZealand | undefined = {}) : void {
            writer.writeEnumValue<RatingNewZealandMoviesType>("movieRating", mediaContentRatingNewZealand.movieRating);
            writer.writeStringValue("@odata.type", mediaContentRatingNewZealand.odataType);
            writer.writeEnumValue<RatingNewZealandTelevisionType>("tvRating", mediaContentRatingNewZealand.tvRating);
}
