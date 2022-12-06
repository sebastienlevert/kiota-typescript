import {MediaContentRatingAustralia} from './index';
import {RatingAustraliaMoviesType} from './ratingAustraliaMoviesType';
import {RatingAustraliaTelevisionType} from './ratingAustraliaTelevisionType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMediaContentRatingAustralia(writer: SerializationWriter, mediaContentRatingAustralia: MediaContentRatingAustralia | undefined = {}) : void {
            writer.writeEnumValue<RatingAustraliaMoviesType>("movieRating", mediaContentRatingAustralia.movieRating);
            writer.writeStringValue("@odata.type", mediaContentRatingAustralia.odataType);
            writer.writeEnumValue<RatingAustraliaTelevisionType>("tvRating", mediaContentRatingAustralia.tvRating);
}
