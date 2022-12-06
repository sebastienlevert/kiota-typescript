import {BaseCollectionPaginationCountResponse, SecureScore} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SecureScoreCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: SecureScore[];
}
