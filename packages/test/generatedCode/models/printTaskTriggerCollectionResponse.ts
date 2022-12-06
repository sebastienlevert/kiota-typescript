import {BaseCollectionPaginationCountResponse, PrintTaskTrigger} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PrintTaskTriggerCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: PrintTaskTrigger[];
}
