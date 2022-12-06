import {deserializeIntoOrganizationalBrandingProperties} from './deserializeIntoOrganizationalBrandingProperties';
import {OrganizationalBrandingLocalization} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOrganizationalBrandingLocalization(organizationalBrandingLocalization: OrganizationalBrandingLocalization | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoOrganizationalBrandingProperties(organizationalBrandingLocalization),
    }
}
