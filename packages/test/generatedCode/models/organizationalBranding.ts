import {OrganizationalBrandingLocalization, OrganizationalBrandingProperties} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface OrganizationalBranding extends OrganizationalBrandingProperties, Partial<Parsable> {
    /** Add different branding based on a locale. */
    localizations?: OrganizationalBrandingLocalization[];
}
