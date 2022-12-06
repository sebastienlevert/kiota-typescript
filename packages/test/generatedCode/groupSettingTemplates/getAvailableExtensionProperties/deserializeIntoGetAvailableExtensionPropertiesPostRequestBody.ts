import {GetAvailableExtensionPropertiesPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetAvailableExtensionPropertiesPostRequestBody(getAvailableExtensionPropertiesPostRequestBody: GetAvailableExtensionPropertiesPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "isSyncedFromOnPremises": n => { getAvailableExtensionPropertiesPostRequestBody.isSyncedFromOnPremises = n.getBooleanValue() as any ; },
    }
}
