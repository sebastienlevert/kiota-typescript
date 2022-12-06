import {AdministrativeUnit} from './index';
import {serializeDirectoryObject} from './serializeDirectoryObject';
import {serializeExtension} from './serializeExtension';
import {serializeScopedRoleMembership} from './serializeScopedRoleMembership';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAdministrativeUnit(writer: SerializationWriter, administrativeUnit: AdministrativeUnit | undefined = {}) : void {
        serializeDirectoryObject(writer, administrativeUnit)
            writer.writeStringValue("description", administrativeUnit.description);
            writer.writeStringValue("displayName", administrativeUnit.displayName);
            writer.writeCollectionOfObjectValuesFromMethod("extensions", administrativeUnit.extensions as any, serializeExtension);
            writer.writeCollectionOfObjectValuesFromMethod("members", administrativeUnit.members as any, serializeDirectoryObject);
            writer.writeCollectionOfObjectValuesFromMethod("scopedRoleMembers", administrativeUnit.scopedRoleMembers as any, serializeScopedRoleMembership);
            writer.writeStringValue("visibility", administrativeUnit.visibility);
}
