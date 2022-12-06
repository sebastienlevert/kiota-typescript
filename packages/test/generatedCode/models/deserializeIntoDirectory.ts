import {deserializeIntoAdministrativeUnit} from './deserializeIntoAdministrativeUnit';
import {deserializeIntoDirectoryObject} from './deserializeIntoDirectoryObject';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoIdentityProviderBase} from './deserializeIntoIdentityProviderBase';
import {Directory} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDirectory(directory: Directory | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(directory),
        "administrativeUnits": n => { directory.administrativeUnits = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAdministrativeUnit) as any ; },
        "deletedItems": n => { directory.deletedItems = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDirectoryObject) as any ; },
        "federationConfigurations": n => { directory.federationConfigurations = n.getCollectionOfObjectValuesFromMethod(deserializeIntoIdentityProviderBase) as any ; },
    }
}
