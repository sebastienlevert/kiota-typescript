import {StsPolicy} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ClaimsMappingPolicy extends Partial<Parsable>, StsPolicy {
}
