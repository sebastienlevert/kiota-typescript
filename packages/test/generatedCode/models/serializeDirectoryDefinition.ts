import {DirectoryDefinitionDiscoverabilities} from './directoryDefinitionDiscoverabilities';
import {DirectoryDefinition} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeObjectDefinition} from './serializeObjectDefinition';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDirectoryDefinition(writer: SerializationWriter, directoryDefinition: DirectoryDefinition | undefined = {}) : void {
        serializeEntity(writer, directoryDefinition)
            writer.writeEnumValue<DirectoryDefinitionDiscoverabilities>("discoverabilities", directoryDefinition.discoverabilities);
            writer.writeDateValue("discoveryDateTime", directoryDefinition.discoveryDateTime);
            writer.writeStringValue("name", directoryDefinition.name);
            writer.writeCollectionOfObjectValuesFromMethod("objects", directoryDefinition.objects as any, serializeObjectDefinition);
            writer.writeBooleanValue("readOnly", directoryDefinition.readOnly);
            writer.writeStringValue("version", directoryDefinition.version);
}
