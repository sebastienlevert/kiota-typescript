import {MediaInfo} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMediaInfo(mediaInfo: MediaInfo | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { mediaInfo.odataType = n.getStringValue() as any ; },
        "resourceId": n => { mediaInfo.resourceId = n.getStringValue() as any ; },
        "uri": n => { mediaInfo.uri = n.getStringValue() as any ; },
    }
}
