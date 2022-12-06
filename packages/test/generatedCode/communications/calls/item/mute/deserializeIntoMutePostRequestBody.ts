import {MutePostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMutePostRequestBody(mutePostRequestBody: MutePostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "clientContext": n => { mutePostRequestBody.clientContext = n.getStringValue() as any ; },
    }
}
