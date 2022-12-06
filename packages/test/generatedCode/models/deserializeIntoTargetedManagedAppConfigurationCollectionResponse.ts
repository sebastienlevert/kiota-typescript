import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoTargetedManagedAppConfiguration} from './deserializeIntoTargetedManagedAppConfiguration';
import {TargetedManagedAppConfigurationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTargetedManagedAppConfigurationCollectionResponse(targetedManagedAppConfigurationCollectionResponse: TargetedManagedAppConfigurationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(targetedManagedAppConfigurationCollectionResponse),
        "value": n => { targetedManagedAppConfigurationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoTargetedManagedAppConfiguration) as any ; },
    }
}
