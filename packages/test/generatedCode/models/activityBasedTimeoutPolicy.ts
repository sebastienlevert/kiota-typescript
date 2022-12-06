import {StsPolicy} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ActivityBasedTimeoutPolicy extends Partial<Parsable>, StsPolicy {
}
