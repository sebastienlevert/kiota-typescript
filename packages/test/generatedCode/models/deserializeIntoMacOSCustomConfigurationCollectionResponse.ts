import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoMacOSCustomConfiguration} from './deserializeIntoMacOSCustomConfiguration';
import {MacOSCustomConfigurationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMacOSCustomConfigurationCollectionResponse(macOSCustomConfigurationCollectionResponse: MacOSCustomConfigurationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(macOSCustomConfigurationCollectionResponse),
        "value": n => { macOSCustomConfigurationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoMacOSCustomConfiguration) as any ; },
    }
}
