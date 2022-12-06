import {deserializeIntoOnenoteEntityBaseModel} from './deserializeIntoOnenoteEntityBaseModel';
import {OnenoteResource} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOnenoteResource(onenoteResource: OnenoteResource | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoOnenoteEntityBaseModel(onenoteResource),
        "content": n => { onenoteResource.content = n.getStringValue() as any ; },
        "contentUrl": n => { onenoteResource.contentUrl = n.getStringValue() as any ; },
    }
}
