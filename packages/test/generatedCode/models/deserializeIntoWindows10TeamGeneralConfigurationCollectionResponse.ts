import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoWindows10TeamGeneralConfiguration} from './deserializeIntoWindows10TeamGeneralConfiguration';
import {Windows10TeamGeneralConfigurationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindows10TeamGeneralConfigurationCollectionResponse(windows10TeamGeneralConfigurationCollectionResponse: Windows10TeamGeneralConfigurationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(windows10TeamGeneralConfigurationCollectionResponse),
        "value": n => { windows10TeamGeneralConfigurationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoWindows10TeamGeneralConfiguration) as any ; },
    }
}
