import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoContract} from './deserializeIntoContract';
import {ContractCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoContractCollectionResponse(contractCollectionResponse: ContractCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(contractCollectionResponse),
        "value": n => { contractCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoContract) as any ; },
    }
}
