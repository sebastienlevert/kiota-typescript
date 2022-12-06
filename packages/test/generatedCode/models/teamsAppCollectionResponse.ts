import {BaseCollectionPaginationCountResponse, TeamsApp} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TeamsAppCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: TeamsApp[];
}
