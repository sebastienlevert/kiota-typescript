import {deserializeIntoPrompt} from '../../../../../../models/deserializeIntoPrompt';
import {StartHoldMusicPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoStartHoldMusicPostRequestBody(startHoldMusicPostRequestBody: StartHoldMusicPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "clientContext": n => { startHoldMusicPostRequestBody.clientContext = n.getStringValue() as any ; },
        "customPrompt": n => { startHoldMusicPostRequestBody.customPrompt = n.getObject(deserializeIntoPrompt) as any ; },
    }
}
