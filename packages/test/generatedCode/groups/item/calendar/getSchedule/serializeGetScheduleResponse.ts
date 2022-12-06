import {serializeBaseCollectionPaginationCountResponse} from '../../../../models/serializeBaseCollectionPaginationCountResponse';
import {serializeScheduleInformation} from '../../../../models/serializeScheduleInformation';
import {GetScheduleResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetScheduleResponse(writer: SerializationWriter, getScheduleResponse: GetScheduleResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, getScheduleResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", getScheduleResponse.value as any, serializeScheduleInformation);
}
