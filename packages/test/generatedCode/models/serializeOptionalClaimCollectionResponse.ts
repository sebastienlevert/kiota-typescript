import {OptionalClaimCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeOptionalClaim} from './serializeOptionalClaim';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOptionalClaimCollectionResponse(writer: SerializationWriter, optionalClaimCollectionResponse: OptionalClaimCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, optionalClaimCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", optionalClaimCollectionResponse.value as any, serializeOptionalClaim);
}
