import {serializeBaseCollectionPaginationCountResponse} from '../../../../../models/serializeBaseCollectionPaginationCountResponse';
import {serializeItemActivityStat} from '../../../../../models/serializeItemActivityStat';
import {GetActivitiesByIntervalResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetActivitiesByIntervalResponse(writer: SerializationWriter, getActivitiesByIntervalResponse: GetActivitiesByIntervalResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, getActivitiesByIntervalResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", getActivitiesByIntervalResponse.value as any, serializeItemActivityStat);
}
