import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoMobileAppIdentifier} from './deserializeIntoMobileAppIdentifier';
import {ManagedMobileApp} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedMobileApp(managedMobileApp: ManagedMobileApp | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(managedMobileApp),
        "mobileAppIdentifier": n => { managedMobileApp.mobileAppIdentifier = n.getObject(deserializeIntoMobileAppIdentifier) as any ; },
        "version": n => { managedMobileApp.version = n.getStringValue() as any ; },
    }
}
