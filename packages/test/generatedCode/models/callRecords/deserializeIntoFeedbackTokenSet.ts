import {FeedbackTokenSet} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoFeedbackTokenSet(feedbackTokenSet: FeedbackTokenSet | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { feedbackTokenSet.odataType = n.getStringValue() as any ; },
    }
}
