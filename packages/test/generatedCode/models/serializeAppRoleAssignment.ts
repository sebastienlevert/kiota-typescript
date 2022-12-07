import {AppRoleAssignment} from './index';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAppRoleAssignment(writer: SerializationWriter, appRoleAssignment: AppRoleAssignment | undefined = {}) : void {
        serializeEntity(writer, appRoleAssignment)
            writer.writeStringValue("appRoleId", appRoleAssignment.appRoleId);
            writer.writeDateValue("creationTimestamp", appRoleAssignment.creationTimestamp);
            writer.writeStringValue("principalDisplayName", appRoleAssignment.principalDisplayName);
            writer.writeStringValue("principalId", appRoleAssignment.principalId);
            writer.writeStringValue("principalType", appRoleAssignment.principalType);
            writer.writeStringValue("resourceDisplayName", appRoleAssignment.resourceDisplayName);
            writer.writeStringValue("resourceId", appRoleAssignment.resourceId);
}
