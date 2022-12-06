import {deserializeIntoEntity} from '../deserializeIntoEntity';
import {deserializeIntoIdentity} from './deserializeIntoIdentity';
import {ExternalGroup} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoExternalGroup(externalGroup: ExternalGroup | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(externalGroup),
        "description": n => { externalGroup.description = n.getStringValue() as any ; },
        "displayName": n => { externalGroup.displayName = n.getStringValue() as any ; },
        "members": n => { externalGroup.members = n.getCollectionOfObjectValuesFromMethod(deserializeIntoIdentity) as any ; },
    }
}
