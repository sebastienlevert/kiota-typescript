import {deserializeIntoEntity} from './deserializeIntoEntity';
import {ManagedAppOperation} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedAppOperation(managedAppOperation: ManagedAppOperation | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(managedAppOperation),
        "displayName": n => { managedAppOperation.displayName = n.getStringValue() as any ; },
        "lastModifiedDateTime": n => { managedAppOperation.lastModifiedDateTime = n.getDateValue() as any ; },
        "state": n => { managedAppOperation.state = n.getStringValue() as any ; },
        "version": n => { managedAppOperation.version = n.getStringValue() as any ; },
    }
}
