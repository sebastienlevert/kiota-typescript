import {ManagedAppConfiguration} from './index';
import {serializeKeyValuePair} from './serializeKeyValuePair';
import {serializeManagedAppPolicy} from './serializeManagedAppPolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeManagedAppConfiguration(writer: SerializationWriter, managedAppConfiguration: ManagedAppConfiguration | undefined = {}) : void {
        serializeManagedAppPolicy(writer, managedAppConfiguration)
            writer.writeCollectionOfObjectValuesFromMethod("customSettings", managedAppConfiguration.customSettings as any, serializeKeyValuePair);
}
