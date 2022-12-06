import {ItemAnalytics} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeItemActivityStat} from './serializeItemActivityStat';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeItemAnalytics(writer: SerializationWriter, itemAnalytics: ItemAnalytics | undefined = {}) : void {
        serializeEntity(writer, itemAnalytics)
            writer.writeObjectValueFromMethod("allTime", itemAnalytics.allTime as any, serializeItemActivityStat);
            writer.writeCollectionOfObjectValuesFromMethod("itemActivityStats", itemAnalytics.itemActivityStats as any, serializeItemActivityStat);
            writer.writeObjectValueFromMethod("lastSevenDays", itemAnalytics.lastSevenDays as any, serializeItemActivityStat);
}
