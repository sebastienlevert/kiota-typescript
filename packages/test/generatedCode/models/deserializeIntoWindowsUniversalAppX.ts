import {deserializeIntoMobileLobApp} from './deserializeIntoMobileLobApp';
import {deserializeIntoWindowsMinimumOperatingSystem} from './deserializeIntoWindowsMinimumOperatingSystem';
import {WindowsUniversalAppX} from './index';
import {WindowsArchitecture} from './windowsArchitecture';
import {WindowsDeviceType} from './windowsDeviceType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsUniversalAppX(windowsUniversalAppX: WindowsUniversalAppX | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoMobileLobApp(windowsUniversalAppX),
        "applicableArchitectures": n => { windowsUniversalAppX.applicableArchitectures = n.getEnumValue<WindowsArchitecture>(WindowsArchitecture) as any ; },
        "applicableDeviceTypes": n => { windowsUniversalAppX.applicableDeviceTypes = n.getEnumValue<WindowsDeviceType>(WindowsDeviceType) as any ; },
        "identityName": n => { windowsUniversalAppX.identityName = n.getStringValue() as any ; },
        "identityPublisherHash": n => { windowsUniversalAppX.identityPublisherHash = n.getStringValue() as any ; },
        "identityResourceIdentifier": n => { windowsUniversalAppX.identityResourceIdentifier = n.getStringValue() as any ; },
        "identityVersion": n => { windowsUniversalAppX.identityVersion = n.getStringValue() as any ; },
        "isBundle": n => { windowsUniversalAppX.isBundle = n.getBooleanValue() as any ; },
        "minimumSupportedOperatingSystem": n => { windowsUniversalAppX.minimumSupportedOperatingSystem = n.getObject(deserializeIntoWindowsMinimumOperatingSystem) as any ; },
    }
}
