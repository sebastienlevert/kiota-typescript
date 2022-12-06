import {ClaimsMappingPolicyCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeClaimsMappingPolicy} from './serializeClaimsMappingPolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeClaimsMappingPolicyCollectionResponse(writer: SerializationWriter, claimsMappingPolicyCollectionResponse: ClaimsMappingPolicyCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, claimsMappingPolicyCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", claimsMappingPolicyCollectionResponse.value as any, serializeClaimsMappingPolicy);
}
