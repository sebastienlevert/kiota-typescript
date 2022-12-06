import {OrganizationCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeOrganization} from './serializeOrganization';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOrganizationCollectionResponse(writer: SerializationWriter, organizationCollectionResponse: OrganizationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, organizationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", organizationCollectionResponse.value as any, serializeOrganization);
}
