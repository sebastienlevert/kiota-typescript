import {TokenIssuancePolicyCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeTokenIssuancePolicy} from './serializeTokenIssuancePolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTokenIssuancePolicyCollectionResponse(writer: SerializationWriter, tokenIssuancePolicyCollectionResponse: TokenIssuancePolicyCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, tokenIssuancePolicyCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", tokenIssuancePolicyCollectionResponse.value as any, serializeTokenIssuancePolicy);
}
