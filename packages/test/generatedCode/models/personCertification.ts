import {ItemFacet} from './index';
import {DateOnly, Parsable} from '@microsoft/kiota-abstractions';

export interface PersonCertification extends ItemFacet, Partial<Parsable> {
    /** The referenceable identifier for the certification. */
    certificationId?: string;
    /** Description of the certification. */
    description?: string;
    /** Title of the certification. */
    displayName?: string;
    /** The date that the certification expires. */
    endDate?: DateOnly;
    /** The date that the certification was issued. */
    issuedDate?: DateOnly;
    /** Authority which granted the certification. */
    issuingAuthority?: string;
    /** Company which granted the certification. */
    issuingCompany?: string;
    /** The date that the certification became valid. */
    startDate?: DateOnly;
    /** URL referencing a thumbnail of the certification. */
    thumbnailUrl?: string;
    /** URL referencing the certification. */
    webUrl?: string;
}
