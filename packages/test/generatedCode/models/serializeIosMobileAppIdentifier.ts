import {IosMobileAppIdentifier} from './index';
import {serializeMobileAppIdentifier} from './serializeMobileAppIdentifier';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIosMobileAppIdentifier(writer: SerializationWriter, iosMobileAppIdentifier: IosMobileAppIdentifier | undefined = {}) : void {
        serializeMobileAppIdentifier(writer, iosMobileAppIdentifier)
            writer.writeStringValue("bundleId", iosMobileAppIdentifier.bundleId);
}
