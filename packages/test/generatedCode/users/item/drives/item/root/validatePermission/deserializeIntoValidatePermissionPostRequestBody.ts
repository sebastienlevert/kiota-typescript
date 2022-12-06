import {ValidatePermissionPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoValidatePermissionPostRequestBody(validatePermissionPostRequestBody: ValidatePermissionPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "challengeToken": n => { validatePermissionPostRequestBody.challengeToken = n.getStringValue() as any ; },
        "password": n => { validatePermissionPostRequestBody.password = n.getStringValue() as any ; },
    }
}
