import {BaseCollectionPaginationCountResponse, Person} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PersonCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: Person[];
}
