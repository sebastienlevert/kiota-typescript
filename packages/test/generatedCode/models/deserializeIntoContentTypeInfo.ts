import {ContentTypeInfo} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoContentTypeInfo(contentTypeInfo: ContentTypeInfo | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "id": n => { contentTypeInfo.id = n.getStringValue() as any ; },
        "name": n => { contentTypeInfo.name = n.getStringValue() as any ; },
    }
}
