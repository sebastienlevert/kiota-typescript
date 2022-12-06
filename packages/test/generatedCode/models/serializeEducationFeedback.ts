import {EducationFeedback} from './index';
import {serializeEducationItemBody} from './serializeEducationItemBody';
import {serializeIdentitySet} from './serializeIdentitySet';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationFeedback(writer: SerializationWriter, educationFeedback: EducationFeedback | undefined = {}) : void {
            writer.writeObjectValueFromMethod("feedbackBy", educationFeedback.feedbackBy as any, serializeIdentitySet);
            writer.writeDateValue("feedbackDateTime", educationFeedback.feedbackDateTime);
            writer.writeStringValue("@odata.type", educationFeedback.odataType);
            writer.writeObjectValueFromMethod("text", educationFeedback.text as any, serializeEducationItemBody);
}
