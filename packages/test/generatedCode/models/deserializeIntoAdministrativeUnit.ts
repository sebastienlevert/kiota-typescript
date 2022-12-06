import {deserializeIntoDirectoryObject} from './deserializeIntoDirectoryObject';
import {deserializeIntoExtension} from './deserializeIntoExtension';
import {deserializeIntoScopedRoleMembership} from './deserializeIntoScopedRoleMembership';
import {AdministrativeUnit} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAdministrativeUnit(administrativeUnit: AdministrativeUnit | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDirectoryObject(administrativeUnit),
        "description": n => { administrativeUnit.description = n.getStringValue() as any ; },
        "displayName": n => { administrativeUnit.displayName = n.getStringValue() as any ; },
        "extensions": n => { administrativeUnit.extensions = n.getCollectionOfObjectValuesFromMethod(deserializeIntoExtension) as any ; },
        "members": n => { administrativeUnit.members = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDirectoryObject) as any ; },
        "scopedRoleMembers": n => { administrativeUnit.scopedRoleMembers = n.getCollectionOfObjectValuesFromMethod(deserializeIntoScopedRoleMembership) as any ; },
        "visibility": n => { administrativeUnit.visibility = n.getStringValue() as any ; },
    }
}
