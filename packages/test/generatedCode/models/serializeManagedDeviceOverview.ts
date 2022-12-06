import {ManagedDeviceOverview} from './index';
import {serializeDeviceExchangeAccessStateSummary} from './serializeDeviceExchangeAccessStateSummary';
import {serializeDeviceOperatingSystemSummary} from './serializeDeviceOperatingSystemSummary';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeManagedDeviceOverview(writer: SerializationWriter, managedDeviceOverview: ManagedDeviceOverview | undefined = {}) : void {
        serializeEntity(writer, managedDeviceOverview)
            writer.writeObjectValueFromMethod("deviceExchangeAccessStateSummary", managedDeviceOverview.deviceExchangeAccessStateSummary as any, serializeDeviceExchangeAccessStateSummary);
            writer.writeObjectValueFromMethod("deviceOperatingSystemSummary", managedDeviceOverview.deviceOperatingSystemSummary as any, serializeDeviceOperatingSystemSummary);
            writer.writeNumberValue("dualEnrolledDeviceCount", managedDeviceOverview.dualEnrolledDeviceCount);
            writer.writeNumberValue("enrolledDeviceCount", managedDeviceOverview.enrolledDeviceCount);
            writer.writeNumberValue("mdmEnrolledCount", managedDeviceOverview.mdmEnrolledCount);
}
