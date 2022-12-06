import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoWindows10CustomConfiguration} from './deserializeIntoWindows10CustomConfiguration';
import {Windows10CustomConfigurationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindows10CustomConfigurationCollectionResponse(windows10CustomConfigurationCollectionResponse: Windows10CustomConfigurationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(windows10CustomConfigurationCollectionResponse),
        "value": n => { windows10CustomConfigurationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoWindows10CustomConfiguration) as any ; },
    }
}
