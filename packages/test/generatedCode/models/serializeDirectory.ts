import {Directory} from './index';
import {serializeAdministrativeUnit} from './serializeAdministrativeUnit';
import {serializeDirectoryObject} from './serializeDirectoryObject';
import {serializeEntity} from './serializeEntity';
import {serializeIdentityProviderBase} from './serializeIdentityProviderBase';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDirectory(writer: SerializationWriter, directory: Directory | undefined = {}) : void {
        serializeEntity(writer, directory)
            writer.writeCollectionOfObjectValuesFromMethod("administrativeUnits", directory.administrativeUnits as any, serializeAdministrativeUnit);
            writer.writeCollectionOfObjectValuesFromMethod("deletedItems", directory.deletedItems as any, serializeDirectoryObject);
            writer.writeCollectionOfObjectValuesFromMethod("federationConfigurations", directory.federationConfigurations as any, serializeIdentityProviderBase);
}
