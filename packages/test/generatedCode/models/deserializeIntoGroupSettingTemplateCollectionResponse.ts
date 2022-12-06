import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoGroupSettingTemplate} from './deserializeIntoGroupSettingTemplate';
import {GroupSettingTemplateCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGroupSettingTemplateCollectionResponse(groupSettingTemplateCollectionResponse: GroupSettingTemplateCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(groupSettingTemplateCollectionResponse),
        "value": n => { groupSettingTemplateCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoGroupSettingTemplate) as any ; },
    }
}
