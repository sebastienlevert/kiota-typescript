import {BaseCollectionPaginationCountResponse, TeamsTab} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TeamsTabCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: TeamsTab[];
}
