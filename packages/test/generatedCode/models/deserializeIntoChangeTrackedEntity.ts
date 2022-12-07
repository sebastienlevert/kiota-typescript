import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoIdentitySet} from './deserializeIntoIdentitySet';
import {ChangeTrackedEntity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoChangeTrackedEntity(changeTrackedEntity: ChangeTrackedEntity | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(changeTrackedEntity),
        "createdBy": n => { changeTrackedEntity.createdBy = n.getObject(deserializeIntoIdentitySet) as any ; },
        "createdDateTime": n => { changeTrackedEntity.createdDateTime = n.getDateValue() as any ; },
        "lastModifiedBy": n => { changeTrackedEntity.lastModifiedBy = n.getObject(deserializeIntoIdentitySet) as any ; },
        "lastModifiedDateTime": n => { changeTrackedEntity.lastModifiedDateTime = n.getDateValue() as any ; },
    }
}
