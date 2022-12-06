import {DetectedAppPlatformType} from './detectedAppPlatformType';
import {DetectedApp} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeManagedDevice} from './serializeManagedDevice';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDetectedApp(writer: SerializationWriter, detectedApp: DetectedApp | undefined = {}) : void {
        serializeEntity(writer, detectedApp)
            writer.writeNumberValue("deviceCount", detectedApp.deviceCount);
            writer.writeStringValue("displayName", detectedApp.displayName);
            writer.writeCollectionOfObjectValuesFromMethod("managedDevices", detectedApp.managedDevices as any, serializeManagedDevice);
            writer.writeEnumValue<DetectedAppPlatformType>("platform", detectedApp.platform);
            writer.writeStringValue("publisher", detectedApp.publisher);
            writer.writeNumberValue("sizeInByte", detectedApp.sizeInByte);
            writer.writeStringValue("version", detectedApp.version);
}
