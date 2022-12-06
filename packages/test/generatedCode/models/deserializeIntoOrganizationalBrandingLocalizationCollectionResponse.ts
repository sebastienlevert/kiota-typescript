import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoOrganizationalBrandingLocalization} from './deserializeIntoOrganizationalBrandingLocalization';
import {OrganizationalBrandingLocalizationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOrganizationalBrandingLocalizationCollectionResponse(organizationalBrandingLocalizationCollectionResponse: OrganizationalBrandingLocalizationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(organizationalBrandingLocalizationCollectionResponse),
        "value": n => { organizationalBrandingLocalizationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoOrganizationalBrandingLocalization) as any ; },
    }
}
