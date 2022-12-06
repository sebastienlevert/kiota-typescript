import {AdministrativeUnit, EducationClass, EducationOrganization, EducationUser, IdentitySet, PhysicalAddress} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EducationSchool extends EducationOrganization, Partial<Parsable> {
    /** Address of the school. */
    address?: PhysicalAddress;
    /** The underlying administrativeUnit for this school. */
    administrativeUnit?: AdministrativeUnit;
    /** Classes taught at the school. Nullable. */
    classes?: EducationClass[];
    /** Entity who created the school. */
    createdBy?: IdentitySet;
    /** ID of school in syncing system. */
    externalId?: string;
    /** ID of principal in syncing system. */
    externalPrincipalId?: string;
    /** The fax property */
    fax?: string;
    /** Highest grade taught. */
    highestGrade?: string;
    /** Lowest grade taught. */
    lowestGrade?: string;
    /** Phone number of school. */
    phone?: string;
    /** Email address of the principal. */
    principalEmail?: string;
    /** Name of the principal. */
    principalName?: string;
    /** School Number. */
    schoolNumber?: string;
    /** Users in the school. Nullable. */
    users?: EducationUser[];
}
