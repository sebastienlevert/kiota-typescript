import {BaseCollectionPaginationCountResponse, ExcludeTarget} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ExcludeTargetCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ExcludeTarget[];
}
