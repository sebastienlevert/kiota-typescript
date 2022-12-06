import {deserializeIntoJson} from './deserializeIntoJson';
import {deserializeIntoManagedAppStatus} from './deserializeIntoManagedAppStatus';
import {ManagedAppStatusRaw} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedAppStatusRaw(managedAppStatusRaw: ManagedAppStatusRaw | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoManagedAppStatus(managedAppStatusRaw),
        "content": n => { managedAppStatusRaw.content = n.getObject(deserializeIntoJson) as any ; },
    }
}
