import {deserializeIntoMobileApp} from './deserializeIntoMobileApp';
import {ManagedApp} from './index';
import {ManagedAppAvailability} from './managedAppAvailability';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedApp(managedApp: ManagedApp | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoMobileApp(managedApp),
        "appAvailability": n => { managedApp.appAvailability = n.getEnumValue<ManagedAppAvailability>(ManagedAppAvailability) as any ; },
        "version": n => { managedApp.version = n.getStringValue() as any ; },
    }
}
