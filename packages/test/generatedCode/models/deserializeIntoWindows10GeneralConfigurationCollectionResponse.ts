import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoWindows10GeneralConfiguration} from './deserializeIntoWindows10GeneralConfiguration';
import {Windows10GeneralConfigurationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindows10GeneralConfigurationCollectionResponse(windows10GeneralConfigurationCollectionResponse: Windows10GeneralConfigurationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(windows10GeneralConfigurationCollectionResponse),
        "value": n => { windows10GeneralConfigurationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoWindows10GeneralConfiguration) as any ; },
    }
}
