import {ChangePasswordPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoChangePasswordPostRequestBody(changePasswordPostRequestBody: ChangePasswordPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "currentPassword": n => { changePasswordPostRequestBody.currentPassword = n.getStringValue() as any ; },
        "newPassword": n => { changePasswordPostRequestBody.newPassword = n.getStringValue() as any ; },
    }
}
