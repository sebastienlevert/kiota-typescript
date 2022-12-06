import {BaseCollectionPaginationCountResponse} from '../';
import {UnifiedGroupSource} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UnifiedGroupSourceCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: UnifiedGroupSource[];
}
