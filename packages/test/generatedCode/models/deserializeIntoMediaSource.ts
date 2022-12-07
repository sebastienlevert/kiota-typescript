import {MediaSource} from './index';
import {MediaSourceContentCategory} from './mediaSourceContentCategory';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMediaSource(mediaSource: MediaSource | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "contentCategory": n => { mediaSource.contentCategory = n.getEnumValue<MediaSourceContentCategory>(MediaSourceContentCategory) as any ; },
    }
}
