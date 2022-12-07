import {deserializeIntoEntity} from './deserializeIntoEntity';
import {ManagedAppPolicy} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedAppPolicy(managedAppPolicy: ManagedAppPolicy | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(managedAppPolicy),
        "createdDateTime": n => { managedAppPolicy.createdDateTime = n.getDateValue() as any ; },
        "description": n => { managedAppPolicy.description = n.getStringValue() as any ; },
        "displayName": n => { managedAppPolicy.displayName = n.getStringValue() as any ; },
        "lastModifiedDateTime": n => { managedAppPolicy.lastModifiedDateTime = n.getDateValue() as any ; },
        "roleScopeTagIds": n => { managedAppPolicy.roleScopeTagIds = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "version": n => { managedAppPolicy.version = n.getStringValue() as any ; },
    }
}
