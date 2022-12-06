import {deserializeIntoAccessReviewApplyAction} from './deserializeIntoAccessReviewApplyAction';
import {DisableAndDeleteUserApplyAction} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDisableAndDeleteUserApplyAction(disableAndDeleteUserApplyAction: DisableAndDeleteUserApplyAction | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAccessReviewApplyAction(disableAndDeleteUserApplyAction),
    }
}
