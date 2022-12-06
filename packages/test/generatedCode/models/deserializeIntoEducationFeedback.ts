import {deserializeIntoEducationItemBody} from './deserializeIntoEducationItemBody';
import {deserializeIntoIdentitySet} from './deserializeIntoIdentitySet';
import {EducationFeedback} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationFeedback(educationFeedback: EducationFeedback | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "feedbackBy": n => { educationFeedback.feedbackBy = n.getObject(deserializeIntoIdentitySet) as any ; },
        "feedbackDateTime": n => { educationFeedback.feedbackDateTime = n.getDateValue() as any ; },
        "@odata.type": n => { educationFeedback.odataType = n.getStringValue() as any ; },
        "text": n => { educationFeedback.text = n.getObject(deserializeIntoEducationItemBody) as any ; },
    }
}
