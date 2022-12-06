import {deserializeIntoEntity} from './deserializeIntoEntity';
import {ManagedAppStatus} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedAppStatus(managedAppStatus: ManagedAppStatus | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(managedAppStatus),
        "displayName": n => { managedAppStatus.displayName = n.getStringValue() as any ; },
        "version": n => { managedAppStatus.version = n.getStringValue() as any ; },
    }
}
