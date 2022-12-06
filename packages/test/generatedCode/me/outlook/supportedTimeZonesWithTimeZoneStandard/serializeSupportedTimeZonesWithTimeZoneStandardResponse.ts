import {serializeBaseCollectionPaginationCountResponse} from '../../../models/serializeBaseCollectionPaginationCountResponse';
import {serializeTimeZoneInformation} from '../../../models/serializeTimeZoneInformation';
import {SupportedTimeZonesWithTimeZoneStandardResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSupportedTimeZonesWithTimeZoneStandardResponse(writer: SerializationWriter, supportedTimeZonesWithTimeZoneStandardResponse: SupportedTimeZonesWithTimeZoneStandardResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, supportedTimeZonesWithTimeZoneStandardResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", supportedTimeZonesWithTimeZoneStandardResponse.value as any, serializeTimeZoneInformation);
}
