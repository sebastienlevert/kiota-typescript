import {SettingValueCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeSettingValue} from './serializeSettingValue';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSettingValueCollectionResponse(writer: SerializationWriter, settingValueCollectionResponse: SettingValueCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, settingValueCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", settingValueCollectionResponse.value as any, serializeSettingValue);
}
