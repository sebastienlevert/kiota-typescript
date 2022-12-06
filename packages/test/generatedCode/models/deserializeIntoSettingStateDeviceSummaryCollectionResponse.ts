import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoSettingStateDeviceSummary} from './deserializeIntoSettingStateDeviceSummary';
import {SettingStateDeviceSummaryCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSettingStateDeviceSummaryCollectionResponse(settingStateDeviceSummaryCollectionResponse: SettingStateDeviceSummaryCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(settingStateDeviceSummaryCollectionResponse),
        "value": n => { settingStateDeviceSummaryCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSettingStateDeviceSummary) as any ; },
    }
}
