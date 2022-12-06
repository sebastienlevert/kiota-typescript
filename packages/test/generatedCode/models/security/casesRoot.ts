import {Entity} from '../';
import {EdiscoveryCase} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface CasesRoot extends Entity, Partial<Parsable> {
    /** The ediscoveryCases property */
    ediscoveryCases?: EdiscoveryCase[];
}
