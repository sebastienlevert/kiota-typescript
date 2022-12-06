import {deserializeIntoDirectoryObject} from './deserializeIntoDirectoryObject';
import {deserializeIntoScopedRoleMembership} from './deserializeIntoScopedRoleMembership';
import {DirectoryRole} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDirectoryRole(directoryRole: DirectoryRole | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDirectoryObject(directoryRole),
        "description": n => { directoryRole.description = n.getStringValue() as any ; },
        "displayName": n => { directoryRole.displayName = n.getStringValue() as any ; },
        "members": n => { directoryRole.members = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDirectoryObject) as any ; },
        "roleTemplateId": n => { directoryRole.roleTemplateId = n.getStringValue() as any ; },
        "scopedMembers": n => { directoryRole.scopedMembers = n.getCollectionOfObjectValuesFromMethod(deserializeIntoScopedRoleMembership) as any ; },
    }
}
