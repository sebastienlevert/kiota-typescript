import {BaseCollectionPaginationCountResponse, ColumnDefinition} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ColumnDefinitionCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ColumnDefinition[];
}
