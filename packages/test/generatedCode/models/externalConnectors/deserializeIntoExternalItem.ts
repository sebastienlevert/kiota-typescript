import {deserializeIntoEntity} from '../deserializeIntoEntity';
import {deserializeIntoAcl} from './deserializeIntoAcl';
import {deserializeIntoExternalItemContent} from './deserializeIntoExternalItemContent';
import {deserializeIntoProperties} from './deserializeIntoProperties';
import {ExternalItem} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoExternalItem(externalItem: ExternalItem | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(externalItem),
        "acl": n => { externalItem.acl = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAcl) as any ; },
        "content": n => { externalItem.content = n.getObject(deserializeIntoExternalItemContent) as any ; },
        "properties": n => { externalItem.properties = n.getObject(deserializeIntoProperties) as any ; },
    }
}
