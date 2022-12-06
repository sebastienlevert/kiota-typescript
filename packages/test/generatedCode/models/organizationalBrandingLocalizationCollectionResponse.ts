import {BaseCollectionPaginationCountResponse, OrganizationalBrandingLocalization} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface OrganizationalBrandingLocalizationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: OrganizationalBrandingLocalization[];
}
