import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoSettingTemplateValue} from './deserializeIntoSettingTemplateValue';
import {SettingTemplateValueCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSettingTemplateValueCollectionResponse(settingTemplateValueCollectionResponse: SettingTemplateValueCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(settingTemplateValueCollectionResponse),
        "value": n => { settingTemplateValueCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSettingTemplateValue) as any ; },
    }
}
