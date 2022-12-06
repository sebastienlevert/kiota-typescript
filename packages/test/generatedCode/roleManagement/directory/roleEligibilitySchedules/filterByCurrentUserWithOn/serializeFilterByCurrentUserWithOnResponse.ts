import {serializeBaseCollectionPaginationCountResponse} from '../../../../models/serializeBaseCollectionPaginationCountResponse';
import {serializeUnifiedRoleEligibilitySchedule} from '../../../../models/serializeUnifiedRoleEligibilitySchedule';
import {FilterByCurrentUserWithOnResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFilterByCurrentUserWithOnResponse(writer: SerializationWriter, filterByCurrentUserWithOnResponse: FilterByCurrentUserWithOnResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, filterByCurrentUserWithOnResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", filterByCurrentUserWithOnResponse.value as any, serializeUnifiedRoleEligibilitySchedule);
}
