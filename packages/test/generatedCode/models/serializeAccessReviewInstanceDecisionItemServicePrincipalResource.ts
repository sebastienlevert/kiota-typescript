import {AccessReviewInstanceDecisionItemServicePrincipalResource} from './index';
import {serializeAccessReviewInstanceDecisionItemResource} from './serializeAccessReviewInstanceDecisionItemResource';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessReviewInstanceDecisionItemServicePrincipalResource(writer: SerializationWriter, accessReviewInstanceDecisionItemServicePrincipalResource: AccessReviewInstanceDecisionItemServicePrincipalResource | undefined = {}) : void {
        serializeAccessReviewInstanceDecisionItemResource(writer, accessReviewInstanceDecisionItemServicePrincipalResource)
            writer.writeStringValue("appId", accessReviewInstanceDecisionItemServicePrincipalResource.appId);
}
