import {ChromeOSDeviceProperty} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoChromeOSDeviceProperty(chromeOSDeviceProperty: ChromeOSDeviceProperty | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "name": n => { chromeOSDeviceProperty.name = n.getStringValue() as any ; },
        "updatable": n => { chromeOSDeviceProperty.updatable = n.getBooleanValue() as any ; },
        "value": n => { chromeOSDeviceProperty.value = n.getStringValue() as any ; },
        "valueType": n => { chromeOSDeviceProperty.valueType = n.getStringValue() as any ; },
    }
}
