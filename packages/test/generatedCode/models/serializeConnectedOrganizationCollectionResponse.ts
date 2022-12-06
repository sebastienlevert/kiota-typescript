import {ConnectedOrganizationCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeConnectedOrganization} from './serializeConnectedOrganization';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeConnectedOrganizationCollectionResponse(writer: SerializationWriter, connectedOrganizationCollectionResponse: ConnectedOrganizationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, connectedOrganizationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", connectedOrganizationCollectionResponse.value as any, serializeConnectedOrganization);
}
