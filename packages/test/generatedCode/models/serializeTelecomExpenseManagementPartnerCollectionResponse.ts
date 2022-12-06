import {TelecomExpenseManagementPartnerCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeTelecomExpenseManagementPartner} from './serializeTelecomExpenseManagementPartner';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTelecomExpenseManagementPartnerCollectionResponse(writer: SerializationWriter, telecomExpenseManagementPartnerCollectionResponse: TelecomExpenseManagementPartnerCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, telecomExpenseManagementPartnerCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", telecomExpenseManagementPartnerCollectionResponse.value as any, serializeTelecomExpenseManagementPartner);
}
