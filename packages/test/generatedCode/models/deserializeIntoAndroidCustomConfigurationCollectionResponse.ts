import {deserializeIntoAndroidCustomConfiguration} from './deserializeIntoAndroidCustomConfiguration';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {AndroidCustomConfigurationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAndroidCustomConfigurationCollectionResponse(androidCustomConfigurationCollectionResponse: AndroidCustomConfigurationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(androidCustomConfigurationCollectionResponse),
        "value": n => { androidCustomConfigurationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAndroidCustomConfiguration) as any ; },
    }
}
