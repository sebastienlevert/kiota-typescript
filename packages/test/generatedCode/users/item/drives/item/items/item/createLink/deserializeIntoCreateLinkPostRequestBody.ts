import {CreateLinkPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCreateLinkPostRequestBody(createLinkPostRequestBody: CreateLinkPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "expirationDateTime": n => { createLinkPostRequestBody.expirationDateTime = n.getDateValue() as any ; },
        "message": n => { createLinkPostRequestBody.message = n.getStringValue() as any ; },
        "password": n => { createLinkPostRequestBody.password = n.getStringValue() as any ; },
        "retainInheritedPermissions": n => { createLinkPostRequestBody.retainInheritedPermissions = n.getBooleanValue() as any ; },
        "scope": n => { createLinkPostRequestBody.scope = n.getStringValue() as any ; },
        "type": n => { createLinkPostRequestBody.type = n.getStringValue() as any ; },
    }
}
