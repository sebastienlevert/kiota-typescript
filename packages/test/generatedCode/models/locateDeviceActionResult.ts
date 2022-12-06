import {DeviceActionResult, DeviceGeoLocation} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface LocateDeviceActionResult extends DeviceActionResult, Partial<Parsable> {
    /** device location */
    deviceLocation?: DeviceGeoLocation;
}
