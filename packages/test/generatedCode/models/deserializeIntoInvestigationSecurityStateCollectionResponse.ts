import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoInvestigationSecurityState} from './deserializeIntoInvestigationSecurityState';
import {InvestigationSecurityStateCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoInvestigationSecurityStateCollectionResponse(investigationSecurityStateCollectionResponse: InvestigationSecurityStateCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(investigationSecurityStateCollectionResponse),
        "value": n => { investigationSecurityStateCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoInvestigationSecurityState) as any ; },
    }
}
