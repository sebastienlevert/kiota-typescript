import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoIdentity} from './deserializeIntoIdentity';
import {ScopedRoleMembership} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoScopedRoleMembership(scopedRoleMembership: ScopedRoleMembership | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(scopedRoleMembership),
        "administrativeUnitId": n => { scopedRoleMembership.administrativeUnitId = n.getStringValue() as any ; },
        "roleId": n => { scopedRoleMembership.roleId = n.getStringValue() as any ; },
        "roleMemberInfo": n => { scopedRoleMembership.roleMemberInfo = n.getObject(deserializeIntoIdentity) as any ; },
    }
}
