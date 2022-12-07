import {UserAnalytics} from './index';
import {serializeActivityStatistics} from './serializeActivityStatistics';
import {serializeEntity} from './serializeEntity';
import {serializeSettings} from './serializeSettings';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserAnalytics(writer: SerializationWriter, userAnalytics: UserAnalytics | undefined = {}) : void {
        serializeEntity(writer, userAnalytics)
            writer.writeCollectionOfObjectValuesFromMethod("activityStatistics", userAnalytics.activityStatistics as any, serializeActivityStatistics);
            writer.writeObjectValueFromMethod("settings", userAnalytics.settings as any, serializeSettings);
}
