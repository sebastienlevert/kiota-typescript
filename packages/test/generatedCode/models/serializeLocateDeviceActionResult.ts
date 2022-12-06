import {LocateDeviceActionResult} from './index';
import {serializeDeviceActionResult} from './serializeDeviceActionResult';
import {serializeDeviceGeoLocation} from './serializeDeviceGeoLocation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeLocateDeviceActionResult(writer: SerializationWriter, locateDeviceActionResult: LocateDeviceActionResult | undefined = {}) : void {
        serializeDeviceActionResult(writer, locateDeviceActionResult)
            writer.writeObjectValueFromMethod("deviceLocation", locateDeviceActionResult.deviceLocation as any, serializeDeviceGeoLocation);
}
