import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoSettingValue} from './deserializeIntoSettingValue';
import {SettingValueCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSettingValueCollectionResponse(settingValueCollectionResponse: SettingValueCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(settingValueCollectionResponse),
        "value": n => { settingValueCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSettingValue) as any ; },
    }
}
