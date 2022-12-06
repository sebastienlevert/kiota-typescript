import {serializeBaseCollectionPaginationCountResponse} from '../../../models/serializeBaseCollectionPaginationCountResponse';
import {serializeTimeZoneInformation} from '../../../models/serializeTimeZoneInformation';
import {SupportedTimeZonesResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSupportedTimeZonesResponse(writer: SerializationWriter, supportedTimeZonesResponse: SupportedTimeZonesResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, supportedTimeZonesResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", supportedTimeZonesResponse.value as any, serializeTimeZoneInformation);
}
