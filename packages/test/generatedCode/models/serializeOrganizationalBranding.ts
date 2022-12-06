import {OrganizationalBranding} from './index';
import {serializeOrganizationalBrandingLocalization} from './serializeOrganizationalBrandingLocalization';
import {serializeOrganizationalBrandingProperties} from './serializeOrganizationalBrandingProperties';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOrganizationalBranding(writer: SerializationWriter, organizationalBranding: OrganizationalBranding | undefined = {}) : void {
        serializeOrganizationalBrandingProperties(writer, organizationalBranding)
            writer.writeCollectionOfObjectValuesFromMethod("localizations", organizationalBranding.localizations as any, serializeOrganizationalBrandingLocalization);
}
