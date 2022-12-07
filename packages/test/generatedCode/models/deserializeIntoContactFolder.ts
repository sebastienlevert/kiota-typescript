import {deserializeIntoContact} from './deserializeIntoContact';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoMultiValueLegacyExtendedProperty} from './deserializeIntoMultiValueLegacyExtendedProperty';
import {deserializeIntoSingleValueLegacyExtendedProperty} from './deserializeIntoSingleValueLegacyExtendedProperty';
import {ContactFolder} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoContactFolder(contactFolder: ContactFolder | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(contactFolder),
        "childFolders": n => { contactFolder.childFolders = n.getCollectionOfObjectValuesFromMethod(deserializeIntoContactFolder) as any ; },
        "contacts": n => { contactFolder.contacts = n.getCollectionOfObjectValuesFromMethod(deserializeIntoContact) as any ; },
        "displayName": n => { contactFolder.displayName = n.getStringValue() as any ; },
        "multiValueExtendedProperties": n => { contactFolder.multiValueExtendedProperties = n.getCollectionOfObjectValuesFromMethod(deserializeIntoMultiValueLegacyExtendedProperty) as any ; },
        "parentFolderId": n => { contactFolder.parentFolderId = n.getStringValue() as any ; },
        "singleValueExtendedProperties": n => { contactFolder.singleValueExtendedProperties = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSingleValueLegacyExtendedProperty) as any ; },
        "wellKnownName": n => { contactFolder.wellKnownName = n.getStringValue() as any ; },
    }
}
