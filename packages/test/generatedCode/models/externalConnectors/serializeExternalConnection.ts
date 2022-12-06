import {serializeEntity} from '../serializeEntity';
import {ConnectionState} from './connectionState';
import {ExternalConnection} from './index';
import {serializeConfiguration} from './serializeConfiguration';
import {serializeConnectionOperation} from './serializeConnectionOperation';
import {serializeExternalGroup} from './serializeExternalGroup';
import {serializeExternalItem} from './serializeExternalItem';
import {serializeSchema} from './serializeSchema';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeExternalConnection(writer: SerializationWriter, externalConnection: ExternalConnection | undefined = {}) : void {
        serializeEntity(writer, externalConnection)
            writer.writeObjectValueFromMethod("configuration", externalConnection.configuration as any, serializeConfiguration);
            writer.writeStringValue("description", externalConnection.description);
            writer.writeCollectionOfObjectValuesFromMethod("groups", externalConnection.groups as any, serializeExternalGroup);
            writer.writeCollectionOfObjectValuesFromMethod("items", externalConnection.items as any, serializeExternalItem);
            writer.writeStringValue("name", externalConnection.name);
            writer.writeCollectionOfObjectValuesFromMethod("operations", externalConnection.operations as any, serializeConnectionOperation);
            writer.writeObjectValueFromMethod("schema", externalConnection.schema as any, serializeSchema);
            writer.writeEnumValue<ConnectionState>("state", externalConnection.state);
}
