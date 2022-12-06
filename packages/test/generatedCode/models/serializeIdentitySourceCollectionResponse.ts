import {IdentitySourceCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeIdentitySource} from './serializeIdentitySource';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIdentitySourceCollectionResponse(writer: SerializationWriter, identitySourceCollectionResponse: IdentitySourceCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, identitySourceCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", identitySourceCollectionResponse.value as any, serializeIdentitySource);
}
