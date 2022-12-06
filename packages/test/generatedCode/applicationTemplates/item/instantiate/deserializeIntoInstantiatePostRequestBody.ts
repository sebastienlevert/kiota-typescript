import {InstantiatePostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoInstantiatePostRequestBody(instantiatePostRequestBody: InstantiatePostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "displayName": n => { instantiatePostRequestBody.displayName = n.getStringValue() as any ; },
    }
}
