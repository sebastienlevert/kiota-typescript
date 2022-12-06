import {TokenLifetimePolicyCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeTokenLifetimePolicy} from './serializeTokenLifetimePolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTokenLifetimePolicyCollectionResponse(writer: SerializationWriter, tokenLifetimePolicyCollectionResponse: TokenLifetimePolicyCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, tokenLifetimePolicyCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", tokenLifetimePolicyCollectionResponse.value as any, serializeTokenLifetimePolicy);
}
