import {deserializeIntoKeyValuePair} from './deserializeIntoKeyValuePair';
import {deserializeIntoManagedAppPolicy} from './deserializeIntoManagedAppPolicy';
import {ManagedAppConfiguration} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedAppConfiguration(managedAppConfiguration: ManagedAppConfiguration | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoManagedAppPolicy(managedAppConfiguration),
        "customSettings": n => { managedAppConfiguration.customSettings = n.getCollectionOfObjectValuesFromMethod(deserializeIntoKeyValuePair) as any ; },
    }
}
