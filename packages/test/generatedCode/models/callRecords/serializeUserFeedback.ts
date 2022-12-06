import {UserFeedback} from './index';
import {serializeFeedbackTokenSet} from './serializeFeedbackTokenSet';
import {UserFeedbackRating} from './userFeedbackRating';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserFeedback(writer: SerializationWriter, userFeedback: UserFeedback | undefined = {}) : void {
            writer.writeStringValue("@odata.type", userFeedback.odataType);
            writer.writeEnumValue<UserFeedbackRating>("rating", userFeedback.rating);
            writer.writeStringValue("text", userFeedback.text);
            writer.writeObjectValueFromMethod("tokens", userFeedback.tokens as any, serializeFeedbackTokenSet);
}
