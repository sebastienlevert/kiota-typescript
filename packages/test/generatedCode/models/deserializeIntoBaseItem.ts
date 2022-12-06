import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoIdentitySet} from './deserializeIntoIdentitySet';
import {deserializeIntoItemReference} from './deserializeIntoItemReference';
import {deserializeIntoUser} from './deserializeIntoUser';
import {BaseItem} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBaseItem(baseItem: BaseItem | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(baseItem),
        "createdBy": n => { baseItem.createdBy = n.getObject(deserializeIntoIdentitySet) as any ; },
        "createdByUser": n => { baseItem.createdByUser = n.getObject(deserializeIntoUser) as any ; },
        "createdDateTime": n => { baseItem.createdDateTime = n.getDateValue() as any ; },
        "description": n => { baseItem.description = n.getStringValue() as any ; },
        "eTag": n => { baseItem.eTag = n.getStringValue() as any ; },
        "lastModifiedBy": n => { baseItem.lastModifiedBy = n.getObject(deserializeIntoIdentitySet) as any ; },
        "lastModifiedByUser": n => { baseItem.lastModifiedByUser = n.getObject(deserializeIntoUser) as any ; },
        "lastModifiedDateTime": n => { baseItem.lastModifiedDateTime = n.getDateValue() as any ; },
        "name": n => { baseItem.name = n.getStringValue() as any ; },
        "parentReference": n => { baseItem.parentReference = n.getObject(deserializeIntoItemReference) as any ; },
        "webUrl": n => { baseItem.webUrl = n.getStringValue() as any ; },
    }
}
