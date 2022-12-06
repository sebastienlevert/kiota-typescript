import {Agreement, AgreementAcceptance, Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TermsOfUseContainer extends Entity, Partial<Parsable> {
    /** Represents the current status of a user's response to a company's customizable terms of use agreement. */
    agreementAcceptances?: AgreementAcceptance[];
    /** Represents a tenant's customizable terms of use agreement that's created and managed with Azure Active Directory (Azure AD). */
    agreements?: Agreement[];
}
