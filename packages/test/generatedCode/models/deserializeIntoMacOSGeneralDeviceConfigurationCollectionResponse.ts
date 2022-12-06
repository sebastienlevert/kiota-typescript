import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoMacOSGeneralDeviceConfiguration} from './deserializeIntoMacOSGeneralDeviceConfiguration';
import {MacOSGeneralDeviceConfigurationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMacOSGeneralDeviceConfigurationCollectionResponse(macOSGeneralDeviceConfigurationCollectionResponse: MacOSGeneralDeviceConfigurationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(macOSGeneralDeviceConfigurationCollectionResponse),
        "value": n => { macOSGeneralDeviceConfigurationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoMacOSGeneralDeviceConfiguration) as any ; },
    }
}
