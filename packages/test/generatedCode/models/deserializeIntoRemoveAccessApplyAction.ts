import {deserializeIntoAccessReviewApplyAction} from './deserializeIntoAccessReviewApplyAction';
import {RemoveAccessApplyAction} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRemoveAccessApplyAction(removeAccessApplyAction: RemoveAccessApplyAction | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAccessReviewApplyAction(removeAccessApplyAction),
    }
}
