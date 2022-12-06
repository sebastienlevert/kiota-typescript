import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoManagedDevice} from './deserializeIntoManagedDevice';
import {DetectedAppPlatformType} from './detectedAppPlatformType';
import {DetectedApp} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDetectedApp(detectedApp: DetectedApp | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(detectedApp),
        "deviceCount": n => { detectedApp.deviceCount = n.getNumberValue() as any ; },
        "displayName": n => { detectedApp.displayName = n.getStringValue() as any ; },
        "managedDevices": n => { detectedApp.managedDevices = n.getCollectionOfObjectValuesFromMethod(deserializeIntoManagedDevice) as any ; },
        "platform": n => { detectedApp.platform = n.getEnumValue<DetectedAppPlatformType>(DetectedAppPlatformType) as any ; },
        "publisher": n => { detectedApp.publisher = n.getStringValue() as any ; },
        "sizeInByte": n => { detectedApp.sizeInByte = n.getNumberValue() as any ; },
        "version": n => { detectedApp.version = n.getStringValue() as any ; },
    }
}
