import {ManagedAppPolicy} from './index';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeManagedAppPolicy(writer: SerializationWriter, managedAppPolicy: ManagedAppPolicy | undefined = {}) : void {
        serializeEntity(writer, managedAppPolicy)
            writer.writeDateValue("createdDateTime", managedAppPolicy.createdDateTime);
            writer.writeStringValue("description", managedAppPolicy.description);
            writer.writeStringValue("displayName", managedAppPolicy.displayName);
            writer.writeDateValue("lastModifiedDateTime", managedAppPolicy.lastModifiedDateTime);
            writer.writeCollectionOfPrimitiveValues<string>("roleScopeTagIds", managedAppPolicy.roleScopeTagIds);
            writer.writeStringValue("version", managedAppPolicy.version);
}
