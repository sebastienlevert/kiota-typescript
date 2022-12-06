import {GroupSettingCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeGroupSetting} from './serializeGroupSetting';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGroupSettingCollectionResponse(writer: SerializationWriter, groupSettingCollectionResponse: GroupSettingCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, groupSettingCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", groupSettingCollectionResponse.value as any, serializeGroupSetting);
}
