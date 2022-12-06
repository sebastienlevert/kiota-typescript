import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoOmaSetting} from './deserializeIntoOmaSetting';
import {OmaSettingCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOmaSettingCollectionResponse(omaSettingCollectionResponse: OmaSettingCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(omaSettingCollectionResponse),
        "value": n => { omaSettingCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoOmaSetting) as any ; },
    }
}
