import {AgreementFileProperties, AgreementFileVersion} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AgreementFileLocalization extends AgreementFileProperties, Partial<Parsable> {
    /** Read-only. Customized versions of the terms of use agreement in the Azure AD tenant. */
    versions?: AgreementFileVersion[];
}
