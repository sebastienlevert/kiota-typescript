import {FeedbackTokenSet} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFeedbackTokenSet(writer: SerializationWriter, feedbackTokenSet: FeedbackTokenSet | undefined = {}) : void {
            writer.writeStringValue("@odata.type", feedbackTokenSet.odataType);
}
