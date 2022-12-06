import {ScopedRoleMembership} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeIdentity} from './serializeIdentity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeScopedRoleMembership(writer: SerializationWriter, scopedRoleMembership: ScopedRoleMembership | undefined = {}) : void {
        serializeEntity(writer, scopedRoleMembership)
            writer.writeStringValue("administrativeUnitId", scopedRoleMembership.administrativeUnitId);
            writer.writeStringValue("roleId", scopedRoleMembership.roleId);
            writer.writeObjectValueFromMethod("roleMemberInfo", scopedRoleMembership.roleMemberInfo as any, serializeIdentity);
}
