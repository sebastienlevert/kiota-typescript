import {ContractCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeContract} from './serializeContract';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeContractCollectionResponse(writer: SerializationWriter, contractCollectionResponse: ContractCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, contractCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", contractCollectionResponse.value as any, serializeContract);
}
