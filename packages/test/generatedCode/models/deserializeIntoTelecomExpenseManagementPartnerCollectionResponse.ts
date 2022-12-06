import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoTelecomExpenseManagementPartner} from './deserializeIntoTelecomExpenseManagementPartner';
import {TelecomExpenseManagementPartnerCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTelecomExpenseManagementPartnerCollectionResponse(telecomExpenseManagementPartnerCollectionResponse: TelecomExpenseManagementPartnerCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(telecomExpenseManagementPartnerCollectionResponse),
        "value": n => { telecomExpenseManagementPartnerCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoTelecomExpenseManagementPartner) as any ; },
    }
}
