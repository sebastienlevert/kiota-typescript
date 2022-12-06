import {MediaContentRatingCanada} from './index';
import {RatingCanadaMoviesType} from './ratingCanadaMoviesType';
import {RatingCanadaTelevisionType} from './ratingCanadaTelevisionType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMediaContentRatingCanada(writer: SerializationWriter, mediaContentRatingCanada: MediaContentRatingCanada | undefined = {}) : void {
            writer.writeEnumValue<RatingCanadaMoviesType>("movieRating", mediaContentRatingCanada.movieRating);
            writer.writeStringValue("@odata.type", mediaContentRatingCanada.odataType);
            writer.writeEnumValue<RatingCanadaTelevisionType>("tvRating", mediaContentRatingCanada.tvRating);
}
