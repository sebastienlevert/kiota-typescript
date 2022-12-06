import {AgreementFileProperties} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AgreementFileVersion extends AgreementFileProperties, Partial<Parsable> {
}
