import {ForceDeletePostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoForceDeletePostRequestBody(forceDeletePostRequestBody: ForceDeletePostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "disableUserAccounts": n => { forceDeletePostRequestBody.disableUserAccounts = n.getBooleanValue() as any ; },
    }
}
