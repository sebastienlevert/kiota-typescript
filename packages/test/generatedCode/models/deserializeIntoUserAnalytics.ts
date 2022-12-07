import {deserializeIntoActivityStatistics} from './deserializeIntoActivityStatistics';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoSettings} from './deserializeIntoSettings';
import {UserAnalytics} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserAnalytics(userAnalytics: UserAnalytics | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(userAnalytics),
        "activityStatistics": n => { userAnalytics.activityStatistics = n.getCollectionOfObjectValuesFromMethod(deserializeIntoActivityStatistics) as any ; },
        "settings": n => { userAnalytics.settings = n.getObject(deserializeIntoSettings) as any ; },
    }
}
