import {deserializeIntoAccessReviewInstanceDecisionItemResource} from './deserializeIntoAccessReviewInstanceDecisionItemResource';
import {AccessReviewInstanceDecisionItemServicePrincipalResource} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessReviewInstanceDecisionItemServicePrincipalResource(accessReviewInstanceDecisionItemServicePrincipalResource: AccessReviewInstanceDecisionItemServicePrincipalResource | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAccessReviewInstanceDecisionItemResource(accessReviewInstanceDecisionItemServicePrincipalResource),
        "appId": n => { accessReviewInstanceDecisionItemServicePrincipalResource.appId = n.getStringValue() as any ; },
    }
}
