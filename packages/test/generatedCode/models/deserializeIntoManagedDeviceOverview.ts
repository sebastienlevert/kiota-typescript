import {deserializeIntoDeviceExchangeAccessStateSummary} from './deserializeIntoDeviceExchangeAccessStateSummary';
import {deserializeIntoDeviceOperatingSystemSummary} from './deserializeIntoDeviceOperatingSystemSummary';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {ManagedDeviceOverview} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedDeviceOverview(managedDeviceOverview: ManagedDeviceOverview | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(managedDeviceOverview),
        "deviceExchangeAccessStateSummary": n => { managedDeviceOverview.deviceExchangeAccessStateSummary = n.getObject(deserializeIntoDeviceExchangeAccessStateSummary) as any ; },
        "deviceOperatingSystemSummary": n => { managedDeviceOverview.deviceOperatingSystemSummary = n.getObject(deserializeIntoDeviceOperatingSystemSummary) as any ; },
        "dualEnrolledDeviceCount": n => { managedDeviceOverview.dualEnrolledDeviceCount = n.getNumberValue() as any ; },
        "enrolledDeviceCount": n => { managedDeviceOverview.enrolledDeviceCount = n.getNumberValue() as any ; },
        "mdmEnrolledCount": n => { managedDeviceOverview.mdmEnrolledCount = n.getNumberValue() as any ; },
    }
}
