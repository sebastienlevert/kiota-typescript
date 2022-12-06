import {deserializeIntoEntity} from '../deserializeIntoEntity';
import {IdentityType} from './identityType';
import {Identity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIdentity(identity: Identity | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(identity),
        "type": n => { identity.type = n.getEnumValue<IdentityType>(IdentityType) as any ; },
    }
}
