import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoGroupSetting} from './deserializeIntoGroupSetting';
import {GroupSettingCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGroupSettingCollectionResponse(groupSettingCollectionResponse: GroupSettingCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(groupSettingCollectionResponse),
        "value": n => { groupSettingCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoGroupSetting) as any ; },
    }
}
