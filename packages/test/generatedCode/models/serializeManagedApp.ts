import {ManagedApp} from './index';
import {ManagedAppAvailability} from './managedAppAvailability';
import {serializeMobileApp} from './serializeMobileApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeManagedApp(writer: SerializationWriter, managedApp: ManagedApp | undefined = {}) : void {
        serializeMobileApp(writer, managedApp)
            writer.writeEnumValue<ManagedAppAvailability>("appAvailability", managedApp.appAvailability);
            writer.writeStringValue("version", managedApp.version);
}
