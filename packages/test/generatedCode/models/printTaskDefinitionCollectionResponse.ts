import {BaseCollectionPaginationCountResponse, PrintTaskDefinition} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PrintTaskDefinitionCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: PrintTaskDefinition[];
}
