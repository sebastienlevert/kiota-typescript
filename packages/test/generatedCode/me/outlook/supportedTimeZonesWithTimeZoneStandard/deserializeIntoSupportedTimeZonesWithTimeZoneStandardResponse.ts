import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoTimeZoneInformation} from '../../../models/deserializeIntoTimeZoneInformation';
import {SupportedTimeZonesWithTimeZoneStandardResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSupportedTimeZonesWithTimeZoneStandardResponse(supportedTimeZonesWithTimeZoneStandardResponse: SupportedTimeZonesWithTimeZoneStandardResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(supportedTimeZonesWithTimeZoneStandardResponse),
        "value": n => { supportedTimeZonesWithTimeZoneStandardResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoTimeZoneInformation) as any ; },
    }
}
