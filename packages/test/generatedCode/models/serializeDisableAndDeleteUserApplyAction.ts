import {DisableAndDeleteUserApplyAction} from './index';
import {serializeAccessReviewApplyAction} from './serializeAccessReviewApplyAction';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDisableAndDeleteUserApplyAction(writer: SerializationWriter, disableAndDeleteUserApplyAction: DisableAndDeleteUserApplyAction | undefined = {}) : void {
        serializeAccessReviewApplyAction(writer, disableAndDeleteUserApplyAction)
}
