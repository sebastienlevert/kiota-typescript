import {deserializeIntoEntity} from '../deserializeIntoEntity';
import {deserializeIntoIdentitySet} from '../deserializeIntoIdentitySet';
import {Search} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSearch(search: Search | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(search),
        "contentQuery": n => { search.contentQuery = n.getStringValue() as any ; },
        "createdBy": n => { search.createdBy = n.getObject(deserializeIntoIdentitySet) as any ; },
        "createdDateTime": n => { search.createdDateTime = n.getDateValue() as any ; },
        "description": n => { search.description = n.getStringValue() as any ; },
        "displayName": n => { search.displayName = n.getStringValue() as any ; },
        "lastModifiedBy": n => { search.lastModifiedBy = n.getObject(deserializeIntoIdentitySet) as any ; },
        "lastModifiedDateTime": n => { search.lastModifiedDateTime = n.getDateValue() as any ; },
    }
}
