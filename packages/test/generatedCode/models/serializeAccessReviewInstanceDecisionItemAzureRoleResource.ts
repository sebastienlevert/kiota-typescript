import {AccessReviewInstanceDecisionItemAzureRoleResource} from './index';
import {serializeAccessReviewInstanceDecisionItemResource} from './serializeAccessReviewInstanceDecisionItemResource';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessReviewInstanceDecisionItemAzureRoleResource(writer: SerializationWriter, accessReviewInstanceDecisionItemAzureRoleResource: AccessReviewInstanceDecisionItemAzureRoleResource | undefined = {}) : void {
        serializeAccessReviewInstanceDecisionItemResource(writer, accessReviewInstanceDecisionItemAzureRoleResource)
            writer.writeObjectValueFromMethod("scope", accessReviewInstanceDecisionItemAzureRoleResource.scope as any, serializeAccessReviewInstanceDecisionItemResource);
}
