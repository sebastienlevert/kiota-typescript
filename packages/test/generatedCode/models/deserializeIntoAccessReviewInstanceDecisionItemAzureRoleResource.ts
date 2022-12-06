import {deserializeIntoAccessReviewInstanceDecisionItemResource} from './deserializeIntoAccessReviewInstanceDecisionItemResource';
import {AccessReviewInstanceDecisionItemAzureRoleResource} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessReviewInstanceDecisionItemAzureRoleResource(accessReviewInstanceDecisionItemAzureRoleResource: AccessReviewInstanceDecisionItemAzureRoleResource | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAccessReviewInstanceDecisionItemResource(accessReviewInstanceDecisionItemAzureRoleResource),
        "scope": n => { accessReviewInstanceDecisionItemAzureRoleResource.scope = n.getObject(deserializeIntoAccessReviewInstanceDecisionItemResource) as any ; },
    }
}
