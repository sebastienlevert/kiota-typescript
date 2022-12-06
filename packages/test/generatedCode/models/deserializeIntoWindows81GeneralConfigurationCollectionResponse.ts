import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoWindows81GeneralConfiguration} from './deserializeIntoWindows81GeneralConfiguration';
import {Windows81GeneralConfigurationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindows81GeneralConfigurationCollectionResponse(windows81GeneralConfigurationCollectionResponse: Windows81GeneralConfigurationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(windows81GeneralConfigurationCollectionResponse),
        "value": n => { windows81GeneralConfigurationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoWindows81GeneralConfiguration) as any ; },
    }
}
