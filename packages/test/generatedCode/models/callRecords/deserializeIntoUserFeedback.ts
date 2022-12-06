import {deserializeIntoFeedbackTokenSet} from './deserializeIntoFeedbackTokenSet';
import {UserFeedback} from './index';
import {UserFeedbackRating} from './userFeedbackRating';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserFeedback(userFeedback: UserFeedback | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { userFeedback.odataType = n.getStringValue() as any ; },
        "rating": n => { userFeedback.rating = n.getEnumValue<UserFeedbackRating>(UserFeedbackRating) as any ; },
        "text": n => { userFeedback.text = n.getStringValue() as any ; },
        "tokens": n => { userFeedback.tokens = n.getObject(deserializeIntoFeedbackTokenSet) as any ; },
    }
}
