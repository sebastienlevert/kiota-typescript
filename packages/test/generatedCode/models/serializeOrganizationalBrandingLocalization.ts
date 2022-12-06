import {OrganizationalBrandingLocalization} from './index';
import {serializeOrganizationalBrandingProperties} from './serializeOrganizationalBrandingProperties';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOrganizationalBrandingLocalization(writer: SerializationWriter, organizationalBrandingLocalization: OrganizationalBrandingLocalization | undefined = {}) : void {
        serializeOrganizationalBrandingProperties(writer, organizationalBrandingLocalization)
}
