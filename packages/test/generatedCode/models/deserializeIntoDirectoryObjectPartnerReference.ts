import {deserializeIntoDirectoryObject} from './deserializeIntoDirectoryObject';
import {DirectoryObjectPartnerReference} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDirectoryObjectPartnerReference(directoryObjectPartnerReference: DirectoryObjectPartnerReference | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDirectoryObject(directoryObjectPartnerReference),
        "description": n => { directoryObjectPartnerReference.description = n.getStringValue() as any ; },
        "displayName": n => { directoryObjectPartnerReference.displayName = n.getStringValue() as any ; },
        "externalPartnerTenantId": n => { directoryObjectPartnerReference.externalPartnerTenantId = n.getStringValue() as any ; },
        "objectType": n => { directoryObjectPartnerReference.objectType = n.getStringValue() as any ; },
    }
}
