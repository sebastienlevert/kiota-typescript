import {deserializeIntoGeoCoordinates} from './deserializeIntoGeoCoordinates';
import {TimeClockSettings} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTimeClockSettings(timeClockSettings: TimeClockSettings | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "approvedLocation": n => { timeClockSettings.approvedLocation = n.getObject(deserializeIntoGeoCoordinates) as any ; },
    }
}
