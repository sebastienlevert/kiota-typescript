import {AccessReviewApplyAction} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessReviewApplyAction(writer: SerializationWriter, accessReviewApplyAction: AccessReviewApplyAction | undefined = {}) : void {
            writer.writeStringValue("@odata.type", accessReviewApplyAction.odataType);
}
