import {StsPolicy} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TokenIssuancePolicy extends Partial<Parsable>, StsPolicy {
}
