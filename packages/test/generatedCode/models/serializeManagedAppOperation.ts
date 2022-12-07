import {ManagedAppOperation} from './index';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeManagedAppOperation(writer: SerializationWriter, managedAppOperation: ManagedAppOperation | undefined = {}) : void {
        serializeEntity(writer, managedAppOperation)
            writer.writeStringValue("displayName", managedAppOperation.displayName);
            writer.writeDateValue("lastModifiedDateTime", managedAppOperation.lastModifiedDateTime);
            writer.writeStringValue("state", managedAppOperation.state);
            writer.writeStringValue("version", managedAppOperation.version);
}
