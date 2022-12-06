import {AndroidMobileAppIdentifier} from './index';
import {serializeMobileAppIdentifier} from './serializeMobileAppIdentifier';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAndroidMobileAppIdentifier(writer: SerializationWriter, androidMobileAppIdentifier: AndroidMobileAppIdentifier | undefined = {}) : void {
        serializeMobileAppIdentifier(writer, androidMobileAppIdentifier)
            writer.writeStringValue("packageId", androidMobileAppIdentifier.packageId);
}
