import {ResetPasswordPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoResetPasswordPostRequestBody(resetPasswordPostRequestBody: ResetPasswordPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "newPassword": n => { resetPasswordPostRequestBody.newPassword = n.getStringValue() as any ; },
    }
}
