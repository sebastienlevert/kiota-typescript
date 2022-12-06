import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoSettingSource} from './deserializeIntoSettingSource';
import {SettingSourceCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSettingSourceCollectionResponse(settingSourceCollectionResponse: SettingSourceCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(settingSourceCollectionResponse),
        "value": n => { settingSourceCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSettingSource) as any ; },
    }
}
