import {RemoveAccessApplyAction} from './index';
import {serializeAccessReviewApplyAction} from './serializeAccessReviewApplyAction';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRemoveAccessApplyAction(writer: SerializationWriter, removeAccessApplyAction: RemoveAccessApplyAction | undefined = {}) : void {
        serializeAccessReviewApplyAction(writer, removeAccessApplyAction)
}
