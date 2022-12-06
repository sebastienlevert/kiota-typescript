import {SettingSourceCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeSettingSource} from './serializeSettingSource';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSettingSourceCollectionResponse(writer: SerializationWriter, settingSourceCollectionResponse: SettingSourceCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, settingSourceCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", settingSourceCollectionResponse.value as any, serializeSettingSource);
}
