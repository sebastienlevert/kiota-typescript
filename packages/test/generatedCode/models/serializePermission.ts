import {Permission} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeIdentitySet} from './serializeIdentitySet';
import {serializeItemReference} from './serializeItemReference';
import {serializeSharePointIdentitySet} from './serializeSharePointIdentitySet';
import {serializeSharingInvitation} from './serializeSharingInvitation';
import {serializeSharingLink} from './serializeSharingLink';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePermission(writer: SerializationWriter, permission: Permission | undefined = {}) : void {
        serializeEntity(writer, permission)
            writer.writeDateValue("expirationDateTime", permission.expirationDateTime);
            writer.writeObjectValueFromMethod("grantedTo", permission.grantedTo as any, serializeIdentitySet);
            writer.writeCollectionOfObjectValuesFromMethod("grantedToIdentities", permission.grantedToIdentities as any, serializeIdentitySet);
            writer.writeCollectionOfObjectValuesFromMethod("grantedToIdentitiesV2", permission.grantedToIdentitiesV2 as any, serializeSharePointIdentitySet);
            writer.writeObjectValueFromMethod("grantedToV2", permission.grantedToV2 as any, serializeSharePointIdentitySet);
            writer.writeBooleanValue("hasPassword", permission.hasPassword);
            writer.writeObjectValueFromMethod("inheritedFrom", permission.inheritedFrom as any, serializeItemReference);
            writer.writeObjectValueFromMethod("invitation", permission.invitation as any, serializeSharingInvitation);
            writer.writeObjectValueFromMethod("link", permission.link as any, serializeSharingLink);
            writer.writeCollectionOfPrimitiveValues<string>("roles", permission.roles);
            writer.writeStringValue("shareId", permission.shareId);
}
