import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoTimeZoneInformation} from '../../../models/deserializeIntoTimeZoneInformation';
import {SupportedTimeZonesResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSupportedTimeZonesResponse(supportedTimeZonesResponse: SupportedTimeZonesResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(supportedTimeZonesResponse),
        "value": n => { supportedTimeZonesResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoTimeZoneInformation) as any ; },
    }
}
