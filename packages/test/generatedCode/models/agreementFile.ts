import {AgreementFileLocalization, AgreementFileProperties} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AgreementFile extends AgreementFileProperties, Partial<Parsable> {
    /** The localized version of the terms of use agreement files attached to the agreement. */
    localizations?: AgreementFileLocalization[];
}
