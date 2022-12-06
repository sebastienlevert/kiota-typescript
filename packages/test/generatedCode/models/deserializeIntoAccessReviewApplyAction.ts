import {AccessReviewApplyAction} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessReviewApplyAction(accessReviewApplyAction: AccessReviewApplyAction | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { accessReviewApplyAction.odataType = n.getStringValue() as any ; },
    }
}
