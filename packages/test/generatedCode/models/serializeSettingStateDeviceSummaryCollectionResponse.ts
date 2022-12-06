import {SettingStateDeviceSummaryCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeSettingStateDeviceSummary} from './serializeSettingStateDeviceSummary';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSettingStateDeviceSummaryCollectionResponse(writer: SerializationWriter, settingStateDeviceSummaryCollectionResponse: SettingStateDeviceSummaryCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, settingStateDeviceSummaryCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", settingStateDeviceSummaryCollectionResponse.value as any, serializeSettingStateDeviceSummary);
}
