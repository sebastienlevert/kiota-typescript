import {deserializeIntoOrganizationalBrandingLocalization} from './deserializeIntoOrganizationalBrandingLocalization';
import {deserializeIntoOrganizationalBrandingProperties} from './deserializeIntoOrganizationalBrandingProperties';
import {OrganizationalBranding} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOrganizationalBranding(organizationalBranding: OrganizationalBranding | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoOrganizationalBrandingProperties(organizationalBranding),
        "localizations": n => { organizationalBranding.localizations = n.getCollectionOfObjectValuesFromMethod(deserializeIntoOrganizationalBrandingLocalization) as any ; },
    }
}
