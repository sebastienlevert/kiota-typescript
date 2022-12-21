import {BodyType} from './bodyType';
import {ItemBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoItemBody(itemBody: ItemBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "content": n => { itemBody.content = n.getStringValue() as any ; },
        "contentType": n => { itemBody.contentType = n.getEnumValue<BodyType>(BodyType) as any ; },
    }
}
