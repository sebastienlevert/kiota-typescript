import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoIosUpdateConfiguration} from './deserializeIntoIosUpdateConfiguration';
import {IosUpdateConfigurationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIosUpdateConfigurationCollectionResponse(iosUpdateConfigurationCollectionResponse: IosUpdateConfigurationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(iosUpdateConfigurationCollectionResponse),
        "value": n => { iosUpdateConfigurationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoIosUpdateConfiguration) as any ; },
    }
}
