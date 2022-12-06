import {SettingTemplateValueCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeSettingTemplateValue} from './serializeSettingTemplateValue';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSettingTemplateValueCollectionResponse(writer: SerializationWriter, settingTemplateValueCollectionResponse: SettingTemplateValueCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, settingTemplateValueCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", settingTemplateValueCollectionResponse.value as any, serializeSettingTemplateValue);
}
