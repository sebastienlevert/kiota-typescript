import {MediaContentRatingGermany} from './index';
import {RatingGermanyMoviesType} from './ratingGermanyMoviesType';
import {RatingGermanyTelevisionType} from './ratingGermanyTelevisionType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMediaContentRatingGermany(writer: SerializationWriter, mediaContentRatingGermany: MediaContentRatingGermany | undefined = {}) : void {
            writer.writeEnumValue<RatingGermanyMoviesType>("movieRating", mediaContentRatingGermany.movieRating);
            writer.writeStringValue("@odata.type", mediaContentRatingGermany.odataType);
            writer.writeEnumValue<RatingGermanyTelevisionType>("tvRating", mediaContentRatingGermany.tvRating);
}
