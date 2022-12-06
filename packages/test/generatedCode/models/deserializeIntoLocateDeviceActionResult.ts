import {deserializeIntoDeviceActionResult} from './deserializeIntoDeviceActionResult';
import {deserializeIntoDeviceGeoLocation} from './deserializeIntoDeviceGeoLocation';
import {LocateDeviceActionResult} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoLocateDeviceActionResult(locateDeviceActionResult: LocateDeviceActionResult | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceActionResult(locateDeviceActionResult),
        "deviceLocation": n => { locateDeviceActionResult.deviceLocation = n.getObject(deserializeIntoDeviceGeoLocation) as any ; },
    }
}
