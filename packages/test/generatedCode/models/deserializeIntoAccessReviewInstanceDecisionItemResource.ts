import {AccessReviewInstanceDecisionItemResource} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessReviewInstanceDecisionItemResource(accessReviewInstanceDecisionItemResource: AccessReviewInstanceDecisionItemResource | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "displayName": n => { accessReviewInstanceDecisionItemResource.displayName = n.getStringValue() as any ; },
        "id": n => { accessReviewInstanceDecisionItemResource.id = n.getStringValue() as any ; },
        "type": n => { accessReviewInstanceDecisionItemResource.type = n.getStringValue() as any ; },
    }
}
