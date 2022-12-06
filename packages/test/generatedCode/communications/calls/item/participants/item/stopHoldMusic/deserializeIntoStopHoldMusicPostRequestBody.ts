import {StopHoldMusicPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoStopHoldMusicPostRequestBody(stopHoldMusicPostRequestBody: StopHoldMusicPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "clientContext": n => { stopHoldMusicPostRequestBody.clientContext = n.getStringValue() as any ; },
    }
}
