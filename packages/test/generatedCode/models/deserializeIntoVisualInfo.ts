import {deserializeIntoImageInfo} from './deserializeIntoImageInfo';
import {deserializeIntoJson} from './deserializeIntoJson';
import {VisualInfo} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoVisualInfo(visualInfo: VisualInfo | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "attribution": n => { visualInfo.attribution = n.getObject(deserializeIntoImageInfo) as any ; },
        "backgroundColor": n => { visualInfo.backgroundColor = n.getStringValue() as any ; },
        "content": n => { visualInfo.content = n.getObject(deserializeIntoJson) as any ; },
        "description": n => { visualInfo.description = n.getStringValue() as any ; },
        "displayText": n => { visualInfo.displayText = n.getStringValue() as any ; },
    }
}
