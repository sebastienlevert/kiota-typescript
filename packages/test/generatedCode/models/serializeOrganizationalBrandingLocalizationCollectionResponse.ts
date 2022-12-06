import {OrganizationalBrandingLocalizationCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeOrganizationalBrandingLocalization} from './serializeOrganizationalBrandingLocalization';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOrganizationalBrandingLocalizationCollectionResponse(writer: SerializationWriter, organizationalBrandingLocalizationCollectionResponse: OrganizationalBrandingLocalizationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, organizationalBrandingLocalizationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", organizationalBrandingLocalizationCollectionResponse.value as any, serializeOrganizationalBrandingLocalization);
}
