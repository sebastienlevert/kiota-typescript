import {deserializeIntoEntity} from '../deserializeIntoEntity';
import {deserializeIntoIdentitySet} from '../deserializeIntoIdentitySet';
import {Tag} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTag(tag: Tag | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(tag),
        "createdBy": n => { tag.createdBy = n.getObject(deserializeIntoIdentitySet) as any ; },
        "description": n => { tag.description = n.getStringValue() as any ; },
        "displayName": n => { tag.displayName = n.getStringValue() as any ; },
        "lastModifiedDateTime": n => { tag.lastModifiedDateTime = n.getDateValue() as any ; },
    }
}
