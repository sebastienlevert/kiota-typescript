import {StsPolicy} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TokenLifetimePolicy extends Partial<Parsable>, StsPolicy {
}
