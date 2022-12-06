import {GroupSettingTemplateCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeGroupSettingTemplate} from './serializeGroupSettingTemplate';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGroupSettingTemplateCollectionResponse(writer: SerializationWriter, groupSettingTemplateCollectionResponse: GroupSettingTemplateCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, groupSettingTemplateCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", groupSettingTemplateCollectionResponse.value as any, serializeGroupSettingTemplate);
}
