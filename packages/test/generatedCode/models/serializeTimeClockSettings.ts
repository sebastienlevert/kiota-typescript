import {TimeClockSettings} from './index';
import {serializeGeoCoordinates} from './serializeGeoCoordinates';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTimeClockSettings(writer: SerializationWriter, timeClockSettings: TimeClockSettings | undefined = {}) : void {
            writer.writeObjectValueFromMethod("approvedLocation", timeClockSettings.approvedLocation as any, serializeGeoCoordinates);
}
