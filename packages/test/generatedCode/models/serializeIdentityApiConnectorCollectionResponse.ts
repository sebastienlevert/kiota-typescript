import {IdentityApiConnectorCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeIdentityApiConnector} from './serializeIdentityApiConnector';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIdentityApiConnectorCollectionResponse(writer: SerializationWriter, identityApiConnectorCollectionResponse: IdentityApiConnectorCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, identityApiConnectorCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", identityApiConnectorCollectionResponse.value as any, serializeIdentityApiConnector);
}
