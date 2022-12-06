import {ValidatePropertiesPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoValidatePropertiesPostRequestBody(validatePropertiesPostRequestBody: ValidatePropertiesPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "displayName": n => { validatePropertiesPostRequestBody.displayName = n.getStringValue() as any ; },
        "entityType": n => { validatePropertiesPostRequestBody.entityType = n.getStringValue() as any ; },
        "mailNickname": n => { validatePropertiesPostRequestBody.mailNickname = n.getStringValue() as any ; },
        "onBehalfOfUserId": n => { validatePropertiesPostRequestBody.onBehalfOfUserId = n.getStringValue() as any ; },
    }
}
