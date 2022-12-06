import {BaseCollectionPaginationCountResponse, TeamsTemplate} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TeamsTemplateCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: TeamsTemplate[];
}
