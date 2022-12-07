import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoObjectDefinition} from './deserializeIntoObjectDefinition';
import {DirectoryDefinitionDiscoverabilities} from './directoryDefinitionDiscoverabilities';
import {DirectoryDefinition} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDirectoryDefinition(directoryDefinition: DirectoryDefinition | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(directoryDefinition),
        "discoverabilities": n => { directoryDefinition.discoverabilities = n.getEnumValue<DirectoryDefinitionDiscoverabilities>(DirectoryDefinitionDiscoverabilities) as any ; },
        "discoveryDateTime": n => { directoryDefinition.discoveryDateTime = n.getDateValue() as any ; },
        "name": n => { directoryDefinition.name = n.getStringValue() as any ; },
        "objects": n => { directoryDefinition.objects = n.getCollectionOfObjectValuesFromMethod(deserializeIntoObjectDefinition) as any ; },
        "readOnly": n => { directoryDefinition.readOnly = n.getBooleanValue() as any ; },
        "version": n => { directoryDefinition.version = n.getStringValue() as any ; },
    }
}
