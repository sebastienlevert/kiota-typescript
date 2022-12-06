import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoIosCustomConfiguration} from './deserializeIntoIosCustomConfiguration';
import {IosCustomConfigurationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIosCustomConfigurationCollectionResponse(iosCustomConfigurationCollectionResponse: IosCustomConfigurationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(iosCustomConfigurationCollectionResponse),
        "value": n => { iosCustomConfigurationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoIosCustomConfiguration) as any ; },
    }
}
