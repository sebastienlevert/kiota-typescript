import {BaseCollectionPaginationCountResponse, ConditionalAccessTemplate} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ConditionalAccessTemplateCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ConditionalAccessTemplate[];
}
