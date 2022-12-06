import {deserializeIntoMediaInfo} from './deserializeIntoMediaInfo';
import {deserializeIntoPrompt} from './deserializeIntoPrompt';
import {MediaPrompt} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMediaPrompt(mediaPrompt: MediaPrompt | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoPrompt(mediaPrompt),
        "mediaInfo": n => { mediaPrompt.mediaInfo = n.getObject(deserializeIntoMediaInfo) as any ; },
    }
}
