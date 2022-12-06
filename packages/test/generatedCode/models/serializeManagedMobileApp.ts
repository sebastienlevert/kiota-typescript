import {ManagedMobileApp} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeMobileAppIdentifier} from './serializeMobileAppIdentifier';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeManagedMobileApp(writer: SerializationWriter, managedMobileApp: ManagedMobileApp | undefined = {}) : void {
        serializeEntity(writer, managedMobileApp)
            writer.writeObjectValueFromMethod("mobileAppIdentifier", managedMobileApp.mobileAppIdentifier as any, serializeMobileAppIdentifier);
            writer.writeStringValue("version", managedMobileApp.version);
}
