import {BaseCollectionPaginationCountResponse} from '../';
import {Relation} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface RelationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: Relation[];
}
